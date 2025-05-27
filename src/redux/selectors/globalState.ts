interface authData {
  isAuth: boolean;
  token: string;
  userId: string;
}

export interface globalState {
  auth: authData;
}
