import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Measure the settled page, not elements mid fade-in.
test.use({ reducedMotion: 'reduce' });

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

test.describe('hero with animations running', () => {
  test.use({ reducedMotion: 'no-preference' });

  for (const theme of ['light', 'dark']) {
    test(`${theme} theme: hero text passes AA, including the dimmed inactive steps`, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/');
      await page.evaluate(() =>
        document.querySelectorAll('[data-reveal]').forEach((n) => n.classList.add('is-visible')),
      );
      // Focus pauses the step cycle, so the dimmed state being measured is stable.
      await page.locator('.t-step').first().focus();
      await page.waitForTimeout(1000);

      const results = await new AxeBuilder({ page })
        .include('#main-content > section:first-child')
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
    });
  }
});
