import { Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getByRole,
  removeButton,
} from "e2e/utils/pageUtils";

const checkoutButton: PageLocator = getByRole({
  role: "link",
  name: "CHECKOUT",
});
export const productInCart: PageLocator = getByRole({
  role: "link",
  name: "Sauce Labs Backpack",
});

export const checkout: PageAction = async (page: Page) => {
  await checkoutButton(page).click();
};

export const removeProductFromCartPage: PageAction = async (page: Page) => {
  await removeButton(page).click();
};
