import { ChainablePromiseElement } from 'webdriverio';
import WebdriverAjax from 'wdio-intercept-service'

import Page from './page';

class InventoryPage extends Page {
    get inventoryList () { return $('#inventory_container'); }

    async checkInventoryListIsDisplayed () {
        await this.inventoryList.isDisplayed();
    }

    async addItemsToCart () {

    }
}

export default new InventoryPage();
