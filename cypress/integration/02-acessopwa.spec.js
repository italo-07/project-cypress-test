describe('PWA deve estar acessível', function() {
    
    it('Home deve estar acessível', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/');
        cy.contains('Bem vindo');
    });   

});