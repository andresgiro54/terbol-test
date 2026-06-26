const { test, expect } = require('@playwright/test');
test('Botón mostrar contraseña funciona', async ({ page }) => {
  await page.goto('https://cms.terbolinspira.com/');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('password');
  await page.getByRole('button', { name: 'Mostrar contraseña' }).click();
  const type = await page.locator('#password').getAttribute('type');
  expect(type).toBe('text'); // debería cambiar a texto visible
});
