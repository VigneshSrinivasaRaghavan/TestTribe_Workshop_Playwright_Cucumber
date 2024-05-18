import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture"

When('User adds an item to the cart', async function () {
  await pageFixture.page.locator('#add-to-cart-sauce-labs-backpack').click();
});

When('User clicks on the cart button', async function () {
  await pageFixture.page.locator('.shopping_cart_link').click();
});

Then('User should see the item added', async function () {
  await expect(pageFixture.page.locator('[data-test="inventory-item-name"]')).toBeVisible();
});