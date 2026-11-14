import { test, expect } from '@playwright/test';

test('project tag filter narrows cards and updates the URL', async ({ page }) => {
  await page.goto('/#projects');

  const cards = page.locator('[data-tags]');
  const visibleCards = page.locator('[data-tags]:not(.hidden)');
  const totalCount = await cards.count();
  expect(totalCount).toBeGreaterThan(1);

  await page.getByRole('button', { name: 'sql', exact: true }).click();
  await expect(page).toHaveURL(/\?tag=sql/);

  const visibleCount = await visibleCards.count();
  expect(visibleCount).toBeGreaterThan(0);
  expect(visibleCount).toBeLessThan(totalCount);

  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  await expect(page).not.toHaveURL(/\?tag=/);
  expect(await visibleCards.count()).toBe(totalCount);
});
