const { test, expect } = require('@playwright/test');
test('Logout vuelve al login', async ({ page }) => {
  await page.goto('https://cms.terbolinspira.com/');
  await page.getByPlaceholder('correo@ejemplo.com').fill('admin@terbol.test');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('password');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.getByRole('button', { name: 'Salir' }).click();
  await expect(page.getByRole('heading', { name: 'Iniciar sesión' })).toBeVisible();
});
