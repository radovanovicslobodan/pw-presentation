import test, { expect } from "@playwright/test";

test("displays sign in button in incognito session", async ({ browser }) => {
  const context = await browser.newContext({
    locale: "en-GB",
  });
  const page = await context.newPage();
  await page.goto("https://google.com");
  expect(await page.textContent('a:text("Sign in")')).toBeTruthy();
});
