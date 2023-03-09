import { ChainablePromiseElement } from 'webdriverio';
import WebdriverAjax from 'wdio-intercept-service'

import Page from './page';

class InventoryPage extends Page {
    get inventoryTable () { return $('#inventory_container'); }

    async checkInventoryListIsDisplayed () {
        await expect(this.inventoryTable).toBeDisplayed();
        await expect(await browser.checkScreen('inventory-page', {})).toEqual(0);
    }

    async addItemsToCart () {

    }
}

export default new InventoryPage();
