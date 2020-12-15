describe('Login test cases', function() {

    it('Login - Successfully', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('123258');

        cy.xpath('//button[@id="onesignal-slidedown-cancel-button"]').click();

        cy.contains(' seu crédito disponível é de');
    });

    it('Login - Incorrect Password', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').clear();

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('123252');
        
        cy.contains('Erro ao entrar');

        cy.contains('Usuário ou senha estão incorretos');

        cy.get('button').contains('Entendi').click();

        cy.contains('Empréstimo');
    });

    it('Login - Invalid CPF', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('08763771004');
        
        cy.contains('Cadastro inexistente');

        cy.contains('Você ainda não possui cadastro no TUDO. Deseja se cadastrar?');

        cy.get('button').contains('Sim').click();

        cy.contains('Você é...');

        cy.get('.left_container___2Y8r9 > .touchable_container___tPxA5 > div').click();

        cy.contains('Empréstimo');
    });

    it('Login - Incorrect CPF', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').clear();

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452807433');

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('143252');
        
        cy.contains('Erro ao entrar');

        cy.contains('Usuário ou senha estão incorretos');

        cy.get('button').contains('Entendi').click();

        cy.contains('Empréstimo');
    });

    it('Login - Blank Fields', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('11');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').clear();

        cy.xpath('//input[@placeholder="Digite uma senha"]').type(' ');

        cy.get('.error_text___2eKkj').contains('Esse campo é obrigatório');

        cy.xpath('//input[@placeholder="Digite uma senha"]').clear();

        cy.get('.error_text___2eKkj').contains('Esse campo é obrigatório');

    });

    it('Login - Forgot Password - Success', function () {

        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/div/div/div/button/div/span').contains('Esqueceu sua senha?').click();

        cy.contains('Código de validação');

        cy.contains('Nós enviamos uma mensagem SMS com um código de 6 dígitos para o seu celular.');

        cy.contains('Digite o código recebido:');

        cy.contains('Nunca repasse este código para terceiros');

    });

    it('Login - Forgot Password - Help', function () { 

        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/div/div/div/button/div/span').contains('Esqueceu sua senha?').click();

        cy.contains('Código de validação');

        cy.contains('Nós enviamos uma mensagem SMS com um código de 6 dígitos para o seu celular.');

        cy.contains('Digite o código recebido:');

        cy.contains('Nunca repasse este código para terceiros');

        cy.xpath('//*[@id="root"]/div/div/div[1]/div/div[3]/div[2]/div/div/span/div/span').contains('AJUDA').click();

        //Continue

    });

    it('Login - Forgot Password - Invalid Code', function () { 

        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/div/div/div/button/div/span').contains('Esqueceu sua senha?').click();

        cy.contains('Código de validação');

        cy.contains('Nós enviamos uma mensagem SMS com um código de 6 dígitos para o seu celular.');

        cy.contains('Digite o código recebido:');

        cy.contains('Nunca repasse este código para terceiros');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div/div/div[1]').type('1');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div/div/div[2]').type('1');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div/div/div[3]').type('1');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div/div/div[4]').type('1');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div/div/div[5]').type('1');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div/div/div[6]').type('1');
        
        cy.contains('Código inválido');

        cy.contains('Verifique se o código digitado coresponde ao recebido.');

        cy.xpath('//*[@id="root"]/div[3]/div/div[3]/div/div/div/button').contains('Entendi').click();

        

    });

    it('Login - Without User', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('11');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').clear();

        cy.xpath('//input[@placeholder="Digite uma senha"]').clear();

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('123258');

        cy.get('.error_text___2eKkj').contains('Esse campo é obrigatório');

    });

    it.only('Login - Logout', function () {
        cy.viewport(320, 568);
        cy.visit('https://web.homolog.meutudo.app/intro');
        cy.contains('Bem vindo');

        cy.get('button').contains('Entrar').click();

        cy.contains('Empréstimo');

        cy.xpath('//input[@placeholder="XXX.XXX.XXX-XX"]').type('12452602434');

        cy.xpath('//input[@placeholder="Digite uma senha"]').type('123258');

        cy.get('#onesignal-slidedown-cancel-button').click();

        cy.contains(' seu crédito disponível é de');

        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div[4]').click();

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[4]/div/div/div/button').contains('Sair').click();

        cy.contains('Bem vindo');

        cy.contains('Entrar');

    });


});