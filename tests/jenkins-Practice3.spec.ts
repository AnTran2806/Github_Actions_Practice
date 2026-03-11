import { test, expect } from "@playwright/test";

test("Practice Test 7", async ({ page }) => {
  console.log("Starting Practice Test 7");
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  console.log("Ending Practice Test 7");
});

test("Practice Test 8", async ({ page }) => {
  console.log("Starting Practice Test 8");
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  console.log("Ending Practice Test 8");
});

test("Practice Test 9", async ({ page }) => {
  console.log("Starting Practice Test 9");
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  console.log("Ending Practice Test 9");
<<<<<<< HEAD
});

test("Practice Test 10", async ({ page }) => {
  console.log("Starting Practice Test 10");
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
  console.log("Ending Practice Test 10");
=======
>>>>>>> 52a88bbae335f4e0454528d4499c2ebf4d7a8055
});