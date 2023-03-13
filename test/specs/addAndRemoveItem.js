import loginData from '../testData/loginData'

import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page'

describe('Add and remove items from cart', () => {
    it('Add and remove every item from catalogue to cart', async () => {
        await LoginPage.login(loginData.username, loginData.password)
        await InventoryPage.checkInventoryListIsDisplayed()
        await InventoryPage.checkCartAfterAddingOrRemovingItems('Add to cart')
        await InventoryPage.checkCartAfterAddingOrRemovingItems('Remove')
    })
})
