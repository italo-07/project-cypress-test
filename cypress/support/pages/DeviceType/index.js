

const element = require('./elements').ELEMENTS;

class DeviceType {

    deviceViewIphone5_SE(){
        cy.viewport(element.iphone5.width, element.iphone5.height);
    }

    deviceViewResponsive(){
        cy.viewport(element.responsive.width, element.responsive.height);
    }

    deviceViewIphone6_7_8(){
        cy.viewport(element.iphone6_7_8.width, element.iphone6_7_8.height);
    }

    deviceViewIphone6_7_8_Plus(){
        cy.viewport(element.iphone6_7_8_Plus.width, element.iphone6_7_8_Plus.height);
    }

    deviceViewIphoneX(){
        cy.viewport(element.iphoneX.width, element.iphoneX.height);
    }

    deviceViewMotoG4_GalaxyS5(){
        cy.viewport(element.MotoG4_GalaxyS5.width, element.MotoG4_GalaxyS5.height);
    }

}

export default new DeviceType();