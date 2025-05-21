import { Builder, By } from 'selenium-webdriver';

async function run() {
  const driver = await new Builder().forBrowser("chrome").build();

  
    await driver.get('https://practice.expandtesting.com/dropdown');

    //await driver.findElement(By.css('#dropdown > option:nth-child(3)')).click();
    await driver.findElement(By.xpath('//*[contains(text(), "Option 2")]')).click();
    await driver.findElement(By.xpath('//*[contains(@value, "2")]')).click();
    await driver.findElement(By.css('option[value*="2"]')).click();



  }

  run();




