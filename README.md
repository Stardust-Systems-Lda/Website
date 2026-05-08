# RenovAR Website

Landing page responsiva para o RenovAR, um sistema IoT modular para monitorização da qualidade do ar interior e controlo automático da ventilação em edifícios de serviços.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- lucide-react

## Requisitos

- Node.js 22 recomendado
- npm

## Desenvolvimento

Instalar dependências:

```bash
npm install
```

Correr servidor local:

```bash
npm run dev
```

Por defeito, o Vite fica disponível em:

```txt
http://127.0.0.1:5173
```

## Build de produção

```bash
npm run build
```

O output é gerado em:

```txt
dist/
```

## Preview local do build

Usar o preview do Vite:

```bash
npm run preview
```

Ou servir diretamente a pasta `dist`:

```bash
npm run serve:dist
```

## Deploy recomendado

Para manter o custo o mais próximo possível de zero, a opção recomendada é Cloudflare Pages.

Configuração:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Node version: 22
```

## Estrutura principal

```txt
src/
  App.tsx       Página principal e componentes da landing page
  index.css     Tailwind e estilos globais
  main.tsx      Entrada React
scripts/
  serve-dist.mjs Servidor estático simples para preview local do build
```

## Conteúdo

O site comunica o RenovAR como uma camada operacional inteligente para edifícios existentes:

- Monitorização contínua de qualidade do ar interior
- Medição de CO₂, temperatura, humidade, partículas e VOCs
- Interpretação local/cloud
- Controlo automático de ventilação natural ou mecânica
- Dashboard técnico para visualização em tempo real e histórico
- Separação clara entre MVP atual e roadmap futuro

## Scripts

```txt
npm run dev        Ambiente de desenvolvimento
npm run build      Build de produção
npm run preview    Preview Vite do build
npm run serve:dist Servidor estático local para dist/
```
