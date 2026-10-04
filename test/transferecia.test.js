const request = require('supertest');
const { expect } = require ('chai')
require ('dotenv').config ()
const {obterToken} = require('../helpers/autenticacao')


describe('Transferencias', () => {
    describe ('POST /transferencias', () => {
        let token

        beforeEach (async () => {
           token = await obterToken('julio.lima', '123456');
        })

        it ('Deve retornar sucesso com 201 quando o valor da transferencia for iguai ou acima de 10.00 reis', async () => {
    
        const resposta = await request (process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
            .send({
                 'contaOrigem': 1,
                 'contaDestino': 2,
                  'valor': 11
            })
              expect(resposta.status).to.equal(201);
              
           
        })
        it ('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo 10.00 reis', async () => {
         
          const resposta = await request (process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
            .send({
                 'contaOrigem': 1,
                 'contaDestino': 2,
                  'valor': 7
            })
              expect(resposta.status).to.equal(422);

    })

})
})