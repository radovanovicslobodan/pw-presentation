import test from "@playwright/test";

// TODO not clear what is happening
test("displays news content when sample call is successful", async ({
  page,
}) => {
  await page.route("**/sample/endpoint", (route) =>
    route.fulfill({
      status: 401,
      body: JSON.stringify({ success: true }),
    })
  );

  await page.goto("https://slalombuild.com/news");

  await page.screenshot({ path: "news.png" });
  await page.waitForTimeout(5000);
});
