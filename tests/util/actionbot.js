"use strict";
/*jshint esnext: true */

/**
* Web driver facade
**/
class ActionBot {    
    constructor(driver) {
        this.driver = driver;
    }
    getElement(locator) {
        return this.driver.findElement(locator);
    }
    type(textBox, text) {
        return textBox.sendKeys(text);
    }
    click(button) {
        return button.click();
    }
    navigate(url) {
        return this.driver.get(url);
    }
    title() {
        return this.driver.getTitle();
    }
    exists(locator) {
        return this.driver.isElementPresent (locator);
    }
}

module.exports = ActionBot;