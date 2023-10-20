const puppeteer = require("puppeteer");
const URL = "";

const randomString = (length) => {
  const CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let charLength = CHARS.length;
  let result = "";
  for (var i = 0; i < length; i++) {
    result += CHARS.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};

const randomEmail = `${randomString(6).toLowerCase()}@hireme.com`;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: "firefox",
  });

  const page = await browser.newPage();

  await page.goto(URL);

  await page.waitForSelector("input[name=first_name]");
  await page.type("input[name=first_name]", "Alan", { delay: 120 });

  await page.waitForSelector("input[name=last_name]");
  await page.type("input[name=last_name]", "Turing", { delay: 120 });

  await page.waitForSelector("input[name=phone]");
  await page.type("input[name=phone]", "321321321", { delay: 120 });

  await page.waitForSelector("input[name=email]");
  await page.type("input[name=email]", randomEmail, {
    delay: 120,
  });

  await page.waitForSelector("input[name=password]");
  await page.type("input[name=password]", "031391239124idsdfsdf", {
    delay: 120,
  });

  await page.click(".btn-success-button");

  await page.click("#my-account-1 a", {
    delay: 820,
  });

  await page.click(".btn-nkr");
})();
