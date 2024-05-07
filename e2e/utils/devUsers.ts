type DevUsersType = {
  [key: string]: { username: string; password: string };
};

export const devUsers: DevUsersType = {
  standardUser: { username: "standard_user", password: "secret_sauce" },
};
