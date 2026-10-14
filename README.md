# RenovAR Website

Site institucional da RenovAR Systems, com informação sobre o sistema de monitorização do ar e controlo da ventilação, o MVP funcional, a fase de desenvolvimento e a equipa atual.

## Desenvolvimento

Requisitos: Node.js 22 ou superior e npm.

```sh
npm ci
npm run dev
```

O servidor de desenvolvimento fica disponível em `http://127.0.0.1:5173`.

```sh
npm run build
npm run preview
```

O build executa a verificação TypeScript e gera `dist/`. O preview serve o build em `http://127.0.0.1:4173`. Também é possível usar `npm run serve:dist`.

## Publicação

O domínio `renovar-systems.com` está associado ao projeto `renovar` no Cloudflare Pages. A integração Git usa a branch `main` do repositório `Stardust-Systems-Lda/Website`, com `npm run build` e diretório de saída `dist`.

As alterações devem entrar numa branch própria e ser revistas num Pull Request. A publicação automática depende da integração nessa branch de produção e do sucesso do build no Cloudflare.

## Estrutura

- `src/App.tsx`: conteúdo, navegação, exploração das etapas e perguntas frequentes.
- `src/usePageEffects.ts`: secção atual na navegação e entrada discreta de blocos com observadores nativos, sem processamento contínuo do scroll.
- `src/SystemDiagram.tsx` e `src/schematic.css`: fluxo de dados, comando da ventilação e nova medição, com destaque da etapa selecionada.
- `src/ThemeToggle.tsx` e `public/theme.js`: seletor claro/escuro, preferência do dispositivo e armazenamento local da escolha, aplicado antes de desenhar a página.
- `src/index.css`: estilos responsivos, tipografia, movimento reduzido, reset explícito e variáveis de marca, sem dependência de Tailwind.
- `public/assets`: elementos oficiais de marca e fotografias do protótipo.
- `public/assets/fonts`: Montserrat Regular/Bold, alojadas localmente, com a licença SIL OFL.
- `index.html`: metadados, idioma, favicon e carregamento das fontes.
- `public/_headers`: política de conteúdo e cabeçalhos HTTP para Cloudflare Pages.

## Marca e conteúdo

A apresentação segue o Manual de Normas Gráficas RenovAR v3.1: Montserrat, azul-marinho `#002262`, azul `#0571D0` e ciano `#0EBDE4` como acento. O cabeçalho usa apenas o símbolo oficial, sem composição de nome em HTML; o modo escuro usa o símbolo negativo branco oficial. A assinatura completa mantém o fundo branco original no rodapé. Os ficheiros oficiais de marca são usados sem redesenho. As fontes WOFF2 conservam os glifos das fontes institucionais, com compressão para a web.

As fotografias identificam o protótipo; a antiga fotografia da equipa foi removida. A equipa publicada é Afonso Mota, Gabriel Conceição e Nuno Ferreira.

O conteúdo apresenta o funcionamento do sistema e o protótipo testado em ambiente controlado (TRL 4), com uma ação principal de avaliação de pilotos. A integração é definida por edifício. A página não inclui projeções de desempenho, testemunhos inventados ou funcionalidades futuras como oferta atual.

## Aparência

O botão no cabeçalho alterna entre modo claro e escuro e está sempre disponível em computador e telemóvel. Na primeira visita, o site acompanha a preferência do dispositivo. Uma escolha manual fica guardada exclusivamente no browser, em `localStorage`, na chave `renovar-theme` (`light` ou `dark`). Não é enviada ao servidor. Se o browser bloquear o armazenamento, o seletor continua a funcionar durante a visita. Alterações noutra aba são sincronizadas; sem escolha manual, o site acompanha mudanças do modo do dispositivo.

Os textos, superfícies e controlos têm cores próprias para cada modo. O mecanismo de controlo ocupa uma faixa azul-marinho nos dois modos, com contraste próprio para o esquema. Os ficheiros de marca e fotografias conservam as cores originais. O carregamento inicial do tema usa um ficheiro local externo, compatível com a política CSP sem código inline.

## Composição e interações

A abertura identifica diretamente a ventilação inteligente para edifícios existentes. A hierarquia usa Montserrat Regular/Bold, textos mais legíveis e fotografias reais com legendas fora da imagem. As secções variam a composição e o espaçamento conforme a função: contexto, mecanismo, equipamentos, pilotos, fundadores e contacto.

O esquema apresenta um painel contínuo, com entradas, decisão, comando e retorno. Em ecrãs estreitos, as entradas empilham sem reduzir as letras. A ação «Próxima etapa» permite percorrer o ciclo e voltar ao início; os botões mantêm foco e o texto é anunciado por uma região live.

A navegação indica a secção atual com `aria-current="location"`. O menu móvel foca o primeiro link ao abrir, devolve foco ao botão com Escape e move-o para a secção ao seguir uma âncora. As entradas ao fazer scroll são curtas e aplicadas a poucos blocos, com conteúdo visível por defeito. Sem `IntersectionObserver`, a página mantém a apresentação e a navegação normal. `prefers-reduced-motion` elimina os movimentos e torna os blocos visíveis, incluindo quando a preferência muda durante a visita.

Não são usadas bibliotecas novas para estas interações. Os movimentos usam opacidade e transformação; as classes não exigem estilos inline nem alterações à política CSP.

## Segurança

O site é estático, sem recolha de formulários, scripts de terceiros, cookies da aplicação ou credenciais no cliente. O único armazenamento local da aplicação é a preferência de aparência. As fontes e imagens são servidas pela mesma origem.

A política CSP permite apenas os recursos locais usados pelo site e não permite código inline/eval, objetos ou enquadramento por outros sites. Os cabeçalhos também limitam permissões do browser e ativam `nosniff`, política de referência e HSTS, sem alargar HSTS a outros subdomínios. Os cabeçalhos de `public/_headers` são aplicados pelo Cloudflare Pages; o preview padrão do Vite não os aplica.

As ferramentas Vite/plugin React, PostCSS e Autoprefixer foram atualizadas. Tailwind foi removido por não ser usado na interface, reduzindo a cadeia de dependências.

## Verificação antes de publicar

- Executar `npm run build`.
- Rever a página em computador e telemóvel, incluindo 320 px.
- Verificar os dois temas, escolha inicial do dispositivo, persistência, contraste, navegação por teclado, menu, etapas de funcionamento e perguntas frequentes.
- Verificar a ação de próxima etapa e reinício, seleção rápida, foco após navegação, secção atual e movimento reduzido durante a visita.
- Executar `npm audit` e verificar o carregamento/interações com os cabeçalhos CSP do alojamento.
- Confirmar que imagens e fontes carregam e que a fotografia antiga da equipa não consta de `dist`.
- Rever o diff para excluir credenciais, ficheiros grandes e alterações não relacionadas.

## Referências de conceção

A revisão usa investigação de escrita e navegação da [Nielsen Norman Group](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/), exemplos de organização de produto da [Airthings](https://www.airthings.com/business/solution-overview) e [WindowMaster](https://www.windowmaster.com/control-systems/natural-and-hybrid-ventilation/nv-embedded/), e documentação de desempenho do [web.dev](https://web.dev/learn/performance/lazy-load-images-and-iframe-elements). As referências orientam a estrutura; os factos publicados são da RenovAR.

Os cabeçalhos seguem a [documentação Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/headers/) e o [OWASP HTTP Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html).

O refinamento da composição considera a avaliação de padrões visuais da [NNGroup](https://www.nngroup.com/articles/ai-prototyping/), as escolhas de simplificação descritas pela equipa da [Linear](https://linear.app/now/behind-the-latest-design-refresh), e a ligação da identidade ao setor nas referências [Instrument/Procore](https://www.instrument.com/work/procore) e [Pentagram/Frank](https://www.pentagram.com/work/frank). As interações seguem a documentação de [animação web.dev](https://web.dev/articles/animations-guide/) e [navegação por disclosure da WAI](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).
