import { ChainablePromiseElement } from 'webdriverio';
import WebdriverAjax from 'wdio-intercept-service'

export default class Page {
    open (path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}
