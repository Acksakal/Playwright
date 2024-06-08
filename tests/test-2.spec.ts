import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Send us a message' })).toBeVisible();
  await page.getByRole('link', { name: 'shopping_cart' }).click();
  await expect(page.getByRole('button', { name: 'Back to store' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove item' }).click();
  await expect(page.getByRole('link', { name: 'shopping_cart' })).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await page.locator('li').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('link').first().click();
  await expect(page.locator('h2')).toContainText('Bumble the Elephant');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove item' }).first().click();
});