describe('PWA criar conta perfil invalido', function() {

    it('Criar conta Telefone já Registrado', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Cadastrar').click();
        cy.contains('Você é...');

        cy.get('div').contains('Aposentado ou pensionista do INSS').click();
        cy.contains('Qual seu tipo de benefício...');

        cy.get('div').contains('Aposentado').click();
        cy.contains('Informações pessoais');

        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div/input').type('Humberto Gessinger');

        cy.xpath('//input[@type="tel"]').type('22222222222');

        cy.xpath('//input[@type="email"]').type('aaa@aa.aa');

        cy.xpath('//button[@type="button"]').click();

        cy.contains('CPF');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('48549823066');

        cy.xpath('//input[@placeholder="01/01/1900"]').type('11111111');

        cy.contains('O telefone informado já foi registrado em outros cadastros.');

        cy.get('div').contains('Entendi').click();

        cy.contains('CPF');

    });

    it('Criar conta Ajuda', function() {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Cadastrar').click();
        cy.contains('Você é...');

        cy.get('div').contains('Aposentado ou pensionista do INSS').click();
        cy.contains('Qual seu tipo de benefício...');

        cy.get('div').contains('Aposentado').click();
        cy.contains('Informações pessoais');

        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div/input').type('Humberto Gessinger');

        cy.xpath('//input[@type="tel"]').type('22222222222');

        cy.xpath('//input[@type="email"]').type('aaa@aa.aa');

        cy.xpath('//button[@type="button"]').click();

        cy.contains('CPF');

        cy.xpath('//div/span[@class="action_title___3HNHE"]').click();

        cy.contains('Olá,');


    });

});