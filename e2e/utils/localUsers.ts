type LocalUsersType = {
  [key: string]: { username: string; password: string };
};

export const localUsers: LocalUsersType = {
  standardUser: { username: "standard_user", password: "secret_sauce" },
};
