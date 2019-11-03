const tokenKey = 'authentication_token';

export const getToken = () => localStorage.getItem(tokenKey);

export const setToken = (token: string) => localStorage.setItem(tokenKey, token);

export const removeToken = () => localStorage.removeItem(tokenKey);
