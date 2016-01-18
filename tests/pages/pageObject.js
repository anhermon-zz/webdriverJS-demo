'use strict';

var ActionBot = require('../util/actionbot');
var assert = require('assert');
class PageObject {
    constructor(driver, url) {
        this.driver = driver;
        this.actionbot = new ActionBot(driver);
        this.url    = url;
    }
    static get assert() {
        return assert;
    }
    assertPageObject(){}
    navigate(){
        this.driver.get(this.url);
        return this;
    }
};

module.exports = PageObject;

