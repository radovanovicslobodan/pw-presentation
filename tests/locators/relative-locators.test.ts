import test from "@playwright/test";

test("Relative locators", async ({ page }) => {
  await page.goto(
    "http://automationpractice.com/index.php?controller=authentication&back=my-account"
  );
  await page.fill("input:below(:text('Email address'))", "john@test.me");
  await page.fill("input:below(:text('Password'))", "123456");
});
