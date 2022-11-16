import { test, expect } from '@playwright/test';
import {GoogleHomePageAction} from '../actions/GoogleHomePageAction';

test('Google', async ({ page }) => {
  const homepage = new GoogleHomePageAction(page);

  await homepage.goToGoogle()
  await homepage.clickToSearch()
  await homepage.inputToSearch("minh")
  await homepage.pressEnter()


expect(page.url()).toContain("https://www.google.com/search?q=minh&s")


})