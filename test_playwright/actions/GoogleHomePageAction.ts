import {expect, Locator, Page} from '@playwright/test';
import {GoogleHomePage} from "../page_objects/GoogleHomePage";
import {Commons} from "./Commons";

let commons: Commons


export class GoogleHomePageAction {
    private page: Page;
    readonly getSearchInput: string;
    readonly getExpectURL: string;

    googleHomePage = new GoogleHomePage()

    constructor(page: Page) {
        this.page = page;
        this.getSearchInput= this.googleHomePage.getSearchInput
        this.getExpectURL=this.googleHomePage.expectURL
        commons = new Commons(this.page)
    }


    async inputToGoogleSearchTextbox(value){
        await commons.fillToElement(this.getSearchInput,value)
    }

    async clickToGoogleSearchTextbox(){
        await commons.clickToElement(this.getSearchInput)
    }

    async pressEnterGoogleSearchTextbox(){
        await commons.pressEnterToElement(this.getSearchInput)
    }

    async expectUrlContain(){
        expect(this.page.url()).toContain(this.getExpectURL)
    }

}