/// <reference types="cypress" />

import faker, { fake } from 'faker'

describe('add a client', function(){


before(function(){
    cy.visit('localhost:3000')

})

it('login, add a client and logout',function(){
    //login
cy.log('login')
cy.get('[type=text]').type('tester01')
cy.get('[type=password]').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
cy.get('.blue').click()
    //client view, create
cy.log('client view')
cy.get('.blocks .block:nth-child(2) a').click()
cy.get('.blue').click()
    //create a client
cy.log('create client')
cy.get(':nth-child(1) >input').type(faker.name.firstName())
cy.get(':nth-child(2) >input').type(faker.internet.email())
cy.get(':nth-child(3) >input').type(faker.phone.phoneNumber())
cy.get('.blue').click()
    //logout
cy.log('logout')
cy.get('.user > .btn').click()

})


})