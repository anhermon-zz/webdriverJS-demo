"use strict";

/**
* Some tips for avoiding callback hell - http://callbackhell.com
**/ 
var webdriver = require('selenium-webdriver');
var driver;
var actionBot;
var LoginPage = require('../pages/loginPage');

var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter({
  displayStacktrace: 'none',
  displayFailuresSummary: true,
  displayPendingSummary: true,
  displaySuccessfulSpec: true,
  displayFailedSpec: true,
  displayPendingSpec: true,
  displaySpecDuration: false,
  displaySuiteNumber: false,
  colors: {
    success: 'green',
    failure: 'red',
    pending: 'yellow'
  },
  prefixes: {
    success: 'V ',
    failure: 'X ',
    pending: '* '
  },
  customProcessors: []
}));


describe('Basic test suite', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    driver = require('../util/webdriver')();
    var loginPage;
    var welcomePage;
//    beforeEach(function() {
//	});
//    afterEach(function() {
//        console.log('after');
//	}); 
    it('should be on correct page', function (done) {
        loginPage = new LoginPage(driver)
            .navigate()
            .assertPageObject()
            .then(done);
    });
    it('should login successfully', function (done) {
        welcomePage = loginPage.doLogin('user', 'password')
                               .then(done);
    });
    it('tabs should be visible', function (done) {
        welcomePage = welcomePage.doValidateTabs()
                                 .then(done);
    });
    it('tabs should logout successfully', function (done) {
        loginPage = welcomePage.doLogout()
                               .then(done);
    });
});
