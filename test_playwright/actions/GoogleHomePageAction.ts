import {Locator, Page } from '@playwright/test';
import {GoogleHomePage} from "../page_objects/GoogleHomePage";


export class GoogleHomePageAction {



    readonly page: Page;
    readonly getGoogleLink: string;
    readonly getSearchInput: Locator;


    googleHomePage = new GoogleHomePage()


    constructor(page: Page) {
        this.page = page;
        this.getGoogleLink = this.googleHomePage.getGoogleURL()
        this.getSearchInput= page.locator(this.googleHomePage.getSearchInput())

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