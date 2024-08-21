import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const initialRefreshToken = localStorage.getItem("refresh-token");

  const [token, setToken] = useState(initialToken);
  const [refreshToken, setRefreshToken] = useState(initialRefreshToken);

  return (
    <TokenContext.Provider
      value={{ token, setToken, refreshToken, setRefreshToken }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
