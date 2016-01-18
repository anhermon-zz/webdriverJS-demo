'use strict';

var PageObject = require('./pageObject');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class WelcomePage extends PageObject{
    //selectors
    constructor(driver) {
        super(driver, "some url");
    }
    assertPageObject(cb){
        var self = this;
        this.driver.getTitle().then(function(title) {
            expect(title).toBe('CloudShare | Welcome');
            cb(self);
		});
    }
    //high lvl functions
    
    //low lvl function
}
module.exports = WelcomePage;