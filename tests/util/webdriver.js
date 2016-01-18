"use strict";
/*jshint esnext: true */

module.exports = getDriver;

var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

function getDriver(options) {
    return new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).
            build();    
}