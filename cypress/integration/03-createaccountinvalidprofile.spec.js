describe('PWA criar conta perfil invalido', function() {
    
    it('Form Quero ser avisado - Sucesso', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Cadastrar').click();
        cy.contains('Você é...');


        cy.get('div').contains('Autônomo').click();
        cy.contains('Que pena...');

        cy.get('div').contains('Sim').click();
        cy.contains('Quero ser avisado');

        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div/input').type('Humberto Gessinger');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/input').type('22222222222');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/input').type('aaa@aa.aa');

        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/div/button').click();

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