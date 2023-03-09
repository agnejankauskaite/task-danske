import { ChainablePromiseElement } from 'webdriverio';
import WebdriverAjax from 'wdio-intercept-service'

import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('[data-test^=\'username\']'); }
    get inputPassword () { return $('[data-test^=\'password\']'); }
    get submitButton () { return $('[data-test^=\'login-button\']'); }

    async login (username, password) {
        await super.open();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.submitButton.click();
    }
}

export default new LoginPage();
