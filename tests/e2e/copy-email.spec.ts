import { test, expect } from '@playwright/test';

test('copy email button copies the address and gives accessible feedback', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/#contact');

  await page.getByRole('button', { name: 'Copiar email' }).click();
  await expect(page.locator('#copy-email-label')).toHaveText('¡Copiado!');

  const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboardText).toBe('agustinmusanti@gmail.com');

  const status = page.locator('#copy-email-status');
  await expect(status).toHaveText('¡Copiado!');
});
