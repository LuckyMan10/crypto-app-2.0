export type userType = {
  email: string;
  id: string;
  username: string;
};
export type initState = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: userType;
  isAuth: boolean;
  isAuthLoading: boolean;
  isAuthError: boolean;
};

export type userDataType = {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    username: string;
    password: string;
    id: string;
  };
};

export type registrationType = {
  username: string;
  password: string;
  email: string;
};
export type loginType = Omit<registrationType, 'username'>;
export type logoutType = {
  message: string;
};
