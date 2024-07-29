import {createContext, useState } from "react";

export const AddProduitContext = createContext({
    addProduit: "dashboardSousCategorie",
    toggleDashboardSousCategorie: () => {},
    toggleSousCategorieForm: () => {},
    toggleDashboardCategorie: () => {},
    toggleCategorieForm: () => {},
    toggleDashboardFournisseur: () => {},
    toggleFournisseurForm: () => {},
    toggleDashboardImageProduit: () => {},
    toggleImageProduitForm: () => {},
    toggleDashboardImageSousCategorie: () => {},
    toggleImageSousCategorieForm: () => {},
    toggleDashboardImageCategorie: () => {},
    toggleImageCategorieForm: () => {},
});


export default function AddProduitContextProvider({children}){
    const [addProduit,setAddProduit] = useState("DashboardSousCategorie");
    const toggleDashboardSousCategorie = ()=>{
        setAddProduit("DashboardSousCategorie");
    }
    const toggleSousCategorieForm = ()=>{
        setAddProduit("SousCategorieForm");
    }

    const toggleDashboardCategorie = ()=>{
        setAddProduit("DashboardCategorie");
    }
    const toggleCategorieForm = ()=>{
        setAddProduit("CategorieForm");
    }

    const toggleDashboardFournisseur = ()=>{
        setAddProduit("DashboardFournisseur");
    }
    const toggleFournisseurForm = ()=>{
        setAddProduit("FournisseurForm");
    }

    const toggleDashboardImageProduit = ()=>{
        setAddProduit("DashboardImageProduit");
    }
    const toggleImageProduitForm = ()=>{
        setAddProduit("ImageProduitForm");
    }

    const toggleDashboardImageSousCategorie = ()=>{
        setAddProduit("DashboardImageSousCategorie");
    }
    const toggleImageSousCategorieForm = ()=>{
        setAddProduit("ImageSousCategorieForm");
    }

    const toggleDashboardImageCategorie = ()=>{
        setAddProduit("DashboardImageCategorie");
    }
    const toggleImageCategorieForm = ()=>{
        setAddProduit("ImageCategorieForm");
    }
    return <AddProduitContext.Provider value={{
        addProduit,
        toggleDashboardSousCategorie,
        toggleSousCategorieForm,
        toggleDashboardCategorie,
        toggleCategorieForm,
        toggleDashboardFournisseur,
        toggleFournisseurForm,
        toggleDashboardImageProduit,
        toggleImageProduitForm,
        toggleDashboardImageSousCategorie,
        toggleImageSousCategorieForm,
        toggleDashboardImageCategorie,
        toggleImageCategorieForm,
    }}>
        {children}
    </AddProduitContext.Provider>
}
