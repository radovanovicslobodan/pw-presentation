import { test } from "@playwright/test";
test("Block images - Network Intercept", async ({ page }) => {
  await page.route("**/*", (request) => {
    return request.request().resourceType() === "image"
      ? request.abort()
      : request.continue();
  });
  await page.goto("https://gettyimagesgallery.com/");
  await page.waitForTimeout(5000);
});
