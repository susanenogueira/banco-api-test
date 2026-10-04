# banco-api-test

Projeto de automação de testes para uma API REST de um banco, utilizando JavaScript e bibliotecas voltadas para testes de API.

## Objetivo

O objetivo deste projeto é automatizar a validação dos endpoints da API REST do projeto banco-api, permitindo executar testes automatizados e gerar relatórios com os resultados das execuções.

## Tecnologias e dependências

O projeto utiliza:

- JavaScript
- Node.js
- Mocha
- Chai
- Supertest
- dotenv
- Mochawesome

As dependências e suas versões estão definidas no arquivo `package.json`.

## Estrutura do projeto

```text
banco-api-test/
├── fixtures/
├── helpers/
├── test/
├── .gitignore
├── package.json
└── package-lock.json
```

### Diretórios

`fixtures/`  
Arquivos utilizados como massa de dados para os testes.

`helpers/`  
Arquivos auxiliares utilizados durante a execução dos testes.

`test/`  
Testes automatizados da API. O comando configurado no projeto executa arquivos com o padrão `*.test.js` existentes neste diretório e em seus subdiretórios.

## Pré-requisitos

Antes de executar o projeto, é necessário possuir o Node.js e o npm instalados.

Após clonar o repositório, instale as dependências:

```bash
npm install
```

## Configuração do ambiente

O projeto utiliza a biblioteca `dotenv` para trabalhar com variáveis de ambiente.

Crie um arquivo chamado `.env` na raiz do projeto.

Exemplo:

```env
BASE_URL=http://localhost:3000
```

A variável `BASE_URL` deve conter a URL da API que será utilizada durante a execução dos testes.

O arquivo `.env` não deve ser versionado quando contiver informações específicas ou sensíveis do ambiente.

## Executando os testes

O `package.json` possui o seguinte script de teste:

```json
"test": "mocha ./test/**/*.test.js --timeout=200000 --reporter mochawesome"
```

Para executar os testes:

```bash
npm test
```

Esse comando utiliza o Mocha para executar os arquivos `*.test.js` encontrados dentro do diretório `test` e utiliza o Mochawesome como reporter.

## Relatório de execução

O projeto utiliza o Mochawesome para gerar o relatório dos testes.

Após a execução:

```bash
npm test
```

o Mochawesome gera o relatório em HTML no diretório `mochawesome-report`.

O relatório pode ser aberto no navegador para consultar os testes executados e seus resultados.

## Documentação das dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/forwardemail/supertest
- dotenv: https://github.com/motdotla/dotenv
- Mochawesome: https://github.com/adamgruber/mochawesome
- Node.js: https://nodejs.org/docs/latest/api/

## Repositório da API

Este projeto realiza testes sobre a API disponível em:

https://github.com/juliodelimas/banco-api
