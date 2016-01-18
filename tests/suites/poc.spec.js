"use strict";

/**
* Some tips for avoiding callback hell - http://callbackhell.com
**/ 
var webdriver = require('selenium-webdriver');
var driver;
var actionBot;
var LoginPage = require('../pages/loginPage');

describe('Basic test', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    beforeEach(function() {
        driver = require('../util/webdriver')();
	});
    afterEach(function() {
        driver.quit();
	}); 
    it('should be on correct page', function (done) {
//		driver.get('https://webintg.cloudshare.com/Login.aspx');
        new LoginPage(driver)
            .navigate()
            .assertPageObject()
            .doLogin('user', 'password')
            .doValidateTabs()
            .doLogout();
        
        driver.quit().then(done);
    });
});