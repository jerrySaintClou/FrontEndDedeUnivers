import React, { createContext, useState, useEffect, useContext } from 'react';
const dateContext = createContext();

export const DataProvider = ({ children }) => {
    const [tokenBearer, setTokenBearer] = useState(null);/* Ici je vais récupérer un objet */
    /*const [refreshToken, setRefreshToken] = useState(null);
    const [idUtilisateur, setIdUtilisateur] = useState(null);*/
    const [idCategorie, setIdCategorie] = useState(null);
    const [idProduit, setIdProduit] = useState(null);
    const [idSousCategorie, setIdSousCategorie] = useState(null);
    const [idRole, setIdRole] = useState(null);
    const [nomCategorie, setNomCategorie] = useState(null);
  
  
    const [auth, setAuth] = useState(() => {
      const token = localStorage.getItem('tokenBearer');
      const refreshToken = localStorage.getItem('refreshToken');
      return { token, refreshToken };
    });
  
  
    useEffect(() => {
      localStorage.setItem('tokenBearer', auth.token);
      localStorage.setItem('refreshToken', auth.refreshToken);
    }, [auth]);
  
  
  
    return (
      <dateContext.Provider value={{ 
        //   tokenBearer, setTokenBearer,
        //   refreshToken, setRefreshToken, 
        //   idUtilisateur, setIdUtilisateur, 
        //   idCategorie, setIdCategorie, 
        //   idSousCategorie, setIdSousCategorie, 
        //   idRole, setIdRole,
        //   auth, setAuth ,
        //   nomCategorie, setNomCategorie
      }}>
        {children}
      </dateContext.Provider>
    );
  };
  
  //export { DataContext, DataProvider };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
  
  