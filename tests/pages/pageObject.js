'use strict';

class PageObject {
    constructor(driver, url) {
        this.driver = driver;
        this.url    = url;
    }
    assertPageObject(){}
    navigate(){
        this.driver.get(this.url);
        return this;
    }
};

module.exports = PageObject;

