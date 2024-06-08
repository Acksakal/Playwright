import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole('button', { name: 'About me' }).click();
  await expect(page.getByRole('heading', { name: 'About author' })).toBeVisible();
  await page.getByRole('button', { name: 'Home' }).click();
  await expect(page.locator('#main_content')).toContainText('Soft Skills of Senior Engineer');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Soft Skills of Senior Engineer' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '<- Back to the list of' }).click();
  await page1.getByRole('link', { name: 'Why QA Engineers Switch To' }).click();
  await expect(page1.getByRole('article')).toContainText('<- Back to the list of articles');
});