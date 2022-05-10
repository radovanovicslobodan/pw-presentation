import test, { chromium, devices } from "@playwright/test";

test("mobile emulation", async ({ browser }) => {
  const context = await browser.newContext({
    ...devices["iPhone 11 Pro Max"],
  });
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.screenshot({ path: "iphone.png" });
  await page.waitForTimeout(5000);
});
