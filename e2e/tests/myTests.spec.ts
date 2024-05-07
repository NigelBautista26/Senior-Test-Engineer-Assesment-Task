import {
  checkout,
  productInCart,
  removeProductFromCartPage,
} from "@pages/cartPage";
import { thankYouMessageHeader } from "@pages/checkoutCompletionPage";
import {
  checkoutInformationErrorMassage,
  productCheckoutInformation,
  productCheckoutWithoutFirstNameInformation,
  productCheckoutWithoutLastNameInformation,
  productCheckoutWithoutPostalCodeInformation,
} from "@pages/checkoutInformationPage";
import { finishProductCheckout } from "@pages/checkoutOverviewPage";
import { addProduct } from "@pages/productListingPage";
import { expect, test } from "@playwright/test";
import { cartIcon, removeButton } from "@utils/pageUtils";
import { errorMessages } from "@constants/checkoutInformationErrorMessages";

test.describe("Five test scenarios", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/v1/inventory.html");
  });

  test("Purchase a product", async ({ page }) => {
    await addProduct(page);
    await expect(cartIcon(page)).toHaveText("1");
    await cartIcon(page).click();
    await checkout(page);
    await productCheckoutInformation(page);
    await finishProductCheckout(page);
    await expect(thankYouMessageHeader(page)).toBeVisible();
  });

  test("Remove a product from the cart page", async ({ page }) => {
    await addProduct(page);
    await expect(cartIcon(page)).toHaveText("1");
    await cartIcon(page).click();
    await expect(productInCart(page)).toBeVisible();
    await removeProductFromCartPage(page);

    await Promise.all([
      expect(removeButton(page)).not.toBeVisible(),
      expect(cartIcon(page)).toBeVisible(),
      expect(productInCart(page)).not.toBeVisible(),
    ]);
  });

  test("Verify the first name field validation", async ({ page }) => {
    await addProduct(page);
    await expect(cartIcon(page)).toHaveText("1");
    await cartIcon(page).click();
    await expect(productInCart(page)).toBeVisible();
    await expect(removeButton(page)).toBeVisible();
    await checkout(page);
    await productCheckoutWithoutFirstNameInformation(page);
    await expect(checkoutInformationErrorMassage(page)).toHaveText(
      errorMessages.firstNameFieldErrorMessage
    );
  });

  test("Verify the last name field validation", async ({ page }) => {
    await addProduct(page);
    await expect(cartIcon(page)).toHaveText("1");
    await cartIcon(page).click();
    await expect(productInCart(page)).toBeVisible();
    await expect(removeButton(page)).toBeVisible();
    await checkout(page);
    await productCheckoutWithoutLastNameInformation(page);
    await expect(checkoutInformationErrorMassage(page)).toHaveText(
      errorMessages.lastNameFieldErrorMessage
    );
  });

  test("Verify the postal code field validation", async ({ page }) => {
    await addProduct(page);
    await expect(cartIcon(page)).toHaveText("1");
    await cartIcon(page).click();
    await expect(productInCart(page)).toBeVisible();
    await expect(removeButton(page)).toBeVisible();
    await checkout(page);
    await productCheckoutWithoutPostalCodeInformation(page);
    await expect(checkoutInformationErrorMassage(page)).toHaveText(
      errorMessages.postalCodeFieldErrorMessage
    );
  });
});
