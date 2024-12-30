export interface State {
  user: string;
  isAuthenticated: boolean;
}

export interface Action {
  type: string;
  payload?: {
    user: string;
  };
}

export interface User {
  given_name: string;
  family_name: string;
  sub: string;
  picture: string | undefined;
  isAuthenticated: boolean;
}
