// @ts-check
import { test, expect } from '@playwright/test';

test('verify Google text is visible', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle('Google');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
});
