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
- `src/index.css`: estilos responsivos, tipografia e movimento reduzido.
- `tailwind.config.ts`: cores oficiais e fonte institucional.
- `public/assets`: elementos oficiais de marca e fotografias do protótipo.
- `public/assets/fonts`: Montserrat Regular/Bold, alojadas localmente, com a licença SIL OFL.
- `index.html`: metadados, idioma, favicon e carregamento das fontes.

## Marca e conteúdo

A apresentação segue o Manual de Normas Gráficas RenovAR v3.1: Montserrat, azul-marinho `#002262`, azul `#0571D0` e ciano `#0EBDE4` como acento. Os ficheiros oficiais de marca são usados sem redesenho. As fontes WOFF2 conservam os glifos das fontes institucionais, com compressão para a web.

As fotografias identificam o protótipo; a antiga fotografia da equipa foi removida. A equipa publicada é Afonso Mota, Gabriel Conceição e Nuno Ferreira.

O conteúdo distingue as capacidades do MVP em TRL 4, a preparação de pilotos e as capacidades futuras. A integração com equipamentos depende de avaliação técnica e não se publica uma percentagem de poupança energética sem medição em contexto real.

## Verificação antes de publicar

- Executar `npm run build`.
- Rever a página em computador e telemóvel, incluindo 320 px.
- Verificar navegação por teclado, menu, etapas de funcionamento e perguntas frequentes.
- Confirmar que imagens e fontes carregam e que a fotografia antiga da equipa não consta de `dist`.
- Rever o diff para excluir credenciais, ficheiros grandes e alterações não relacionadas.
