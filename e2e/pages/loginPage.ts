import { Page } from "@playwright/test";
import { envUsers } from "e2e/utils/environmentUsersLogic";
import {
  PageAction,
  PageLocator,
  getByLocator,
  getByRole,
} from "e2e/utils/pageUtils";
import { getEnvironmentConfig } from "@playwrightConfig/playwright.config";

const emailField: PageLocator = getByLocator('[data-test="username"]');
const passwordField: PageLocator = getByLocator('[data-test="password"]');
const loginButton: PageLocator = getByRole({
  role: "button",
  name: "LOGIN",
});

const gotoBaseUrl: PageAction = async (page: Page) => {
  const { baseURL } = getEnvironmentConfig();
  await page.goto(baseURL);
};

export const userLogin: PageAction = async (page: Page, user: string) => {
  await gotoBaseUrl(page);
  await emailField(page).fill(envUsers[user].username);
  await passwordField(page).fill(envUsers[user].password);
  await loginButton(page).click();
};
