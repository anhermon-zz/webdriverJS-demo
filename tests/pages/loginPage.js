'use strict';

var PageObject = require('./pageObject');
var WelcomePage = require('./welcomePage');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class LoginPage extends PageObject{
    static get userNameTBSelector() {
        return By.id('ContentPlaceHolder1_UserName');
    }
    static get passwordTBSelector() {
        return By.id('ContentPlaceHolder1_Password');
    }
    static get loginButtonSelector() {
        return By.id('ContentPlaceHolder1_LoginButton');
    }
    constructor(driver) {
        super(driver, "https://webintg.cloudshare.com/Login.aspx");
    }
    assertPageObject(cb){
        var self = this;
        this.driver.getTitle().then(function(title) {
            expect(title).toBe('CloudShare | Login');
            cb(self);
		});
    }
    doLogin(username, password, cb) {
        var self = this;
        self.typeUserNameTB(username, function() {
            self.typePasswordTB(password, function() {
                self.clickLoginButton(cb);
            });
        });
    }
    ///
    typeUserNameTB(username, cb) {
        var self = this;//self reference to page insance, to avoid changing scopes
        var userNameTB = this.driver.findElement(LoginPage.userNameTBSelector);
        userNameTB.sendKeys(username).then(function() {
            cb(self);
        });
    }
    typePasswordTB(password, cb){
        var self = this;
        var passwordTB = this.driver.findElement(LoginPage.passwordTBSelector);
        passwordTB.sendKeys(password).then(function() {
            cb(self);
        });
    }
    clickLoginButton(cb){
        var driver = this.driver;
        var loginButton = driver.findElement(LoginPage.loginButtonSelector);
        loginButton.click().then(function() {
            cb(new WelcomePage(driver));
        });
    }
}
module.exports = LoginPage;