


const element = require('./elements').ELEMENTS;

class RegisterNotAttended {

    acessarRegisterNotAttended(){
        cy.visit(element.urlRegisterNotAttended);
    }

    verifyElementsRegisterNotAttended(){
       cy.get(element.header).contains('Quero ser avisado');

       cy.get(element.description).contains('Precisamos das seguintes informações para te avisar.');

       cy.get(element.fieldNome).contains('Nome');

       cy.get(element.inputNome).should('be.visible');

       cy.get(element.fieldTel).contains('Telefone celular');

       cy.get(element.inputTel).should('be.visible');

       cy.get(element.fieldEmail).contains('E-mail (opcional)');

       cy.get(element.inputEmail).should('be.visible');

       cy.get(element.btnEnviar).should('be.visible');

       cy.get(element.btnVoltar).should('be.visible');

    }

    btnEnviar() {
        cy.get(element.btnEnviar).click();
    }

    btnVoltar() {
        cy.get(element.btnVoltar).click();
    }

    inputNome(value) {
        cy.get(element.inputNome).type(value).should('have.value', value);
    }

    inputTel(value) {
        cy.get(element.inputTel).type(value);
        expect(value).to.equal(value);
    }

    inputEmail(value) {
        cy.get(element.inputEmail).type(value).should('have.value', value);
    }




}

export default new RegisterNotAttended();