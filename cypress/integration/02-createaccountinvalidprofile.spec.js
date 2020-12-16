

import DeviceType from '../support/pages/DeviceType';
import Intro from '../support/pages/Intro';
import Register from '../support/pages/Register';
import RegisterNotAllowed from '../support/pages/RegisterNotAllowed';
import RegisterNotAttended from '../support/pages/RegisterNotAttended';
import Login from '../support/pages/Login'

describe('PWA criar conta perfil invalido', function() {
    
    it.only('Form Quero ser avisado - Sucesso', function() {
        
        DeviceType.deviceViewIphone5_SE();

        Intro.acessarIntro();
        Intro.verifyElementsIntro();

        Intro.btnCadastrar();

        Register.verifyElementsRegister();
        Register.btnOp4_IndependentWorker();

        RegisterNotAllowed.verifyElementsRegisterNotAllowed();
        RegisterNotAllowed.btnYes();

        RegisterNotAttended.verifyElementsRegisterNotAttended();

        RegisterNotAttended.inputNome('Humberto Gessinger');
        RegisterNotAttended.inputTel('22222222222');
        RegisterNotAttended.inputEmail('aaa@aa.aa');
        RegisterNotAttended.btnEnviar();

        Login.verifyElementsLogin();

        cy.contains('Ainda não tem conta?');

        cy.get('input').type('12452602434');
    }); 
    
    it('Form Quero ser avisado - Não', function() {
        // cy.viewport(320, 568);
        // cy.visit('https://web.homolog.meutudo.app/intro');
        // cy.contains('Bem vindo');

        // cy.get('button').contains('Cadastrar').click();
        // cy.contains('Você é...');


        // cy.get('div').contains('Autônomo').click();
        // cy.contains('Que pena...');

        // cy.get('div').contains('Não').click();

        DeviceType.deviceViewIphone5_SE();

        Intro.acessarIntro();
        Intro.verifyElementsIntro();

        Intro.btnCadastrar();

        Register.verifyElementsRegister();
        Register.btnOp4_IndependentWorker();

        RegisterNotAllowed.verifyElementsRegisterNotAllowed();
        RegisterNotAllowed.btnNo();
        
        cy.contains('Ainda não tem conta?');
    });

});