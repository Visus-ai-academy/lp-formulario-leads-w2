// Apps Script — Pre-Aplicação W2 Club
// Planilha: 17DPzWjF6QdTSKpVK5bppR8Di8wDSEaHaHXKnrbCskSw | Aba: Respostas
//
// Cole este código no Apps Script da planilha, publique como Web App
// com acesso "Qualquer pessoa" e cole a URL no .env do projeto:
// VITE_APPS_SCRIPT_URL_PRE_APLICACAO=https://script.google.com/macros/s/.../exec

var SPREADSHEET_ID = '17DPzWjF6QdTSKpVK5bppR8Di8wDSEaHaHXKnrbCskSw'
var SHEET_NAME = 'Respostas'

var HEADERS = ['DataHora', 'SessionToken', 'Nome', 'Email', 'Whatsapp', 'Instagram', 'Especialidade', 'Faturamento', 'Clinica', 'Investimento']

// Índices das colunas (1-based)
var COL = {
  dataHora:      1,
  sessionToken:  2,
  nome:          3,
  email:         4,
  whatsapp:      5,
  instagram:     6,
  especialidade: 7,
  faturamento:   8,
  clinica:       9,
  investimento:  10,
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID)
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
  }
  return sheet
}

function findRowByToken(sheet, token) {
  var lastRow = sheet.getLastRow()
  if (lastRow < 2) return -1
  var tokens = sheet.getRange(2, COL.sessionToken, lastRow - 1, 1).getValues()
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i][0] === token) return i + 2
  }
  return -1
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var token = data.sessionToken

    if (!token) {
      return jsonResponse({ status: 'error', message: 'sessionToken ausente' })
    }

    var sheet = getOrCreateSheet()
    var row = findRowByToken(sheet, token)

    if (row === -1) {
      // Primeira chegada deste token — cria linha nova
      var newRow = new Array(HEADERS.length).fill('')
      newRow[COL.dataHora - 1]      = new Date().toLocaleString('pt-BR')
      newRow[COL.sessionToken - 1]  = token
      if (data.nome)          newRow[COL.nome - 1]          = data.nome
      if (data.email)         newRow[COL.email - 1]         = data.email
      if (data.whatsapp)      newRow[COL.whatsapp - 1]      = data.whatsapp
      if (data.instagram)     newRow[COL.instagram - 1]     = data.instagram
      if (data.especialidade) newRow[COL.especialidade - 1] = data.especialidade
      if (data.faturamento)   newRow[COL.faturamento - 1]   = data.faturamento
      if (data.clinica)       newRow[COL.clinica - 1]       = data.clinica
      if (data.investimento)  newRow[COL.investimento - 1]  = data.investimento
      sheet.appendRow(newRow)
    } else {
      // Linha já existe — atualiza apenas os campos enviados
      if (data.nome          !== undefined) sheet.getRange(row, COL.nome).setValue(data.nome)
      if (data.email         !== undefined) sheet.getRange(row, COL.email).setValue(data.email)
      if (data.whatsapp      !== undefined) sheet.getRange(row, COL.whatsapp).setValue(data.whatsapp)
      if (data.instagram     !== undefined) sheet.getRange(row, COL.instagram).setValue(data.instagram)
      if (data.especialidade !== undefined) sheet.getRange(row, COL.especialidade).setValue(data.especialidade)
      if (data.faturamento   !== undefined) sheet.getRange(row, COL.faturamento).setValue(data.faturamento)
      if (data.clinica       !== undefined) sheet.getRange(row, COL.clinica).setValue(data.clinica)
      if (data.investimento  !== undefined) sheet.getRange(row, COL.investimento).setValue(data.investimento)
    }

    return jsonResponse({ status: 'ok' })
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() })
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}
