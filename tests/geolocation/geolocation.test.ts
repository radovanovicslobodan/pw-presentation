import test from "@playwright/test";

// TODO fix geolocation
test("Geolocation", async ({ browser }) => {
  const context = await browser.newContext({
    geolocation: {
      latitude: 41.9665,
      longitude: 87.6533,
    },
  });
  //   await context.setGeolocation({ longitude: 87.6533, latitude: 41.9665 });
  const page = await context.newPage();
  await page.goto("https://maps.google.com");
  await page.screenshot({ path: "maps.png" });
});
