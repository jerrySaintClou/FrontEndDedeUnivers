import { useContext } from "react";
import classes from "./DashboardSousCategorie.module.css";
import { AddProduitContext } from "../../Context/ProduitContext/AddProduitContext/AddProduitContext";

export default function DashboardSousCategorie() {
  const { toggleSousCategorieForm } = useContext(AddProduitContext);
  return (
    <div className={classes.DashboardSousCategorie}>
      <p className={classes.pIntroDashboardSousCategorie}>
        Pour l'ajout de vos produits nous avons besoins d'abord de connaître le
        type du produit(télé, smatrphone, montre, assiette, ect..) auquel vous
        souhaitez ajouter.
      </p>
      <button
        className={classes.boutonAjoutSousCategorie}
        onClick={toggleSousCategorieForm}
      >
        Ajouter un nouveau type
      </button>
      <p className={classes.pOu}>Ou</p>
      <p className={classes.pPropositionList}>
        Selectionnez un type déja existant
      </p>
      <div className={classes.cardsDashboardSousCategorie}>
        <div className={classes.cardDashboardSousCategorie}>
          <div className={classes.imageCardDashboardSousCategorie}>
            <img
              src="https://www.cdiscount.com/pdt2/5/4/3/1/700x700/xia6934177720543/rw/ecran-pc-gamer-incurve-xiaomi-mi-display-34-w.jpg"
              alt=""
            />
          </div>
          <div className={classes.infoCardDashboardSousCategorie}>
            <p>Titre sous catégorie</p>

            <div className={classes.boutonsCardDashboardSousCategorie}>
              <button className={classes.boutonSelectionner}>
                Selectionner
              </button>
              <button className={classes.boutonModifier}>Modifier</button>
              <button className={classes.boutonSupprimer}>Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
