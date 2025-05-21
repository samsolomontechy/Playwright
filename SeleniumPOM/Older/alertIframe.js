import { Builder, By ,until} from 'selenium-webdriver';
var driver =  new Builder().forBrowser('chrome').build();

driver.manage().setTimeouts({implicit:5000});

async function handleAlert() {
    //let driver = await new Builder().forBrowser('chrome').build();
  

  try {
    // Navigate to a simple page with an alert (you can use any test page)
    await driver.get('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm');

    // Switch to the iframe that contains the "Try it" button
    await driver.switchTo().frame("iframeResult");

    // Click the button that triggers the confirm dialog
    let el = driver.wait(until.elementLocated(By.xpath('/html/body/button')), 5000 );
    //await driver.findElement(By.xpath('/html/body/button')).click();
    await el.click();

    // Wait for the alert and switch to it
    let alert = await driver.switchTo().alert();

    // Get alert text (optional)
    console.log('Alert says:', await alert.getText());

    // Dismiss the alert (click "Cancel")
    await alert.dismiss();

  } finally {
    // Optional: close the browser after a few seconds
    await driver.sleep(2000);
    await driver.quit();
  }
}

handleAlert();
