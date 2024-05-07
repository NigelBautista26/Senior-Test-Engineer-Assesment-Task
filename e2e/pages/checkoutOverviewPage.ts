import { Page } from "@playwright/test";
import { PageAction, PageLocator, getByRole } from "e2e/utils/pageUtils";

const finishButton: PageLocator = getByRole({
  role: "link",
  name: "FINISH",
});

export const finishProductCheckout: PageAction = async (page: Page) => {
  await finishButton(page).click();
};
