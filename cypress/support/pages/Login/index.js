


const element = require('./elements').ELEMENTS;

class Login {

    acessarLogin(){
        cy.visit(element.urlLogin);
    }

    &&&&&&&&&&& Here

    verifyElementsLogin(){
       cy.get(element.header).contains('Empréstimo');

       cy.get(element.secondHeader).contains('do seu jeito');

       cy.get(element.fieldCPF).contains('CPF');

       cy.get(element.inputCPF).should('be.visible');

       cy.get(element.msgCPF).contains('Digite apenas números');

       cy.get(element.inputCPF).type('124.526.024-34');

       cy.get(element.inputCPF).clear();

       cy.get(element.fieldSenha).contains('Senha');

       cy.get(element.inputSenha).should('be.visible');

       cy.get(element.iconSenha).should('be.visible');

       cy.get(element.linkForgetSenha).contains('Esqueceu sua senha?');

       cy.get(element.btnEntrar).should('be.visible');

       cy.get(element.footer).contains('Ainda não tem conta?');

       cy.get(element.linkCadastrar).contains('Cadastrar');

    }

    

}

export default new Login();