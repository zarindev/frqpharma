import { test, expect, chromium } from "@playwright/test";
require('dotenv').config();

test("Select Patient", async({page}) => {
    await page.goto("https://demo.frqpharmacy.com/dashboard");
    await page.getByRole('link', { name: 'Clarissa Slate Medication-' }).click();
    

})