import { Link } from "react-router-dom";
import classes from "./SimilarProduct.module.css";
import { useContext, useEffect, useState } from "react";
import { MonContexte } from "../ProductDetail";
import axios from "axios";

export default function SimilarProuct() {
  const { produitSimilaire, idSousCategorie } = useContext(MonContexte);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let t = [];
    const fecthProduitSimilaire = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9195/api/imageProduit/all`
        );
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].produit.sousCategorie.id == idSousCategorie) {
            t.push(response.data[i]);
          }
        }
        setProduct(t);
        // console.log(t);
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des image du produit:",
          error
        );
      }
    };

    fecthProduitSimilaire();
  }, [idSousCategorie]);

  // console.log(idSousCategorie);
  return (
    <div className={classes.similarProuct}>
      {product.map((produit) => {
        return (
          <div className={classes.cardProduct} key={produit.id}>
            <div className={classes.imageCardProduct}>
              <img src={produit.cheminImageProduit} />
            </div>
            <div className={classes.infoCardProduct}>
              <p className={classes.nameProduct}>
                {produit.produit.nomProduit}
              </p>
              <p>{produit.produit.prix}€</p>
              <Link className={classes.showProduct}>Voir le produit</Link>
              <Link className={classes.cartProduct}>Ajouter au panier</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
