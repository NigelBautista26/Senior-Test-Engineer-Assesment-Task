import { Locator, Page } from "playwright";

export type PageLocator = (page: Page) => Readonly<Locator>;
export type PageAction = (...args: any[]) => Promise<void>;

type Role =
  | "textbox"
  | "heading"
  | "button"
  | "combobox"
  | "option"
  | "alert"
  | "link"
  | "gridcell";

export const getByRole =
  ({ role, name }: { role: Role; name?: string }): PageLocator =>
  (page: Page) =>
    page.getByRole(role, { name });

export const getByLocator =
  (selector: string): PageLocator =>
  (page: Page) =>
    page.locator(selector);

export const removeButton: PageLocator = getByRole({
  role: "button",
  name: "REMOVE",
});

export const cartIcon = (page: Page): Readonly<Locator> =>
  page.locator("#shopping_cart_container").getByRole("link");
