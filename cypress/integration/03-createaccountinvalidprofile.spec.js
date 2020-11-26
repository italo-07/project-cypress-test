describe('PWA criar conta perfil invalido', function() {
    
    it('Home deve estar acessível', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/');
        cy.contains('Bem vindo');

        cy.get('button').contains('Criar conta').click();
        cy.contains('Você é...');


        cy.get('div').contains('Autônomo').click();
        cy.contains('Que pena...');

        cy.get('div').contains('Sim').click();
        cy.contains('Quero ser avisado');

        cy.get('[@id="wrapper"]/div/div/div[1]/div/input').type('Humberto Gessinger');
        
      


    });   

});