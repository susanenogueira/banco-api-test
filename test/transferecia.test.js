const request = require('supertest');
const { expect } = require ('chai')
require ('dotenv').config ()
const {obterToken} = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencia.json')


describe('Transferencias', () => {
    let token

        beforeEach (async () => {
           token = await obterToken('julio.lima', '123456');
           })

    describe ('POST /transferencia', () => {
               
        it ('Deve retornar sucesso com 201 quando o valor da transferencia for iguai ou acima de 10.00 reis', async () => {
        const bodyTranferencias = { ...postTransferencias }

        const resposta = await request (process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
            .send(bodyTranferencias)
             expect(resposta.status).to.equal(201);           
          
        })
        it ('Deve retornar sucesso com 422 quando o valor da transferencia for abaixo 10.00 reis', async () => {
            const bodyTranferencias = { ...postTransferencias }
            bodyTranferencias.valor = 7

            const resposta = await request (process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json') //Cabeçalho para a requisição
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
             .send(bodyTranferencias)
              expect(resposta.status).to.equal(422);

    })

})

describe ('GET /transferencia/{id}', () => {
it ('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no bando de dados, quando o ID for válido ', async () => {

        const resposta = await request (process.env.BASE_URL)
            .get('/transferencias/13')
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
                
            expect(resposta.status).to.equal(200)
             expect(resposta.body.id).to.equal(13)    //igualdade do valor
             expect(resposta.body.id).be.a('number')   //tipagem do valor
             expect(resposta.body.conta_origem_id).to.equal(1)
             expect(resposta.body.conta_destino_id).to.equal(2)
            
          
        })
})

describe ('GET /transferencia', () => {
it ('Deve retornar sucesso 10 elementos quando informar limite de 10 registros', async () => {

        const resposta = await request (process.env.BASE_URL)
            .get('/transferencias?page=1&limit=10')
            .set ('Authorization', 'Bearer ' + token ) // existe outra forma mais elegante, mas vai ficar assim por enquanto.
            
            
            expect(resposta.status).to.equal(200)
             expect(resposta.body.limit).to.equal(10)    //igualdade do valor
             expect(resposta.body.transferencias).to.have.lengthOf(10)
           
          
        })
})

})