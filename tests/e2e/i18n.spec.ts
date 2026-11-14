import { test, expect } from '@playwright/test';

test('English version renders translated content and links back to Spanish', async ({ page }) => {
  await page.goto('/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Agustín Musanti');
  await expect(page.getByText('Data science applied to agriculture', { exact: false })).toBeVisible();

  await page.getByRole('link', { name: 'ES', exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('English case study page uses the /en/projects/ path and translates back correctly', async ({ page }) => {
  await page.goto('/en/projects/prediccion-rinde-soja');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Early soybean yield estimation');

  await page.getByRole('link', { name: 'ES', exact: true }).click();
  await expect(page).toHaveURL(/\/proyectos\/prediccion-rinde-soja\/?$/);
});
