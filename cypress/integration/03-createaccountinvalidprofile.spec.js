describe('PWA criar conta perfil invalido', function() {
    
    it('Form Quero ser avisado - Sucesso', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Cadastrar').click();
        //cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[2]/div[2]/div/div/button/div/span').should('have.value', 'Cadastrar');

        cy.contains('Você é...');
        cy.get('div').contains('Autônomo').click();
        
        cy.contains('Que pena...');
        cy.get('div').contains('Sim').click();
        
        cy.contains('Quero ser avisado');

        cy.xpath('//input[@placeholder="Digite seu nome completo"]').type('Humberto Gessinger').should('have.value', 'Humberto Gessinger');

        cy.xpath('//input[@type="tel"]').type('22222222222').should('have.value', '(22) 22222-2222');

        cy.xpath('//input[@type="email"]').type('aaa@aa.aa').should('have.value', 'aaa@aa.aa');

        cy.xpath('//button[@type="button"]').click();

        cy.contains('Ainda não tem conta?');
    }); 
    
    it('Form Quero ser avisado - Não', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Cadastrar').click();
        cy.contains('Você é...');


        cy.get('div').contains('Autônomo').click();
        cy.contains('Que pena...');

        cy.get('div').contains('Não').click();
        
        cy.contains('Ainda não tem conta?');
    });

});