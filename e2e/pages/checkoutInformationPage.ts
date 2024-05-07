import { faker } from "@faker-js/faker";
import { Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getByLocator,
  getByRole,
} from "e2e/utils/pageUtils";

const continueButton: PageLocator = getByRole({
  role: "button",
  name: "CONTINUE",
});
const firstNameField: PageLocator = getByLocator('[data-test="firstName"]');
const lastNameField: PageLocator = getByLocator('[data-test="lastName"]');
const postCodeField: PageLocator = getByLocator('[data-test="postalCode"]');
export const checkoutInformationErrorMassage: PageLocator = getByLocator(
  '[data-test="error"]'
);

export const productCheckoutInformation: PageAction = async (page: Page) => {
  await firstNameField(page).fill(`${faker.person.firstName()}`);
  await lastNameField(page).fill(`${faker.person.lastName()}`);
  await postCodeField(page).fill(`${faker.location.countryCode()}`);
  await continueButton(page).click();
};

export const productCheckoutWithoutFirstNameInformation: PageAction = async (
  page: Page
) => {
  await lastNameField(page).fill(`${faker.person.lastName()}`);
  await postCodeField(page).fill(`${faker.location.countryCode()}`);
  await continueButton(page).click();
};

export const productCheckoutWithoutLastNameInformation: PageAction = async (
  page: Page
) => {
  await firstNameField(page).fill(`${faker.person.firstName()}`);
  await postCodeField(page).fill(`${faker.location.countryCode()}`);
  await continueButton(page).click();
};

export const productCheckoutWithoutPostalCodeInformation: PageAction = async (
  page: Page
) => {
  await firstNameField(page).fill(`${faker.person.firstName()}`);
  await lastNameField(page).fill(`${faker.person.lastName()}`);
  await continueButton(page).click();
};
