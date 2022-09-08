 class Base {

    get main (){
        return $('.container-fluid')
    }
    
    get logReg (){
        return this.main.$('#customer_menu_top > li > a')
    }

    get categoryMenu(){
        return this.main.$('//nav/ul/*')
    }
    get searchBar(){
        return $('#filter_keyword')
    }
    get searchButton(){
        return $('.button-in-search')
    }

    async openPage () {
        await browser.maximizeWindow()
        await browser.url('https://automationteststore.com/')
    }    
}
module.exports =  Base
