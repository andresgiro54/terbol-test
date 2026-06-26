const { test, expect } = require('@playwright/test');
test('Login inválido muestra error', async ({ page }) => {
  await page.goto('https://cms.terbolinspira.com/');
  await page.getByPlaceholder('correo@ejemplo.com').fill('fake@terbol.test');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('wrongpass');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await expect(page.locator('text=El correo electrónico o la contraseña son incorrectos.')).toBeVisible();
});
