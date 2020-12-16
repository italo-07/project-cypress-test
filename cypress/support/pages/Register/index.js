

const element = require('./elements').ELEMENTS;

class Register {

    acessarRegister(){
        cy.visit(element.urlRegister);
    }


    verifyElementsRegister(){
        cy.get(element.header).contains('Você é...');

        cy.get(element.Op1_Aposentado).contains('Aposentado ou pensionista do INSS');

        cy.get(element.Op2_PublicServer).contains('Servidor público ativo, inativo ou pensionista');

        cy.get(element.Op3_PrivateWorker).contains('Funcionário de empresa privada');
        
        cy.get(element.Op4_IndependentWorker).contains('Autônomo');
        
        cy.get(element.footer).contains('Já tem uma conta?');
        
        cy.get(element.linkEntrar).contains('Entrar');

        cy.get(element.btnVoltar).should('be.visible');

    }

    btnOp1_Aposentado() {
        cy.get(element.Op1_Aposentado).contains('Aposentado ou pensionista do INSS').click();
    }

    btnOp2_PublicServer() {
        cy.get(element.Op2_PublicServer).contains('Servidor público ativo, inativo ou pensionista').click();
    }

    btnOp3_PrivateWorker() {
        cy.get(element.Op3_PrivateWorker).contains('Funcionário de empresa privada').click();
    }

    btnOp4_IndependentWorker() {
        cy.get(element.Op4_IndependentWorker).contains('Autônomo').click();
    }

    btnEntrar() {
        cy.get(element.linkEntrar).contains('Entrar').click();
    }

    btnVoltar() {
        cy.get(element.btnVoltar).click();
    }


}

export default new Register();