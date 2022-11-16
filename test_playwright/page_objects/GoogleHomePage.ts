import {Page} from "@playwright/test";


export default class GoogleHomePage{
    private page: Page;
    constructor(page: Page) {
        this.page = page
    }
    public async getGoogleURL(URL) {
        return await this.page.goto(URL)
    }

    public get getSearchInput(){
        return this.page.locator("//input[@name='q']");
    }
}