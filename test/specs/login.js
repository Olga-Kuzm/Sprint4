const { Login } = require('../pageobjects/login.base.po')
const { Data } = require('../data')



describe('login ', () => {
   
    before('open the login page', async () => {               
        await Login.openLogin()
    })
    for (const user of Data.loginData){
        it('should not login with invalid credentials', async()=>{
            await Login.login({username: user.username, password: user.password})
            await expect (Login.alertMsg).toHaveTextContaining(user.message)
        })
    }
    
    it('should allow access with correct credentials', async () => {        
        await Login.login({username: 'loginname', password: 'password'})
        expect (await browser.getTitle()).toBe('My Account');
    });

})