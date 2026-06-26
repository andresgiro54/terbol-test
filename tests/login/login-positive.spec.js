const { test, expect } = require('@playwright/test');

test('Login CMS Terbol', async ({ page }) => {
  await page.goto('https://cms.terbolinspira.com/');

  // Credenciales válidas
  await page.getByPlaceholder('correo@ejemplo.com').fill('admin@terbol.test');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('password');
  await page.getByRole('button', { name: 'Ingresar' }).click();


  // Validar que aparece el panel de administración
  await expect(page.locator('text=Hola, Administrador')).toBeVisible();
});
