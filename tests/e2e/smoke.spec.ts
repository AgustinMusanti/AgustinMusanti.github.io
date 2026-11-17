import { test, expect } from '@playwright/test';

test('home shows the results panel and navigates by anchors', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Agustín Musanti');
  await expect(page.getByText('Cinco meses antes de la cosecha', { exact: false }).first()).toBeVisible();

  await page.getByRole('link', { name: 'Proyectos', exact: true }).first().click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator('#projects')).toBeInViewport();
});

test('project filter narrows cards and syncs the URL', async ({ page }) => {
  await page.goto('/#projects');
  const all = page.locator('[data-tags]');
  const visible = page.locator('[data-tags]:not(.hidden)');
  const total = await all.count();

  await page.getByRole('button', { name: /^SQL/ }).click();
  await expect(page).toHaveURL(/\?tag=sql/);
  expect(await visible.count()).toBeLessThan(total);

  await page.getByRole('button', { name: /^Todos/ }).click();
  expect(await visible.count()).toBe(total);
});

test('theme toggle persists across reloads', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  await page.locator('[data-theme-toggle]').first().click();
  const theme = await html.getAttribute('data-theme');
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', theme ?? '');
});

test('English home and case study are reachable and translated', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page
    .getByRole('link', { name: /Read the full case/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/en\/projects\/estimacion-rinde-soja\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Early soybean yield estimation');

  await page.getByRole('link', { name: 'ES', exact: true }).first().click();
  await expect(page).toHaveURL(/\/proyectos\/estimacion-rinde-soja\/?$/);
});

test('nav marks the section in view and clears it back at the hero', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/');
  const current = page.locator('#nav-links [aria-current="location"]');
  await expect(current).toHaveCount(0);

  await page.locator('#career').scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, 100));
  await expect(current).toHaveText('Trayectoria');

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(current).toHaveCount(0);
});

test('mobile menu toggle says what it will do', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.locator('#mobile-menu-toggle');
  await expect(toggle).toHaveAttribute('aria-label', 'Abrir menú');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(toggle).toHaveAttribute('aria-label', 'Cerrar menú');
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-label', 'Abrir menú');
});
