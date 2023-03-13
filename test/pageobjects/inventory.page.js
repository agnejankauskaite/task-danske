import Page from './page';

class InventoryPage extends Page {
    get inventoryTable () { return $('#inventory_container') }
    get firstInventoryImage () { return $('.inventory_item_img') }
    get shoppingCartIcon () { return $('.shopping_cart_link') }
    get itemName () { return $('.inventory_item_name') }
    get itemDescription () { return $('.inventory_item_desc') }
    get itemPrice () { return $('.inventory_item_price') }

    async checkInventoryListIsDisplayed () {
        await expect(this.inventoryTable).toBeDisplayed()
        await expect(await browser.checkScreen('inventory-page', {})).toEqual(0)
    }

    async checkInventoryPage (user) {
        await expect(await browser.checkScreen(`inventory-page-for-${user}`, {})).toEqual(0)
    }

    async checkCartAfterAddingOrRemovingItems (text) {
        const buttons = $$(`button=${text}`)
        const shoppingCartBadge = $$('.shopping_cart_badge')

        buttons.forEach(button => {
            button.click()

            let countButtonClicks = 0;

            button.addEventListener("click", function() {
                switch (text) {
                    case 'Add to cart':
                        countButtonClicks += 1;
                        cart = shoppingCartBadge.getText()
                        expect(cart).toHaveText(countButtonClicks)
                    case 'Remove':
                        countButtonClicks -= 1;
                        cart = shoppingCartBadge.getText()
                        expect(cart).toHaveText(countButtonClicks)
                }
            });
        })
    }

    async checkItemData (name, description, price) {
            expect(this.itemName).toHaveTextContaining(name)
            expect(this.itemDescription).toHaveTextContaining(description)
            expect(this.itemPrice).toHaveTextContaining(price)
    }
}

export default new InventoryPage();
