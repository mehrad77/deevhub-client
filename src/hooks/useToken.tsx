import { useState } from 'react';

interface IUserLocalStorage {
  email?: string;
  id?: string;
}

export type TokenHookType = () => [
  string,
  (value?: string) => void,
  {
    email?: string;
    id?: string;
  },
  React.Dispatch<React.SetStateAction<IUserLocalStorage>>,
];

export const useToken: TokenHookType = () => {
  const KEY: string = 'authentication_token';
  const USER: string = 'user_data';
  let LocalStorageUser = window.localStorage.getItem(USER) || 'undefined';
  let LocalUser: string =
    LocalStorageUser === 'undefined' ? '{}' : LocalStorageUser;
  const initToken: string = window.localStorage.getItem(KEY) || '';
  const initUser: IUserLocalStorage = JSON.parse(LocalUser);
  const [token, setToken] = useState(initToken);
  const [user, setUser] = useState<IUserLocalStorage>(initUser);

  const changeToken = (newToken: string = '', extra?: any) => {
    try {
      if (!newToken) {
        window.localStorage.removeItem(KEY);
      } else {
        window.localStorage.setItem(KEY, newToken);
        window.localStorage.setItem(USER, extra);
      }
      setToken(newToken);
      setUser(extra);
    } catch (err) {
      console.error(err);
    }
  };

  return [token, changeToken, user, setUser];
};
