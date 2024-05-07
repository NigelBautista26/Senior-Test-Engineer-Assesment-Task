import { FullConfig, chromium } from "@playwright/test";
import { userLogin } from "e2e/pages/loginPage";
import { UserRoles } from "./envUsers";

const globalSetup: (config: FullConfig) => Promise<void> = async (config) => {
  const { storageState } = config.projects[0].use;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await userLogin(page, UserRoles.StandardUser);
    await page.waitForTimeout(5000);
    await page.context().storageState({ path: storageState as string });
  } finally {
    await browser.close();
  }
};

export default globalSetup;
