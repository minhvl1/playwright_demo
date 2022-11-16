import {expect, Locator, Page} from '@playwright/test';
import {GoogleHomePage} from "../page_objects/GoogleHomePage";
import {Commons} from "../page_objects/Commons";

let commons: Commons


export class GoogleHomePageAction {
    private page: Page;
    readonly getGoogleLink: string;
    readonly getSearchInput: string;
    readonly getExpectURL: string;

    googleHomePage = new GoogleHomePage()

    constructor(page: Page) {
        this.page = page;

        this.getGoogleLink= this.googleHomePage.getGoogleURL
        this.getSearchInput= this.googleHomePage.getSearchInput
        this.getExpectURL=this.googleHomePage.expectURL
        commons = new Commons(this.page)
    }

    async goToGoogle() {
        await commons.goToLink(this.getGoogleLink)
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

    async expectURLcontain(){
        expect(this.page.url()).toContain(this.getExpectURL)

    }

}