'use strict';

var PageObject = require('./pageObject');
var WelcomePage = require('./welcomePage');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class LoginPage extends PageObject {
    /**
    * Selectors
    **/
    static get userNameTBSelector() {
        return By.id('ContentPlaceHolder1_UserName');
    }
    
    static get passwordTBSelector() {
        return By.id('ContentPlaceHolder1_Password');
    }
    
    static get loginButtonSelector() {
        return By.id('ContentPlaceHolder1_LoginButton');
    }
    /**
    * Getters
    **/
    get userNameTB() {
        return this.actionbot.getElement(LoginPage.userNameTBSelector);
    }
    get passwordTB() {
        return this.actionbot.getElement(LoginPage.passwordTBSelector);
    }
    get loginButton() {
        return this.actionbot.getElement(LoginPage.loginButtonSelector);
    }
    /**
    * Setters
    **/
    set userNameTB(value) {
        this.actionbot.type(this.userNameTB, value);
    }
    set passwordTB(value) {
        this.actionbot.type(this.passwordTB, value);
    }
    /**
    * Constructors
    **/
    constructor(driver) {
        super(driver, "https://webintg.cloudshare.com/Login.aspx");
    }
    
    /////
        doLogin(username, password) {
            this.userNameTB = username;
            this.passwordTB = password;
            return this.clickLoginButton();
    }
    /////
    assertPageObject(){
        this.actionbot.title().then(function(title) {
            expect(title).toBe('CloudShare | Login');
		});
        return this;
    }  
    clickLoginButton(){
        this.loginButton.click();
        return new WelcomePage(this.driver);
    }
}
module.exports = LoginPage;