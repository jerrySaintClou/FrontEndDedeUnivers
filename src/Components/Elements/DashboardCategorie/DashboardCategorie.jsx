import { useContext } from "react";
import classes from "./DashboardCategorie.module.css";
import { AddProduitContext } from "../../Context/ProduitContext/AddProduitContext/AddProduitContext";

export default function DashboardCategorie(){
    const {toggleCategorieForm} = useContext(AddProduitContext);
    return(
        <div className={classes.DashboardSousCategorie}>
            <p className={classes.pIntroDashboardSousCategorie}>
                Nous avons besoins maintenant de connaitre de quelle
                catégorie sera le produit que vous souhaitez ajouter.
            </p>
            <button className={classes.boutonAjoutSousCategorie}  onClick={toggleCategorieForm}>Ajouter une nouvelle catégorie</button>
            <p className={classes.pOu}>Ou</p>
            <p className={classes.pPropositionList}>Selectionnez une catégorie déja existant</p>
            <div className={classes.cardsDashboardSousCategorie}>   
                <div className={classes.cardDashboardSousCategorie}>
                    <div className={classes.imageCardDashboardSousCategorie}>
                        <img src="https://a2edepannage.fr/wp-content/uploads/2022/12/1200-L-bosch-fond-sur-llectronique-automobile.jpg" alt="" />
                    </div>
                    <div className={classes.infoCardDashboardSousCategorie}>
                        
                        <p>Titre  catégorie</p>

                        <div className={classes.boutonsCardDashboardSousCategorie}>
                            <button className={classes.boutonSelectionner}>Selectionner</button>
                            <button className={classes.boutonModifier}>Modifier</button>
                            <button className={classes.boutonSupprimer}>Supprimer</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}