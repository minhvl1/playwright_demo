import {Locator, Page } from '@playwright/test';
import GoogleHomePage from "../page_objects/GoogleHomePage";


let googleHomePage:GoogleHomePage


export class GoogleHomePageAction {
    private page: Page;
    readonly getGoogleLink;
    readonly getSearchInput: Locator;


    constructor(page: Page) {
        this.page = page;
        this.getGoogleLink= googleHomePage.getGoogleURL("https://www.google.com/")
        this.getSearchInput= page.locator(googleHomePage.getSearchInput())

    }

    async goToGoogle() {
        await this.page.goto(this.getGoogleLink)
    }

    async inputToSearch(value){
        await this.getSearchInput.fill(value)
    }

    async clickToSearch(){
        await this.getSearchInput.click()
    }

    async pressEnter(){
        await this.getSearchInput.press('Enter')
    }


}