import loginData from '../testData/loginData'

import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page'

describe('Add and remove items from inventory', () => {
    it('add every item from the catalogue to the cart', async () => {
        await LoginPage.login(loginData.username, loginData.password)
        await (InventoryPage.inventoryList)
    })
})
