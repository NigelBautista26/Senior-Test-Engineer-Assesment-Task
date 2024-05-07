import { Locator, Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getByRole,
  removeButton,
} from "e2e/utils/pageUtils";

const addButton = (page: Page): Readonly<Locator> =>
  page
    .locator("div")
    .filter({ hasText: /^\$29\.99ADD TO CART$/ })
    .getByRole("button"); // This selector needs to be changed so i can add it to my pageUtils PageLocators...

export const addProduct: PageAction = async (page: Page) => {
  await addButton(page).click();
};

export const removeProduct: PageAction = async (page: Page) => {
  await addButton(page).click();
  await removeButton(page).click();
};
