export const UserRoles = {
  StandardUser: "standardUser",
} as const;

export type UserRole = (typeof UserRoles)[keyof typeof UserRoles];

type UserCred = {
  username: string;
  password: string;
};

type UsersByRole = {
  [role in UserRole]: UserCred;
};

export const devUsers: UsersByRole = {
  [UserRoles.StandardUser]: {
    username: "standard_user",
    password: "secret_sauce",
  },
};

export const localUsers: UsersByRole = {
  [UserRoles.StandardUser]: {
    username: "standard_user",
    password: "secret_sauce",
  },
};

export const envUsers: UsersByRole =
  process.env.NODE_ENV === "dev" ? devUsers : localUsers;
