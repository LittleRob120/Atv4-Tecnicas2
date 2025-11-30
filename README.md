# atviv

Aplicação web em TypeScript para gestão de clientes, acomodações e hospedagens, estruturada de forma modular para facilitar manutenção e escalabilidade.

## Tecnologias

- TypeScript
- HTML/CSS
- LocalStorage (persistência simples no navegador)
- Estrutura modular por páginas, componentes, modelos e serviços

## Estrutura do Projeto

```
atviv
├── src
│   ├── index.html
│   ├── app.ts
│   ├── router.ts
│   ├── pages/
│   │   ├── home.ts
│   │   ├── clientes/
│   │   │   ├── listagemClientes.ts
│   │   │   ├── cadastroCliente.ts
│   │   │   └── detalhesCliente.ts
│   │   ├── acomodacoes/
│   │   │   ├── listagemAcomodacoes.ts
│   │   │   └── cadastroAcomodacao.ts
│   │   └── hospedagens/
│   │       ├── listagemHospedagens.ts
│   │       └── cadastroHospedagem.ts
│   ├── components/
│   │   ├── navbar.ts
│   │   ├── table.ts
│   │   ├── form.ts
│   │   └── input.ts
│   ├── models/
│   │   ├── cliente.ts
│   │   ├── documento.ts
│   │   ├── endereco.ts
│   │   ├── telefone.ts
│   │   ├── acomodacao.ts
│   │   └── hospedagem.ts
│   ├── services/
│   │   ├── storage.ts
│   │   ├── clientesService.ts
│   │   ├── acomodacoesService.ts
│   │   └── hospedagensService.ts
│   ├── enumeracoes/
│   │   ├── TipoDocumento.ts
│   │   └── NomeAcomodacao.ts
│   └── styles/
│       └── main.css
├── package.json
├── tsconfig.json
└── README.md
```

## Pré-requisitos

- Node.js LTS
- npm

## Instalação e Execução

1. Clonar o repositório:
   ```
   git clone <repository-url>
   ```
2. Entrar na pasta do projeto:
   ```
   cd atviv
   ```
3. Instalar dependências:
   ```
   npm install
   ```
4. Rodar em modo desenvolvimento:
   ```
   npm start
   ```
5. Acessar no navegador:
   ```
   http://localhost:3000
   ```

## Scripts úteis (npm)

- `npm start`: inicia o servidor de desenvolvimento.
- `npm run build`: gera os arquivos para produção (se configurado).
- `npm run clean`: limpa artefatos de build (se configurado).

Obs.: verifique o package.json para a lista completa de scripts.

## Funcionalidades

- Clientes: cadastro, listagem e detalhes.
- Acomodações: cadastro e listagem.
- Hospedagens: cadastro e listagem.
- Navegação por barra superior (navbar) e roteamento SPA.
- Persistência simples via LocalStorage.

## Desenvolvimento

- Código em TypeScript dentro de `src/`.
- Estilos em `src/styles/main.css`.
- Rotas definidas em `src/router.ts`.
- Componentes reutilizáveis em `src/components/`.

## Convenções

- Módulos nomeados por domínio (pages, components, models, services).
- Enumeradores para tipos específicos em `src/enumeracoes/`.
- Evite lógica de negócio dentro de páginas; use serviços em `src/services/`.

## Testes

- Estrutura pronta para adicionar testes unitários (sugestão: Vitest/Jest).
- Crie uma pasta `tests/` e configure o runner no package.json.

## Contribuição

- Faça um fork e crie uma branch: `feat/minha-mudanca`.
- Abra um Pull Request descrevendo as alterações.
- Reporte bugs e sugestões em Issues.
