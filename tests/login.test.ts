import { chromium, test } from "@playwright/test"; 

test("Login Demo", async ()=>
{
    const browser = await chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox',{name:"Username"}).fill("Admin");
    await page.getByRole("textbox",{name:"password"}).fill("admin123");
    await page.getByRole('button',{name:"Login"}).click();
    // await page.fill("input[name='Username']","Admin");
    // await page.fill("input[name='password']","admin123");
    // await page.click("input[value='Login']");
    await page.waitForTimeout(5000);
const newContext = await browser.newContext();

    const page1 =await newContext.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page1.waitForTimeout(5000);
})
