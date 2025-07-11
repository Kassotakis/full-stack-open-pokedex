const { test, describe, expect, beforeEach } = require("@playwright/test");

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("http://localhost:8080");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible();
  });
});

test("one can navigate from the main page to the page of a particular Pokemon", async ({
  page,
}) => {
  await page.goto("http://localhost:8080");

  await page.getByText("ivysaur").click();

  await expect(page.getByText("chlorophyll")).toBeVisible();
});
