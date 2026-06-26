const { test, expect } = require('@playwright/test');
test('Campos vacíos muestran validación', async ({ page }) => {
  await page.goto('https://cms.terbolinspira.com/');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await expect(page.locator('input:invalid')).toHaveCount(2); // email y password requeridos
});
