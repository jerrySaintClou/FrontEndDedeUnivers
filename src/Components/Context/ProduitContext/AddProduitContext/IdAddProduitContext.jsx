import { createContext, useState } from "react";

export const IdAddProduitContext = createContext({
  idProduitAdd: 0,
  modifIdProduitAdd: (idProduit) => {},
});

export default function IdProduitAddProvider({ children }) {
  const [idProduitAdd, setIdProduitAdd] = useState(0);
  const modifIdProduitAdd = (idProduit) => {
    setIdProduitAdd(idProduit);
  };
  return (
    <IdAddProduitContext.Provider
      value={{
        idProduitAdd,
        modifIdProduitAdd,
      }}
    ></IdAddProduitContext.Provider>
  );
}
