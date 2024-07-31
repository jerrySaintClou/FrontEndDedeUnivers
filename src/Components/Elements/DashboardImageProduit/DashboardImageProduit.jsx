import { useContext, useEffect, useState } from "react";
import classes from "./DashboardImageProduit.module.css";
import { AddProduitContext } from "../../Context/ProduitContext/AddProduitContext/AddProduitContext";
import axios from "axios";
import { IdAddProduitContext } from "../../Context/ProduitContext/AddProduitContext/IdAddProduitContext";
export default function DashboardImageProduit() {
  const [imageProduits, setImageProduits] = useState([]);
  const { idProduitAdd } = useContext(IdAddProduitContext);
  console.log(idProduitAdd);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8084/api/imageProduit/all"
        );
        setImageProduits(response.data);
        console.log(response.data);
      } catch (error) {
        // console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const { toggleImageProduitForm } = useContext(AddProduitContext);
  return (
    <div className={classes.DashboardImageProduit}>
      <button
        className={classes.boutonAjoutSousCategorie}
        onClick={toggleImageProduitForm}
      >
        Ajouter une nouvelle image
      </button>
      {imageProduits.map((imageProduit) => {
        return (
          <div className={classes.cardsImage} key={imageProduit.id}>
            <div className={classes.cardImage}>
              <img src={imageProduit.cheminImageProduit} alt="" />
              <button className={classes.boutonModifier}>Modifier</button>
              <button className={classes.boutonSupprimer}>Supprimer</button>
            </div>
          </div>
        );
      })}
      {/* 
            <div className={classes.cardsImage}>
                <div className={classes.cardImage}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wNF7pjW0CwKxwK8d_-4H_UA-oVm9m093lw&s" alt="" />
                    <button className={classes.boutonModifier}>Modifier</button>
                    <button className={classes.boutonSupprimer}>Supprimer</button>
                </div>
            </div> */}

      <button className={classes.boutonValiderImageProduit}>
        Valider les images produits
      </button>
    </div>
  );
}
