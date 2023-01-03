import paldeas from '@/data/paldea.json';
import { test } from '@playwright/test';

for (const pokemon of paldeas) {
  test(`get ${pokemon.name} data`, async ({ page }) => {
    await page.goto(`https://yakkun.com/sv/zukan/n${pokemon.number}`);
    const el = page.locator('text=HP').first();
    console.log(await el.textContent());
  });
  if (pokemon.paldeaNumber === 2) break;
}
