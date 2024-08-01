import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./CardsProductDashboard.module.css";
import axios from "axios";
import BoutonComponentDelete from "./BoutonComponentDelete/BoutonComponentDelete";

export default function CardsProductDashboard() {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8084/api/produit/tousLesProduits"
        );
        setProduits(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={classes.CardsProductDashboard}>
      {produits.map((produit) => {
        return (
          <div className={classes.cardProductDashboard} key={produit.id}>
            <div className={classes.cardImageDashboard}>
              {/* <img src={produit.imageProduits[0].cheminImageProduit} alt="" /> */}
            </div>
            <div className={classes.cardInfoDashboard}>
              <p className={classes.titleStyleCardDasboard}>
                {produit.nomProduit}
              </p>
              <p className={classes.descriptionStyleCardDasboard}>
                {produit.description}
              </p>
              <p className={classes.priceStyleCardDasboard}>
                {produit.description}
              </p>
              <p className={classes.stockStyleCardDasboard}>{produit.prix}</p>
              <Link
                // to={`/modifForm:${produit.id}`}
                className={classes.modifStyleDasboard}
              >
                Modifier
              </Link>
              {/* <button className={classes.deleteStyleDasboard}>Supprimer</button> */}
              <BoutonComponentDelete productId={produit.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
