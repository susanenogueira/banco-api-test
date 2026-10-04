const request = require('supertest');
const { expect } = require ('chai')

describe('Transferencias', () => {
    describe ('POST /transferencias', () => {
        it ('Deve retornar sucesso com 201 quando o valor da transferencia for iguai ou acima de 10.00 reis', async () => {
          // Capturar o Token
          const respostaLogin = await request ('http://localhost:3000')
            .post('/login')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .send({
             'username': 'julio.lima',
             'senha': '123456'
          })

            const token = respostaLogin.body.token 

            const resposta = await request ('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
            .send({
                 'contaOrigem': 1,
                 'contaDestino': 2,
                 'valor': 11,
                 'token': 'string'   
            })
              expect(resposta.status).to.equal(201);
              
           
        })
        it ('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo 10.00 reis', async () => {
            const respostaLogin = await request ('http://localhost:3000')
            .post('/login')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .send({
             'username': 'julio.lima',
             'senha': '123456'
          })

            const token = respostaLogin.body.token 

            const resposta = await request ('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
            .send({
                 'contaOrigem': 1,
                 'contaDestino': 2,
                 'valor': 7,
                 'token': 'string'   
            })
              expect(resposta.status).to.equal(422);

    })

})
})