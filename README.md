<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/status-developing-lightgrey?style=for-the-badge&logo=headspace&logoColor=yellow&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/delta-code-calendar?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# 📅 Delta Code Calendar

<br>
<p align="center">
  <a href="#-apresentação-em-vídeo-do-projeto">Vídeo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-etapas">Etapas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-páginas-e-rotas">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demais-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-o-projeto">Clone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato-dos-contribuintes">Contato</a>
</p>
<br>

## 📹 Apresentação em Vídeo do Projeto
<div align="center">
  <video src=".github/video-presentation.mp4" />
</div>

> **Caso o vídeo apresente algum erro, recarregue a página!**<br>
> Acesse o projeto online **[AQUI](https://luk4x-delta-code-calendar.netlify.app/)**

## 🚀 Tecnologias Utilizadas

> Abaixo estão as 6 tecnologias utilizadas no desenvolvimento do projeto, e seus motivos

<table align="center">
    <td align="center">
      <a href="https://vitejs.dev/">
        <img src="https://skillicons.dev/icons?i=vite" width="65px" alt="Vite icon"/><br>
        <sub>
          <b>
            <pre>ViteJS</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Após refletir sobre o real objetivo do teste, devido a sua simplicidade em termos de recursos, concluí que a estrutura minimalista do Vite era ideal.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://pt-br.reactjs.org/">
        <img src="https://skillicons.dev/icons?i=react" width="65px" alt="React icon"/><br>
        <sub>
          <b>
            <pre>ReactJS</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Ele é um requisito para o teste, e é a base do Vite.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://styled-components.com/">
        <img src="https://skillicons.dev/icons?i=styledcomponents" width="65px" alt="Styled Components icon"/><br>
        <sub>
          <b>
            <pre>Styled<br/>Components</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>O escolhi pois, tendo em vista que teria que desenvolver muitas soluções do 0, precisaria de uma ferramenta para estilização tão poderosa e flexível quanto ele.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
        <img src="https://skillicons.dev/icons?i=js" width="65px" alt="Javascript icon"/><br>
        <sub>
          <b>
            <pre>Javascript</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Fica implícito na sintáxe <code>JSX</code> do Vite.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/">
        <img src="https://skillicons.dev/icons?i=css" width="65px" alt="CSS3 icon"/><br>
        <sub>
          <b>
            <pre>CSS3</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Fica implícito no Styled Components.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
        <img src="https://skillicons.dev/icons?i=html" width="65px" alt="HTML5 icon"/><br>
        <sub>
          <b>
            <pre>HTML5</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Fica implícito na sintaxe <code>JSX</code> do Vite.</i>
        </details>
      </h6>
    </td>
  </tr>
</table>

## 🗓️ Etapas

> 26 das atuais 29 etapas já foram concluídas, mas novas podem ser adicionadas!

<table align="center" height="548px">
  <tr>
    <td>
      🗹
    </td>
    <td>
      Definição da estrutura base e instalação de dependências
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
       Definição de estilos globais
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Armazenamento dos ícones necessário do layout
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Padronização das cores utilizando o <code>ThemeProvider</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação do componente central <code>components/App</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/Header</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/NavigationPanel</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/MainContent</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/UserCalendar</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Correção do comportamento <code>components/Header</code> durante o scroll
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação do <code>utils/userMockup</code> e melhoria da lógica geral
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/CalendarSelect</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação do <code>utils/calendarHelpers</code> e melhoria da lógica geral
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Deixando o fluxo básico do calendário funcional
      <img align="right" src="https://user-images.githubusercontent.com/86276393/213449768-416cc5b4-e3a7-4774-85b8-9a58cb1f8ae6.png" alt="arrow icon" />
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Estilo do calendário atualizado para 7x6
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Recebendo os eventos do usuário ao longo do mês/ano selecionado no calendário
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento do <code>components/UserCalendarEvents</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação do <code>context/UserCalendarContext</code> e melhoria da lógica geral
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Recebendo a lista de eventos do usuário no dia selecionado no calendário
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Filtrando os dias dos eventos baseado em seus tipos (entrada, saída ou ambos)
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Resolvendo bug do dia atrasado e melhoria da lógica geral
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Criação do <code>utils/getFormattedCurrency</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Deixando o calendário completamente funcional e melhoria da lógica geral
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Melhoria do <code>utils/userMockup</code>
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Desenvolvimento da responsividade
    </td>
  </tr>
  <tr>
    <td>
      🗹
    </td>
    <td>
      Melhoria do SEO e da lógica geral
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Melhoria do <code>UserCalendar</code>: Chamar mês/ano anterior/posterior ao clicar em seus <br/>
      dias (isFromThisMonth=false)
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
      Melhoria do <code>UserCalendarEvents</code>: Mostrar apenas 1 dia quando no estado inicial <br/>
      e tiver mais de um (ex: 5...), e mostrar os outros ao evento de click/hover/focus na <br/>
      lista dos dias
    </td>
  </tr>
  <tr>
    <td>
      ☐
    </td>
    <td>
    Melhoria do <code>UserCalendarEvents</code>: Limitar tamanho da string do título do evento
    </td>
  </tr>
</table>

## 📝 Sobre

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!

<img align="right" src="https://user-images.githubusercontent.com/86276393/212980660-edc0babb-f014-439f-b823-4a4e9ece7d45.png" alt="notepad icon" />
Em resumo, a aplicação se consiste no meu resultado ao fazer o <a href="https://www.figma.com/file/pmfrVwEEjDQgZlItVmjr9c/Challenge%3A-Delta-Code?node-id=0-1&t=bqDD8plVKRwU2Sq4-0">Teste técnico de calendário da Delta Code</a>, onde deve-se basicamente desenvolver esse layout fornecido com fidelidade, sendo a principal parte do teste, o desenvolvimento do componente de calendário com as interações requisitadas e respeitando a restrição de fazer do 0, sem auxílio de nenhuma lib externa.
<br/><br/>
Como mencionado nas instruções, fiquei bastante tentado a desenvolver uma API para essa aplicação, mas após refletir percebi que devido ao prazo de 7 dias, tanto a API quanto a Interface ficariam bem medianas por falta de tempo se eu tentasse desenvolver ambas, portanto decidi focar todo o meu tempo e esforço no Front-end (mas ainda irei desenvolver essa API futuramente 🤩), e me aprofundar o máximo que conseguir nele dentro desse prazo, tentando desenvolver um código extremamente escalável, manutenível, e principalmente, indo além do que foi requisitado nas instruções do calendário.
<br/><br/>
E também, acredito que essa minha abordagem de focar todo meu tempo no Front-end tenha muito mais haver com a essência do teste, pois afinal eu estou concorrendo a uma vaga de Front-end, e o teste tem como principal objetivo, além de avaliar a fidelidade do design da minha Interface, avaliar também a qualidade do meu código e como eu resolvo um problema em específico como sendo um Dev Front-end, então nada melhor do que me verem sofrendo tentando desenvolver um componente de calendário <b>completamente funcional</b> e ainda por cima <b>do zero</b> 😂
<br/><br/>
Bem, depois dessa introdução mais descontraída, nas sessões abaixo eu falo mais detalhadamente sobre cada parte da aplicação.
<br/>
Também recomendo dar uma conferida na sessão de <a href="#-tecnologias-utilizadas">Tecnologias</a>, caso queria saber o motivo que me levou a escolher as tecnologias utilizadas, e na sessão de <a href="#%EF%B8%8F-etapas">Etapas</a> caso queria ter uma visão geral de como foi/está sendo a evolução do projeto.

### 📄 Páginas e Rotas

#### A aplicação tem um total de 3 componentes de página, sendo eles:

  - `pages/index`: Essa é a Home da aplicação, onde o usuário pode efetuar o LogIn/LogOut, e adicionar produtos ao carrinho. Os produtos são buscados da base de dados utilizando o conceito de **SSR**;
  - `pages/checkout`: Essa é a página de revisão da compra, onde o usuário pode remover produtos do carrinho e seguir com o pagamento, sendo redirecionado para o ambiente de teste do Stripe - uma página de pagamento;
  - `pages/success`: Após ter preenchido os dados e efetuado o pagamento na página do Stripe, o usuário será redirecionado para essa página, que é a de confirmação e agradecimento pela compra.
 
#### A aplicação tem um total de 5 componentes de rota, sendo eles:

  - `pages/api/auth/[...nextauth]`: Esse é o arquivo de configurações globais do NextAuth;
  - `pages/api/checkout_sessions`: Essa rota é responsável por transformar os dados da compra recebidos no formato que o Stripe exige, e criar uma sessão no Stripe para o usuário. _Exemplo de uso:_ `pages/checkout`;
  - `pages/api/getCategories`: Essa rota é responsável por retornar as categorias dos produtos da base de dados. _Exemplo de uso:_ `utils/fetchCategories`;
  - `pages/api/getProducts`: Essa rota é responsável por retornar os produtos da base de dados. _Exemplo de uso:_ `utils/fetchProducts`;
  - `pages/api/getSession`: Essa rota é responsável por retornar uma sessão a partir do id recebido. _Exemplo de uso:_ `utils/fetchLineProducts`.

### 📑 Demais Componentes

#### A aplicação também conta com mais 17 componentes, sendo eles:

  - `pages/_app`: Nesse componente ficam configurações globais da aplicação, como os contextos do Redux e do NextAuth que envolvem toda a aplicação, estilos globais, e a renderização dos toasts;
  - `pages/_document`: Resumidamente, nesse componente ficam as configurações de **SEO** da aplicação.

  <br/>

  - `components/Button`: Esse componente é relativo ao botão reaproveitado periodicamente durante a aplicação;
  - `components/Cart`: Esse componente é relativo ao ícone de carrinho que aparece quando existe algum item no carrinho e o scroll está baixo de 400;
  - `components/CheckoutProduct`: Esse componente é relativo aos produtos mostrados na `pages/checkout`;
  - `components/Currency`: Esse componente é responsável pela formatação de moeda dos preços;
  - `components/Header`: Esse componente é relativo ao cabeçalho da aplicação;
  - `components/Product`: Esse componente é relativo aos produtos mostrados no `pages/index`.

  <br/>

  - `redux/cartSlice`: Utilizando o Redux, nesse componente está a lógica usada para lidar com as ações de interação do usuário em relação ao sistema de shopping. Ele exporta funções de extrema importância, como `addToCart` e `removeFromCart` (que são autoexplicativas), e valores como `selectCartProducts` (total de produtos no carrinho), e dentre outros, que são usados periodicamente pelo projeto;
  - `redux/store`: Esse é o arquivo de configurações do Redux.

  <br/>

  - `utils/api-helpers`: A ideia desse componente é a de agilizar e reutilizar determinados processos feitos na `pages/api`, componentizando-os nesse componente. Por enquanto ele exporta apenas a `fetchPostJSON`, responsável por agilizar requisições POST;
  - `utils/fetchCategories`: Esse componente responsável por agilizar a busca pelas categorias dos produtos na base de dados;
  - `utils/fetchProducts`: Esse componente responsável por agilizar a busca pelos produtos na base de dados;
  - `utils/fetchLineProducts`: Esse componente, trabalhando em conjunto com a `pages/api/getSession`, é responsável por retornar os produtos baseado no id enviado, e juntos eles realizam a verificação do id e podem retornar 404 caso esteja incorreto;
  - `utils/get-stripejs`: Esse componente é responsável por inicializar o Stripe, usando o **Sigleton Pattern** para não inicializá-lo mais de uma vez.

<br/>

  - `sanity`: Esse é o arquivo de configurações do Sanity. Ele também exporta a `urlFor`, função que auxilia na exibição das imagens dos produtos da base de dados;
  - `apple-store-database`: Essa é a base de dados do projeto, criada utilizando o Sanity.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.1](https://nodejs.org/en/) ou superior previamente instalados.<br>
Feito isso, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/apple-store.git

# Entre no repositório com:
> cd apple-store
```

Estando agora na raiz do projeto, crie o arquivo `.env.local`, que deve conter as seguintes variáveis de ambiente:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

Para configurar tais variáveis, você precisará criar um projeto no [Sanity](https://www.sanity.io/), [Stripe](https://stripe.com/en-br/) e [Google Cloud](https://cloud.google.com/), além de que precisará preencher a base de dados também.<br/>
Feito isso:

```bash
# Instale as dependências com:
> npm install
> cd apple-store-database
> npm install

# Execute o projeto com:
> npm run dev
> cd ..
> npm run dev

# Feito isso, você já poderá estar acessando o projeto em: http://localhost:3000
```

## 📞 Contato dos Contribuintes

<table border="2">
  <tr>
    <td align="center">
      <details>
        <summary>
          <b><a href="https://cursos.alura.com.br/vitrinedev/lucasmacielf">Vitrine.Dev</a> 🪟</b>
          <table>
            <tr>
              <td align="center">
                <a href="https://github.com/Luk4x">
                  <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/>
                </a>
                <br>
                <a href="https://www.linkedin.com/in/lucasmacielf/">
                  <sub>
                    <img width="12px" src="https://user-images.githubusercontent.com/86276393/213034697-3d2b2048-7a83-435c-96aa-6e5fad0466eb.png" /> <b>Lucas Maciel</b>
                  </sub>
                </a>
              </td>
            </tr>
          </table>
        </summary>

| :placard: Vitrine.Dev | Lucas Maciel |
| -------------  | --- |
| :sparkles: Nome        | **📅 Delta Code Calendar**
| :label: Tecnologias | react, vite, styled components, javascript, css, html
| :camera: Img         | <img src="https://user-images.githubusercontent.com/86276393/227027789-3fe52fbe-6c13-4c9b-ba83-adf7509c96c9.png#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
    <td align="center">
      <details>
        <summary>
          <b><a href="mailto:luiz@delta-code.online">luiz@delta-code.online</a> 📩</b>
          <table>
            <tr>
              <td align="center">
                <a href="https://github.com/luiz-from-delta">
                  <img src="https://avatars.githubusercontent.com/luiz-from-delta" width="150px;" alt="luiz-from-delta Github Photo"/>
                </a>
                <br>
                <a href="https://www.linkedin.com/in/luiz-antonio-neto/">
                  <sub>
                    <img width="12px" src="https://user-images.githubusercontent.com/86276393/213034697-3d2b2048-7a83-435c-96aa-6e5fad0466eb.png" />
              <b>Luiz Antônio Neto</b>
                  </sub>
                </a>
              </td>
            </tr>
          </table>
        </summary>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#-delta-code-calendar">Voltar ao Topo</a>
</p>

<!--
  keep tecnology, phase numbers and vitrinedev techs updated
  add vitrinedev and portfolio-project tag
  Change Repo/Settings/Social Preview
-->