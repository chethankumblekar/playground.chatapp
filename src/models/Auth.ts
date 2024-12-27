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
  name: string;
  email: string;
  picture: string | undefined;
  isAuthenticated: boolean;
}
