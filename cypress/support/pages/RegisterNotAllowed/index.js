
const element = require('./elements').ELEMENTS;

class RegisterNotAllowed {

    acessarRegisterNotAllowed(){
        cy.visit(element.urlRegisterNotAllowed);
    }

    verifyElementsRegisterNotAllowed(){
        cy.get(element.header).contains('Que pena...');

        cy.get(element.description).contains('Ainda não estamos disponiveis para o seu perfil. Assim que estivermos disponiveis para você, podemos te avisar?');

        cy.get(element.btnYes).contains('Sim').should('be.visible');

        cy.get(element.btnNo).contains('Não').should('be.visible');

        cy.get(element.btnVoltar).should('be.visible');
    }

    btnYes() {
        cy.get(element.btnYes).contains('Sim').click();
    }

    btnNo() {
        cy.get(element.btnNo).contains('Não').click();
    }

    btnVoltar(){
        cy.get(element.btnVoltar).click();
    }



}

export default new RegisterNotAllowed();