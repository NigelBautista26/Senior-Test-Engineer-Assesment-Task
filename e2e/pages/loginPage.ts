import { Page } from "@playwright/test";
// import { envUsers } from "e2e/utils/environmentUsersLogic";
import {
  PageAction,
  PageLocator,
  getByLocator,
  getByRole,
} from "e2e/utils/pageUtils";
import { getEnvironmentConfig } from "@playwrightConfig";
import { UserRole, envUsers } from "@utils/envUsers";

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

export const userLogin: PageAction = async (page: Page, user: UserRole) => {
  const { username, password } = envUsers[user];

  await gotoBaseUrl(page);
  await emailField(page).fill(username);
  await passwordField(page).fill(password);
  await loginButton(page).click();
};
