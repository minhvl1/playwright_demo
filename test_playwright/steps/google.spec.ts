import { test, expect } from '@playwright/test';
import {GoogleHomePageAction} from '../actions/GoogleHomePageAction';

test.only('Google', async ({ page }) => {
  const googleHomePageAction = new GoogleHomePageAction(page);

  await googleHomePageAction.goToGoogle()
  await googleHomePageAction.inputToGoogleSearchTextbox("minh")
  await googleHomePageAction.pressEnterGoogleSearchTextbox()
  await page.waitForTimeout(3000)
  await googleHomePageAction.expectUrlContain()


})