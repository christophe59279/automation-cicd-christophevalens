/// <reference types="cypress" />



describe('add a client', function(){
Cypress.Commands.add('authentification',()=>{
    cy.request({
        method:'POST',
        url:'http://localhost:3000/api/login',
        headers:
        {
            'Content-Type':'application/json'
        },
        body:
        {
            "username":"tester01",
            "password":"GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
        }
    })
    .then((response=>{
        cy.log(response.body)
        Cypress.env({loginToken:response.body})    
    }))
})
    it('login, add client, logout', function(){
        cy.authentification()
        //show all clients
        .then((response=>{
            cy.request({
                method:'GET',
                url:'http://localhost:3000/api/clients',
                headers:
                {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken),
                    'Content-Type':'application/json'
                }
            })
            .then((response=>{
                expect(response.body[0].name).to.eq('Jonas Hellman')
            }))
        }))
        //create a new client
        .then((response=>{
            cy.request({
                method:'POST',
                url:'http://localhost:3000/api/client/new',
                headers:
                {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken),
                    'Content-Type':'application/json'
                },
                body:
                {
                    "name":"Tack Rafael!",
                    "email":"ff@ff.com",
                    "telephone":"7878787878"
                }
            })
            .then((response=>{
              cy.log(response.body)
              expect(response.body.name).to.eq('Tack Rafael!')
            }))
        }))

        //logout
        .then((response=>{
            cy.request({
                method:'POST',
                url:'http://localhost:3000/api/logout',
                headers:
                {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken),
                    'Content-Type':'application/json'
                },
            })
            .then((response=>{
              cy.log(response.status)
              expect(response.status).to.eq(200)
            }))
        }))
            
        

    })
})