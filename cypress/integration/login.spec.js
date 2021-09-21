/// <reference types="cypress" />



describe('Funcionalidade: Login', () => {
    //hooks - ganchos
    /*
    antes de todos os cen�rios => before
    antes de cada cen�rio => before Each

    depois de todos os cen�rios => after
    depois de cada cen�rio => after Each
    */

   beforeEach(() => {
        cy.visit('login')
    });


    it('Deve fazer login com sucesso', () => {
        cy.login('cicero.msilva@via.com.br', '123456')
        cy.wait(3000)
        cy.get('h1').should('contain', 'Serverest Store')
        cy.url().should('include', 'home') 
    });



    it('deve exibir uma mensagem de erro ao inserir usuario ou senha inválido', () => {
        cy.login('cicero.msilva@via.com.br', 'Teste@Tetetetete')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

});