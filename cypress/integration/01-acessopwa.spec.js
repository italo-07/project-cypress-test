
import DeviceType from '../support/pages/DeviceType';
import Intro from '../support/pages/Intro';

describe('PWA deve estar acessível', function() {

    
    it('Home deve estar acessível', function() {
            
        DeviceType.deviceViewIphone5_SE();

        Intro.acessarIntro();
        Intro.verifyElementsIntro();

    });      
    

});