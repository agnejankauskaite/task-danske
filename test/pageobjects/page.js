import { ChainablePromiseElement } from 'webdriverio';
import WebdriverAjax from 'wdio-intercept-service'

export default class Page {
    get errorMessage () { return $('[class="error-message-container error"]') }

    open (path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }

    async checkErrorMessage (message) {
        expect(this.errorMessage).toHaveTextContaining(message)
    }
}
