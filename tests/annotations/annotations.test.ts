import { test } from "@playwright/test";

test.describe("Grouping tests", () => {
  test("first test", async ({ page }) => {
    console.log("first test running");
    await page.goto("https://playwright.dev");
    console.log("first test completed");
  });

  test("second test", async ({ page }) => {
    console.log("second test running");
    await page.goto("https://www.saucedemo.com/");
    console.log("second test completed");
  });

  test("third test", async ({ page, browserName }) => {
    if (browserName === "chromium") {
      test.skip();
    }
    console.log("third test running");
    await page.goto("https://demoqa.com/");
    console.log("third test completed");
  });
});
