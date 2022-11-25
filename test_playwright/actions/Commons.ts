import { expect, Locator, Page } from '@playwright/test';

export class Commons {

    private page: Page;


    constructor(page: Page) {
        this.page = page

    }

    async clickToElement(element){
       await this.page.locator(element).click()
    }

    async fillToElement(element,value){
        await this.page.locator(element).fill(value)
    }

    async pressToElement(element,key){
         await this.page.locator(element).press(key)
    }

    async pressEnterToElement(element){
        await this.page.locator(element).press("Enter")
    }

}

