import { useContext } from "react";
import classes from "./DashboardImageProduit.module.css";
import { AddProduitContext } from "../../Context/ProduitContext/AddProduitContext/AddProduitContext";
export default function DashboardImageProduit(){
    const {toggleImageProduitForm} = useContext(AddProduitContext);
    return(
        <div className={classes.DashboardImageProduit}>
            <button className={classes.boutonAjoutSousCategorie}  onClick={toggleImageProduitForm}>Ajouter une nouvelle image</button>
            <div className={classes.cardsImage}>
                <div className={classes.cardImage}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wNF7pjW0CwKxwK8d_-4H_UA-oVm9m093lw&s" alt="" />
                    <button className={classes.boutonModifier}>Modifier</button>
                    <button className={classes.boutonSupprimer}>Supprimer</button>
                </div>
            </div>
            <button className={classes.boutonValiderImageProduit}>Valider les images produits</button>
        </div>
    )
}