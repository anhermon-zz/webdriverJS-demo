'use strict';

var PageObject = require('./pageObject');
var LoginPage  = require('./loginPage');
var webdriver  = require('selenium-webdriver');
var By = webdriver.By;

class WelcomePage extends PageObject{
    /**
    * Selectors
    **/
    static get userMenuSelector() {
        return By.css('.cs-top-bar-user-menu-button');
    }
    static get logOutBtnSelector() {
        return By.xpath('//a[text() = "Logout"]');
    }
    static get homeTabSelector() {
        return By.xpath('//span[@class="cs-side-menu-item-title"][text() = "Home"]');
    }
    static get environmentsTabSelector() {
        return By.xpath('//span[@class="cs-side-menu-item-title"][text() = "Environments"]');
    }
    static get cloudFoldersTabSelector() {
        return By.xpath('//span[@class="cs-side-menu-item-title"][text() = "CloudFolders"]');
    }
    static get trainingTabSelector() {
        return By.xpath('//span[@class="cs-side-menu-item-title"][text() = "Training"]');
    }
    static get usersTabSelector() {
        return By.xpath('//span[@class="cs-side-menu-item-title"][text() = "Users"]');
    }
    static get reportsTabSelector() {
        return By.xpath('//span[@class="cs-side-menu-item-title"][text() = "Reports"]');
    }
    /**
    * Getters
    **/
    get userMenu() {
        return this.actionbot.getElement(WelcomePage.userMenuSelector);
    }
    get logOutBtn() {
        return this.actionbot.getElement(WelcomePage.logOutBtnSelector);
    }
    get homeTab() {
        return this.actionbot.getElement(WelcomePage.homeTabSelector);
    }
    get environmentsTab() {
        return this.actionbot.getElement(WelcomePage.environmentsTabSelector);
    }
    get cloudFoldersTab() {
        return this.actionbot.getElement(WelcomePage.cloudFoldersTabSelector);
    }
    get trainingTab() {
        return this.actionbot.getElement(WelcomePage.trainingTabSelector);
    }
    get usersTab() {
        return this.actionbot.getElement(WelcomePage.usersTabSelector);
    }
    get reportsTab() {
        return this.actionbot.getElement(WelcomePage.reportsTabSelector);
    }

    constructor(driver) {
        super(driver, "https://webintg.cloudshare.com/Ent/VendorHome.mvc");
    }
    assertPageObject(){
        var self = this;
        this.driver.getTitle().then(function(title) {
            expect(title).toBe('CloudShare - Welcome');
		});
        return this;
    }
    //high lvl functions
    doValidateTabs() {
        return this.validateHomeTab()
                   .validateEnvironmentsTab()
                   .validateTrainingTab()
                   .validateUsersTab()
                   .validateReportsTab();
    }
    doLogout() {
        this.clickUserMenuButton()
             .clickLogoutButton();
//        return new LoginPage(this.driver);
        
    }
    //low lvl function
    validateHomeTab() {
        this.actionbot.exists(WelcomePage.homeTabSelector).then(function(present) {
            PageObject.assert(present);
        });
        return this;
    }
    validateEnvironmentsTab() {
        this.actionbot.exists(WelcomePage.environmentsTabSelector).then(function(present) {
            PageObject.assert(present);
        });
        return this;
    }
    validateTrainingTab() {
        this.actionbot.exists(WelcomePage.trainingTabSelector).then(function(present) {
            PageObject.assert(present);
        });
        return this;
    }
    validateUsersTab() {
        this.actionbot.exists(WelcomePage.usersTabSelector).then(function(present) {
            PageObject.assert(present);
        });
        return this;
    }
    validateReportsTab() {
        this.actionbot.exists(WelcomePage.reportsTabSelector).then(function(present) {
            PageObject.assert(present);
        });
        return this;
    }
    clickUserMenuButton() {
        this.actionbot.click(this.userMenu);
        return this;
    }
    clickLogoutButton() {
        this.actionbot.click(this.logOutBtn);
        return this;
    }
}
module.exports = WelcomePage;