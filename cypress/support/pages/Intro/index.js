
//Include actions to interact with the page

//Actions
    // Entrar
    // Cadastrar

const element = require('./elements').ELEMENTS;

class Intro {

    deviceViewIphone5_SE(){
        cy.viewport(320, 568);
    }

    acessarIntro(){
        cy.visit('https://web.homolog.meutudo.app/intro');
    }

    verifyElementsIntro(){
        //cy.get(':nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql').should('have.value', 'Entrar');
        
        //cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql').should('have.value', 'Cadastrar');

        cy.get(element.msgWelcome).contains('Bem vindo ao');

        cy.get(element.name).contains('MEU TUDO!');

        cy.get(element.btnEntrar).contains('Entrar');

        cy.get(element.btnCadastrar).contains('Cadastrar');
    }


}

export default new Intro();