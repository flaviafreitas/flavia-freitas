# Flávia Freitas

Portfólio em Nuxt 4, Vue 3, TypeScript e SCSS. A página inicial segue o Figma do portfólio. O Sanity Studio fica em `/studio` no mesmo aplicativo.

## Desenvolvimento

Use Node.js 22.12 ou superior.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Abra http://localhost:3000. A página inicial já exibe o conteúdo do layout antes de conectar o CMS.

## Conectar o seu Sanity

1. A aplicação está vinculada ao projeto **Flávia Freitas** (`bwvknndw`) e ao dataset público **production**.
2. O arquivo `.env.example` contém os identificadores públicos. Copie para `.env.local` se quiser personalizar a configuração local.
3. No [painel do projeto](https://www.sanity.io/manage/project/bwvknndw/api), abra **API → CORS origins → Add CORS origin**. Adicione `http://localhost:3000` e marque **Allow credentials** para permitir o login no Studio. Se o Nuxt usar outra porta, cadastre a origem que aparece no terminal.
4. Reinicie o Nuxt, abra http://localhost:3000/studio e entre com sua conta Sanity. Abra **Página inicial** e publique. Faça o mesmo em **Cabeçalho, rodapé e contato**. Os documentos novos já começam com os dados do portfólio.
5. No ambiente de hospedagem, configure as mesmas variáveis públicas e adicione a origem HTTPS do domínio às origens CORS com credenciais. Os tokens pessoais e de escrita ficam fora do repositório.

## Conteúdo

Em **Página inicial**, as abas organizam apresentação, especialidades, projetos, sobre, serviços, processo e contato. O primeiro projeto da lista recebe destaque. Cada projeto aceita uma imagem enviada ao Sanity, uma descrição e um link externo opcional. Sem link externo, o visitante pode abrir a prévia no site.

Em **Cabeçalho, rodapé e contato**, edite o nome, o e-mail e os links sociais. As ilustrações iniciais representam os estudos conceituais Órbita, Lume e Forma do Figma.

## Formatação

Use um tab por nível, com largura visual de quatro espaços. Rode `npm run format` para formatar o código e `npm run format:check` para conferir o padrão.

## Verificação e produção

`npm run typecheck` verifica os tipos. `npm run build` gera o servidor para executar com `npm start`. Na hospedagem com servidor, a página consulta a versão publicada no Sanity. Para hospedagem estática, use `npm run generate`, configure o fallback das rotas do Studio e gere o site novamente depois de publicar alterações.

Defina `NUXT_PUBLIC_SITE_URL` com a origem HTTPS pública antes do build de produção para gerar a URL canônica, a imagem de compartilhamento e o sitemap. Em hospedagem estática, configure também o cabeçalho `X-Robots-Tag: noindex, nofollow` para `/studio` e suas subrotas.
