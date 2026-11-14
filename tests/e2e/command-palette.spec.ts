import { test, expect } from '@playwright/test';

test('command palette opens with Ctrl/Cmd+K, filters, and navigates on Enter', async ({ page }) => {
  await page.goto('/');

  const dialog = page.locator('#command-palette');
  await page.keyboard.press('Control+k');
  await expect(dialog).toBeVisible();

  await page.locator('#command-palette-input').fill('soja');
  await expect(dialog.getByText('Estimación temprana del rendimiento de soja')).toBeVisible();

  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/proyectos\/prediccion-rinde-soja/);
});

test('command palette closes with Escape', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Control+k');
  await expect(page.locator('#command-palette')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(page.locator('#command-palette')).toBeHidden();
});
