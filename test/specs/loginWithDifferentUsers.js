import loginData from '../testData/loginData'

import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page'

describe('Login with different users', () => {
    const usernames = [ 'locked_out_user', 'problem_user', 'performance_glitch_user' ]

    usernames.forEach(username => {
        it('Visual check for login with different users', async () => {
            await LoginPage.login(username, loginData.password)
            await InventoryPage.checkInventoryPage(username)
        })
    })

    it('Try to login with incorrect username', async () => {
        await LoginPage.login(loginData.incorrectUsername, loginData.password)
        await LoginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it('Try to login with incorrect password', async () => {
        await LoginPage.login(loginData.username, loginData.incorrectPassword)
        await LoginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it('Try to login with locked out user', async () => {
        await LoginPage.login(loginData.lockedOutUser, loginData.password)
        await LoginPage.checkErrorMessage('Epic sadface: Sorry, this user has been locked out.')
    })
})
