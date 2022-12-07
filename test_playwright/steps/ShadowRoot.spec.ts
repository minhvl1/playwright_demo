import {test, expect, Page} from '@playwright/test';


test.beforeAll(async ()=>{

})

test.describe('shadow root',  () => {
    test('selectorhub',async ({page})=>{
        await page.goto("https://selectorshub.com/xpath-practice-page/")

        let username = "#userName #kils"
        // let username ="input#kils"

        let pizza = "#userName #app2 #pizza"
        // let pizza = "input#pizza"

        await page.fill(username,"minh")
        await page.fill(pizza,"PIZZA")
        await page.waitForTimeout(5000)


    })

    })
