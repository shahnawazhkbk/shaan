import { test, expect, chromium } from "@playwright/test";
//Browser=>Context=>Page

test("Login test", async ({}) => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  const username = page.getByRole("textbox", { name: "Username" });
  const password = page.getByRole("textbox", { name: "Password" });
  const submitButton = page.getByRole("button", { name: "Submit" });
  expect(username).toBeVisible();
  await username.fill('student');
  expect(password).toBeVisible();
  await password.fill('Password123');
  expect(submitButton).toBeVisible();
  await submitButton.click();
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  const pageText = await page.textContent('body');
  expect(pageText).toContain('Congratulations student. You successfully logged in!');
  const title = await page.title();
  expect(title).toBe('Logged In Successfully | Practice Test Automation');
  await browser.close();
});
