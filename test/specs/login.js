const { Login } = require('../pageobjects/login.base.po')


describe('login ', () => {
    const testData = [
        {username: 'invalidLoginName', password: 'invalidPassword', message: 'Error: Incorrect login or password provided.'},
        {username: 'password', password: 'loginname', message: 'Error: Incorrect login or password provided.'},
        {username: 'loginname', password: '', message: 'Error: Incorrect login or password provided.'},
        {username: '', password: 'password', message: 'Error: Incorrect login or password provided.'},
        {username: '', password: '', message: 'Error: Incorrect login or password provided.'},

    ]

    before('open the login page', async () => {               
        await Login.openLogin()
    })
    for (const user of testData){
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