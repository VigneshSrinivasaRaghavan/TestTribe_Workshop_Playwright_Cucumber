import {Before, After, BeforeAll, AfterAll, Status} from "@cucumber/cucumber"
import { chromium, Browser, Page, BrowserContext } from "@playwright/test"
import { pageFixture } from "./pageFixture"

let browser: Browser
let page: Page
let context: BrowserContext

BeforeAll(async function(){
    browser = await chromium.launch({headless:true});
})

Before(async function(){
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;
})

After(async function({pickle,result}){
    //Screenshot only for failure
    if(result?.status==Status.FAILED){
        const image = await pageFixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`,type:"png"});
        await this.attach(image,"image/png");
    }
    await page.close();
    await context.close();
})

AfterAll(async function(){
    await browser.close();
})