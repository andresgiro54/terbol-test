// tests/force-fail.spec.js
const { test, expect } = require('@playwright/test');

test('force fail - prueba temporal', async ({ page }) => {
  // prueba intencionalmente fallida
  expect(1).toBe(1);
});
