import { Builder, By } from "selenium-webdriver";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const data = require('../data/data.json');
console.log(data);

import { myObject } from "../data/data.js";
console.log(myObject);

async function example() {
    let driver = await new Builder().forBrowser("MicrosoftEdge").build();
    await driver.get("https://www.google.co.in/");
    // You might want to close the driver after use
    // await driver.quit();
     driver.findElement(By.xpath('//*[@id="APjFqb"]')).sendKeys('sam solomon');
     

}

example();
