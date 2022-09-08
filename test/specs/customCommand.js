const { Search } = require('../pageobjects/search.base.po')


describe('Custom commands', ()=>{     
    before('Open the page', async()=>{
        await browser.addCommand('getBrowserVersion', async()=>{
            return {
                browserVersion: `${await browser.capabilities.browserName} ${await browser.capabilities.browserVersion} `
            }    
        });
        await browser.addCommand('hideElement', async function () {           
            await browser.execute((elem)=>{
                elem.style.setProperty('opacity', 0)
            }, this)
        }, true);
        await Search.header.openPage()
        
    })
    it('should return browser version', async()=>{        
        console.log(await browser.getBrowserVersion())
    })
    it('should hide element', async()=>{
        const elem = '.logo'        
        await $(elem).hideElement();
        await expect ($(elem)).not.toBeDisplayed();       
    })
})