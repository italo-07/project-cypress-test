
import Intro from '../support/pages/Intro';

describe('PWA deve estar acessível', function() {
    
    it('Home deve estar acessível', function() {
        
        Intro.deviceViewIphone5_SE();
        Intro.acessarIntro();
        Intro.verifyElementsIntro();

    });   

});