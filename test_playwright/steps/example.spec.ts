import {test, expect, Page} from '@playwright/test';
import GoogleHomePage from "../page_objects/GoogleHomePage";

let page:Page
let googleHomePage:GoogleHomePage
test.beforeAll(async ()=>{
    googleHomePage = new GoogleHomePage(page)
})

test.describe('multiple test',  () => {
    test('one',async ({page})=>{

         })
    test('two',async ({page})=>{

     })

});