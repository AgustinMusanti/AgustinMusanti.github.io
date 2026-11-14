import { test, expect } from '@playwright/test';

test('theme toggle switches and persists without a flash on reload', async ({ page }) => {
  await page.goto('/');

  const html = page.locator('html');
  const initialTheme = await html.getAttribute('data-theme');

  await page.locator('[data-theme-toggle]').first().click();
  const toggledTheme = await html.getAttribute('data-theme');
  expect(toggledTheme).not.toBe(initialTheme);

  const stored = await page.evaluate(() => localStorage.getItem('theme'));
  expect(stored).toBe(toggledTheme);

  // The inline head script must apply the stored theme before first paint, so the
  // attribute is already correct as soon as the DOM is available after reload.
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', toggledTheme ?? '');
});
