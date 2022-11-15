import { test, expect } from '@playwright/test';

test('Google', async ({ page }) => {
  await page.goto('https://google.com')
  await page.locator("//input[@name='q']").click()
  await page.locator("//input[@name='q']").fill("minh")
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).press('Enter')
  // await expect(page).toHaveURL('^https://www.google.com/search?q=minh')
expect(page.url()).toContain("https://www.google.com/search?q=minh&s")

})