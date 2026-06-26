const { test, expect } = require('@playwright/test');
test('Formato inválido de correo', async ({ page }) => {
  await page.goto('https://cms.terbolinspira.com/');
  await page.getByPlaceholder('correo@ejemplo.com').fill('usuario123');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('password');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await expect(page.locator('input:invalid')).toHaveCount(1); // email inválido
});
