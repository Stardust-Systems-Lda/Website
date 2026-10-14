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

### Página de links e contactos

`https://renovar-systems.com/links/` reúne o site principal, avaliação de pilotos, email geral e contactos dos três fundadores. O rodapé da landing page inclui uma ligação para esta página. Os links `/links/#afonso`, `/links/#gabriel` e `/links/#nuno` abrem diretamente o contacto respetivo e podem ser usados em assinaturas ou códigos QR.

Os botões **Guardar contacto** descarregam ficheiros vCard 3.0 (`.vcf`) com nome, função, empresa, telefone, email e link pessoal. No telemóvel, abrir o ficheiro permite confirmar a adição à agenda; a página não grava contactos sem essa confirmação. Email e chamadas usam as aplicações do dispositivo. **Copiar link** copia o endereço da página ou do contacto escolhido para partilhar. Se o browser bloquear a cópia, aparece um campo para cópia manual.

Editar `src/data/links.json` para atualizar contactos. `redes` e `recursos` começam vazios: as secções só aparecem quando tiverem ligações reais. Exemplo de uma entrada futura, substituindo o endereço pelo endereço confirmado:

```json
{"label": "LinkedIn", "url": "https://www.linkedin.com/company/ENDERECO-CONFIRMADO/"}
```

`recursos` aceita o mesmo formato para apresentações públicas, vídeos ou outros materiais aprovados. Não incluir documentos internos. Os identificadores das pessoas devem manter-se estáveis para preservar links já partilhados. Os contactos foram transcritos dos cartões de visita da RenovAR; o email geral é o publicado no site.

`npm run dev` e `npm run build` regeneram `public/links/index.html` e os vCards a partir desse ficheiro. Depois de editar os dados durante uma sessão, executar `node scripts/build-links.mjs`. HTML e vCards gerados ficam versionados, permitindo publicar a pasta estática sem depender de JavaScript para ver os contactos e usar as ligações principais. Os estilos e as interações progressivas estão em `public/links/links.css` e `public/links/links.js`. São usados apenas recursos locais e a mesma preferência de aparência do site.

Verificação adicional: `node --test scripts/build-links.test.mjs`. Confirmar também o ficheiro num iPhone e num Android reais antes de distribuir cartões impressos; a importação para a agenda depende da aplicação de contactos do dispositivo.

### Ficheiros do site

- `src/App.tsx`: conteúdo, navegação, exploração das etapas e perguntas frequentes.
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

Os textos, superfícies, controlos e esquema têm cores próprias para cada modo. Os ficheiros de marca e fotografias conservam as cores originais. O carregamento inicial do tema usa um ficheiro local externo, compatível com a política CSP sem código inline.

## Segurança

O site é estático, sem recolha de formulários, scripts de terceiros, cookies da aplicação ou credenciais no cliente. O único armazenamento local da aplicação é a preferência de aparência. As fontes e imagens são servidas pela mesma origem.

A política CSP permite apenas os recursos locais usados pelo site e não permite código inline/eval, objetos ou enquadramento por outros sites. Os cabeçalhos também limitam permissões do browser e ativam `nosniff`, política de referência e HSTS, sem alargar HSTS a outros subdomínios. Os cabeçalhos de `public/_headers` são aplicados pelo Cloudflare Pages; o preview padrão do Vite não os aplica.

As ferramentas Vite/plugin React, PostCSS e Autoprefixer foram atualizadas. Tailwind foi removido por não ser usado na interface, reduzindo a cadeia de dependências.

## Verificação antes de publicar

- Executar `npm run build`.
- Rever a página em computador e telemóvel, incluindo 320 px.
- Verificar os dois temas, escolha inicial do dispositivo, persistência, contraste, navegação por teclado, menu, etapas de funcionamento e perguntas frequentes.
- Executar `npm audit` e verificar o carregamento/interações com os cabeçalhos CSP do alojamento.
- Confirmar que imagens e fontes carregam e que a fotografia antiga da equipa não consta de `dist`.
- Rever o diff para excluir credenciais, ficheiros grandes e alterações não relacionadas.

## Referências de conceção

A revisão usa investigação de escrita e navegação da [Nielsen Norman Group](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/), exemplos de organização de produto da [Airthings](https://www.airthings.com/business/solution-overview) e [WindowMaster](https://www.windowmaster.com/control-systems/natural-and-hybrid-ventilation/nv-embedded/), e documentação de desempenho do [web.dev](https://web.dev/learn/performance/lazy-load-images-and-iframe-elements). As referências orientam a estrutura; os factos publicados são da RenovAR.

Os cabeçalhos seguem a [documentação Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/headers/) e o [OWASP HTTP Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html).
