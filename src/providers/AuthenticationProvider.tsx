import React, { createContext, useState } from 'react';
import { useToken } from '../hooks';

export const AuthenticationContext = createContext<{
  token: string;
  setToken: any;
  user: any;
  setUser: any;
}>({
  token: '',
  setToken: (value?: string) => {},
  user: {},
  setUser: (value?: string) => {},
});

export const AuthenticationProvider = ({ children }: { children: any }) => {
  const [token, setToken, user, setUser] = useToken();
  return (
    <AuthenticationContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
