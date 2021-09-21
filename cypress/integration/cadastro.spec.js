/// <reference types="cypress" />

import cadastroPage from "../support/pages/cadastro.page";

var faker = require ('faker')

context('Funcionalidade de Cadastre-se', () => {

        beforeEach(() =>  {
            cy.visit('cadastrarusuarios')
        });

    it('Cadastre-se com sucesso', () => {
        cadastroPage.cadastroAdmin('Cicero', faker.internet.email(),'teste')
        cy.wait(3000)
        cy.get('h1').should('contain','Bem Vindo')
    });
    
});