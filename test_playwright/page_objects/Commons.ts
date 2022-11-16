import { expect, Locator, Page } from '@playwright/test';

export default class Commons {

    private page: Page;


    constructor(page: Page) {
        this.page = page

    }


    public async goToLink(URL) {
       return await this.page.goto(URL)
    }

    public async clickToElement(element){
        await this.page.locator(element).click()
    }

    async fillToElement(element,value){
        await this.page.locator(element).fill(value)
    }

    async pressToElement(element,key){
        await this.page.locator(element).press(key)
    }


}

