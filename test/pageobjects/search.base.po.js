const Base = require('../pageobjects/base.po')

class Search {
    get header(){
        return new Base()
    }
    get searchCategories(){
        return '.search-category'
    }
    get searchResult(){
        return $$('.fixed_wrapper')
    }
    async getSearchList(){
        const arr = await this.searchResult.map(async (elem) => {
                return await elem.getText()
            })
        return arr
    }
    async searchInCategory(category, text){
        await this.header.searchBar.click();
        await $$(this.searchCategories).map(async elem=>{
         if(await elem.getText()===category){
            await elem.click()
         }
    })
        await this.header.searchBar.setValue(text);
        await this.header.searchButton.click()
}
}

module.exports = {Search: new Search()}