import loginData from '../testData/loginData'

import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page'

describe('Add and remove items from inventory', () => {
    it('Add every item from the catalogue to the cart', async () => {
        await LoginPage.login(loginData.username, loginData.password)
        await InventoryPage.checkInventoryListIsDisplayed()
        await InventoryPage.checkCartAfterAddingOrRemovingItems('Add to cart')
        await InventoryPage.checkCartAfterAddingOrRemovingItems('Remove')
    })
})
