import { test, expect } from "@playwright/test";
require('dotenv').config();

test("Login Setup", async({page}) => {

  await page.goto("https://demo.frqpharmacy.com/");

  await page.fill('input[name="email"]', `${process.env.EMAIL_ID}`);

  await page.fill('input[name="password"]', `${process.env.PASSWORD}`);

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForURL('https://demo.frqpharmacy.com/dashboard');

  await expect(page).toHaveTitle(/FRQ Pharmacy Group/);

  await page.context().storageState({path: "./playwright/.auth/auth.json"})

})
