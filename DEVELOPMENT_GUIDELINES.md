# Regras de Desenvolvimento — Fila de Espera W2 Club

Este documento define os padrões técnicos, de identidade visual e de infraestrutura para este projeto. Siga estas diretrizes em cada interação.

---

## 🎯 1. Objetivo do Projeto

*   **Produto**: Uma landing page que vai servir como captação de leads interessados para a próxima turma de mentoria do W2 Club.

---

## 🛠 2. Tecnologias Core

*   **Frontend**: React + Vite + TypeScript.
*   **Estilização**: Tailwind CSS (utilizar apenas classes utilitárias, evitar CSS externo).
*   **Animações**: Framer Motion (para transições dinâmicas e efeitos de scroll).
*   **Smooth Scroll**: Utilizar a biblioteca Lenis (https://github.com/darkroomengineering/lenis/blob/main/README.md) para transições suaves de scroll.
*   **Componentes**: Utilizar o MCP do Shadcn para criação dos componentes e elementos.
*   **Ícones**: Usar a biblioteca de ícones do Flaticon — `npm i @flaticon/flaticon-uicons`.
*   **Tipografia**: Utilizar a fonte **Inter Tight** (via Google Fonts). **Bold** para títulos e headings (usar o peso bold real da fonte, sem forçar). **Regular** para corpo de texto, com eventuais destaques em **Semibold** para palavras-chave ou highlights.

---

## 🎨 3. Identidade Visual

### Paleta de Cores

| Token               | Hex       | Uso                                  |
|---------------------|-----------|--------------------------------------|
| **Primária**        | `#7ebfbf` | CTAs, destaques, elementos de ênfase |
| **Fundo Principal** | `#012e40` | Background padrão                    |
| **Texto Principal** | `#f0f4e7` | Títulos e corpo de texto             |
| **Texto Secundário**| `#f0f4e7` | Parágrafos de apoio                  |

### Tipografia

*   **Fonte única**: Inter Tight (Google Fonts).
*   **Títulos/Headings**: `font-weight: 700` (Bold).
*   **Corpo de texto**: `font-weight: 400` (Regular).
*   **Highlights**: `font-weight: 600` (Semibold) — para palavras-chave dentro do corpo.

---

## 📁 4. Estrutura de Pastas e Caminhos

*   `/src/components/sections`: Componentes de seções inteiras da página (LP-style).
*   `/src/components/ui`: Componentes atômicos e reutilizáveis (botões, cards, inputs).
*   `/public/assets`: TODAS as imagens, ícones e arquivos estáticos.
*   **Caminhos de Assets**: Sempre use caminhos relativos sem a barra inicial para garantir compatibilidade (ex: `src="assets/foto.webp"` em vez de `src="/assets/foto.webp"`).

---

## 🚀 5. Deploy e Produção (Docker & VPS)

O projeto é servido via Docker na VPS. Mantenha os seguintes padrões:

*   **Dockerfile**: Deve gerar uma build otimizada e servir via Nginx (ou similar) em ambiente Linux.
*   **build.sh**: Script na raiz que automatiza o `docker build`.
*   **Atualização de Serviço**: Para refletir mudanças na VPS após o `git pull`, use o comando:
    `docker service update --force w2-fila-espera`
*   **Nome do serviço Docker**: `w2-fila-espera`

---

## 📝 6. Git e Fluxo de Trabalho

*   **Commits**: Frequentes e descritivos em português (ex: `feat: adiciona seção hero`, `fix: alinhamento mobile`).
*   **SEO & Social**: O arquivo `index.html` deve sempre conter meta tags de título, descrição e a imagem de destaque (`og:image`).
*   **Simplicidade**: Mantenha o código limpo, evite bibliotecas pesadas desnecessárias e priorize componentes que rodem bem em produções rápidas.

---

## 📱 7. Regras de Negócio e Responsividade

*   **Mobile-First**: A prioridade de validação e refinamento é sempre a experiência mobile. Utilizar boas práticas de UX/UI e SEO.
*   **Responsividade**: Garantir que o site seja responsivo em todos os dispositivos. Para desktop, utilizar `vw` como unidade de medida (base de conversão: **1920px**). Para mobile, utilizar `px`, sempre centralizando e justificando os elementos ao centro.
*   **Performance**: O site deve ser rápido e leve. Evitar bibliotecas pesadas e imagens não otimizadas.
*   **SEO**: Utilizar boas práticas de SEO e meta tags otimizadas.
*   **Acessibilidade**: Utilizar boas práticas de acessibilidade.

### Princípios de código:
*   **KISS**: Keep It Simple, Stupid — Código simples e direto.
*   **DRY**: Don't Repeat Yourself — Não repetir código desnecessário.
*   **YAGNI**: You Ain't Gonna Need This — Não adicionar funcionalidades desnecessárias.
*   **Separation of Concerns**: Separar o código em componentes reutilizáveis e manter a organização.