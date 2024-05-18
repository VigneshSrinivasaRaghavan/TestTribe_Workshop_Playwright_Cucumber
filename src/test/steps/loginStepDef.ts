import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

Given('User is on the sauce demo login page', async function () {
  await pageFixture.page.goto('https://www.saucedemo.com/');
});

When('User enter username as {string}', async function (username:string) {
  await pageFixture.page.locator('id=user-name').fill(username);
});

When('User enter password as {string}', async function (password:string) {
  await pageFixture.page.locator('[placeholder="Password"]').fill(password);
});

When('User clicks on login button', async function () {
  await pageFixture.page.locator('[data-test="login-button"]').click();
});

Then('User should be able to view the dashboard page', async function () {
  await expect(pageFixture.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(pageFixture.page).toHaveTitle('Swag Labs');
});