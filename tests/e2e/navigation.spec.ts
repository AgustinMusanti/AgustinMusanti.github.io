import { test, expect } from '@playwright/test';

test('anchor navigation scrolls to the right section', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Proyectos', exact: true }).first().click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator('#projects')).toBeInViewport();

  await page.getByRole('link', { name: 'Contacto', exact: true }).first().click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact')).toBeInViewport();
});

test('mobile menu opens, traps focus, and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const toggle = page.locator('#mobile-menu-toggle');
  await toggle.click();
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');

  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
