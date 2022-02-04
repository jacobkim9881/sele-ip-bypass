const {Builder, By, Key, until, Button} = require('selenium-webdriver');

const { Options } = require('selenium-webdriver/chrome');

(async function example() { 
    let options = new Options();
    let proxyAddress = '175.106.10.164:8089';
    options.addArguments(`--proxy-server=http://${proxyAddress}`);
    let theUrl = 'http://whatismyip.host/';
    let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
    
    setTimeout(async() =>{        
    try {
        await driver.get(theUrl);
    } finally {
        //await driver.wait(() => {}, 30000);
    
    }
        
    }, 1000) 
    
})();