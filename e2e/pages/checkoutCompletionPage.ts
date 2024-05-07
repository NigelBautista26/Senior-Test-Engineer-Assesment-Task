import { PageLocator, getByRole } from "e2e/utils/pageUtils";

export const thankYouMessageHeader: PageLocator = getByRole({
  role: "heading",
  name: "THANK YOU FOR YOUR ORDER",
});
