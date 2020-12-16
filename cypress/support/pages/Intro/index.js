
//Include actions to interact with the page

//Actions
    // Entrar
    // Cadastrar

const element = require('./elements').ELEMENTS;

class Intro {

    acessarIntro(){
        cy.visit(element.urlIntro);
    }

    verifyElementsIntro(){
        cy.get(element.msgWelcome).contains('Bem vindo ao');

        cy.get(element.name).contains('MEU TUDO!');

        cy.get(element.btnEntrar).contains('Entrar');

        cy.get(element.btnCadastrar).contains('Cadastrar');
    }

    btnEntrar() {
        cy.get(element.btnEntrar).contains('Entrar').click();
    }

    btnCadastrar() {
        cy.get(element.btnCadastrar).contains('Cadastrar').click();
    }

}

export default new Intro();