import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/en/', '/proyectos/estimacion-rinde-soja/', '/en/projects/estimacion-rinde-soja/'];

for (const path of pages) {
  test(`${path} has no serious or critical axe violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();

    const seriousOrCritical = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');

    expect(seriousOrCritical, JSON.stringify(seriousOrCritical, null, 2)).toEqual([]);
  });
}

test('theme toggle keeps zero serious/critical violations in dark mode', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-theme-toggle]').first().click();

  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  const seriousOrCritical = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');

  expect(seriousOrCritical, JSON.stringify(seriousOrCritical, null, 2)).toEqual([]);
});
