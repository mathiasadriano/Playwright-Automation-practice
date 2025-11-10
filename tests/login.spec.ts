import { test, expect } from '@playwright/test';

test.describe('Pruebas de Login en quotes.toscrape.com', () => {
  
  test('TC-001: Login exitoso', async ({ page }) => {
    
    await page.goto('http://quotes.toscrape.com/login');

    await page.fill('input[name="username"]', 'admin'); 
    await page.fill('input[name="password"]', 'admin'); 

    await page.click('input[type="submit"][value="Login"]');

    await expect(page).toHaveURL('http://quotes.toscrape.com/');
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
  });

});