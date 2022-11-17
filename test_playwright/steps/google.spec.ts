import {test, expect, Page} from '@playwright/test'
import {GoogleHomePageAction} from '../actions/GoogleHomePageAction'



test.describe("TC_01", ()=>{

  test.beforeAll(async ()=>{

  })

  test.beforeEach(async ({page})=>{
    await page.goto("https://www.google.com")

  })

    test('Google1', async ({page}) => {
      const googleHomePageAction = new GoogleHomePageAction(page);
      await googleHomePageAction.inputToGoogleSearchTextbox("minh")
      await googleHomePageAction.pressEnterGoogleSearchTextbox()
      await page.waitForTimeout(3000)
      await googleHomePageAction.expectUrlContain()
    })


  test('Google2', async ({page}) => {
    const googleHomePageAction = new GoogleHomePageAction(page);
    await googleHomePageAction.inputToGoogleSearchTextbox("automation test")
    await googleHomePageAction.pressEnterGoogleSearchTextbox()
    await page.waitForTimeout(3000)
    // await googleHomePageAction.expectUrlContain()
  })
})
