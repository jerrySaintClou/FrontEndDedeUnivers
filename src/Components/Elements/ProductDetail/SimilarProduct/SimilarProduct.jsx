import { Link } from "react-router-dom";
import classes from "./SimilarProduct.module.css";

export default function SimilarProuct() {
  return (
    <div className={classes.similarProuct}>
      <div className={classes.cardProduct}>
        <div className={classes.imageCardProduct}>
          <img src="" />
        </div>
        <div className={classes.infoCardProduct}>
          <p className={classes.nameProduct}>Nom du produit</p>
          <p>Prix du produit</p>
          <Link className={classes.showProduct}>Voir le produit</Link>
          <Link className={classes.cartProduct}>Ajouter au panier</Link>
        </div>
      </div>

      <div className={classes.cardProduct}>
        <div className={classes.imageCardProduct}>
          <img src="" />
        </div>
        <div className={classes.infoCardProduct}>
          <p className={classes.nameProduct}>Nom du produit</p>
          <p>Prix du produit</p>
          <Link className={classes.showProduct}>Voir le produit</Link>
          <Link className={classes.cartProduct}>Ajouter au panier</Link>
        </div>
      </div>

      <div className={classes.cardProduct}>
        <div className={classes.imageCardProduct}>
          <img src="" />
        </div>
        <div className={classes.infoCardProduct}>
          <p className={classes.nameProduct}>Nom du produit</p>
          <p>Prix du produit</p>
          <Link className={classes.showProduct}>Voir le produit</Link>
          <Link className={classes.cartProduct}>Ajouter au panier</Link>
        </div>
      </div>

      <div className={classes.cardProduct}>
        <div className={classes.imageCardProduct}>
          <img src="" />
        </div>
        <div className={classes.infoCardProduct}>
          <p className={classes.nameProduct}>Nom du produit</p>
          <p>Prix du produit</p>
          <Link className={classes.showProduct}>Voir le produit</Link>
          <Link className={classes.cartProduct}>Ajouter au panier</Link>
        </div>
      </div>
    </div>
  );
}
