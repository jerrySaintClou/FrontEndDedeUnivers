import { useEffect, useState } from "react";
import classes from "./Gch2.module.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";
export default function Gch2() {
  const [produits, setProduits] = useState([]);
  const { addItem } = useCart();

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

  // const addToCart = (product) => {
  //   console.log(product);
  //   const updatedCart = [...cart, product];
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  return (
    <div className={classes.Gch2}>
      <div className={classes.carouselGch2}>
        <button className={classes.boutonGGch2}>G</button>
        <div className={classes.cardsAllGch2}>
          <div className={classes.ensembleDivGch2}>
            <div className={classes.divCardGch2}>
              {produits.map((produit) => {
                return (
                  <Link
                    className={classes.cardGch2}
                    // onClick={() =>
                    //   addToCart({
                    //     id: produit.id,
                    //     name: produit.nomProduit,
                    //     price: produit.prix,
                    //     image: produit.imageProduits[0].cheminImageProduit,
                    //   })
                    // }
                    onClick={() => addItem(produit)}
                  >
                    <div className={classes.imageCardGch2}>
                      <img
                        // src="https://americarprestige.com/wp-content/uploads/2013/02/location-ferrari-812-superfast-1.jpg"
                        src={produit.imageProduits[0].cheminImageProduit}
                        alt=""
                      />
                    </div>
                    <div className={classes.infoCardGch2}>
                      <p></p>
                    </div>
                  </Link>
                );
              })}

              {/* <Link className={classes.cardGch2}>
                <div className={classes.imageCardGch2}>
                  <img
                    src="https://americarprestige.com/wp-content/uploads/2013/02/location-ferrari-812-superfast-1.jpg"
                    alt=""
                  />
                </div>
                <div className={classes.infoCardGch2}>
                  <p></p>
                </div>
              </Link> */}
              {/* <Link className={classes.cardGch2}>
                <div className={classes.imageCardGch2}>
                  <img
                    src="https://americarprestige.com/wp-content/uploads/2013/02/location-ferrari-812-superfast-1.jpg"
                    alt=""
                  />
                </div>
                <div className={classes.infoCardGch2}>
                  <p></p>
                </div>
              </Link> */}
            </div>
          </div>
        </div>

        <button className={classes.boutonDGch2}>D</button>
      </div>

      <div className={classes.ensembleBouton}>
        <button className={classes.boutonStyleActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
      </div>
    </div>
  );
}
