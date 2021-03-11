export const TOKEN_KEY = "token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: string) => {
  console.log(TOKEN_KEY)
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
