import { useEffect, useState } from "react";
import classes from "./CategProEl2.module.css";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";
import SearchNameProduct from "../../forms/ProductForm/SearchNameProduct/SearchNameProduct";
import { useForm } from "react-hook-form";

export default function CategProEl2() {
  const idCategorie = useParams();

  const [produits, setProduits] = useState([]);
  const [imageProduits, setImageProduits] = useState([]);
  const [triOption, setTriOption] = useState("");
  // const [produits, setProduits] = useState([
  //   {"id":1,"nomProduit":"produit1","description":"description produit1",
  //   "prix":32,"stock":45,"dateMiseEnLigne":"2024-10-03",
  //   "imageProduits":[{"id":1,"cheminImageProduit":"https://fr.web.img2.acsta.net/r_654_368/newsv7/20/04/15/16/51/5108362.jpg"}]
  // },
  // {"id":2,"nomProduit":"produit2","description":"description produit2",
  //   "prix":32,"stock":45,"dateMiseEnLigne":"2024-10-03",
  //   "imageProduits":[{"id":1,"cheminImageProduit":"https://www.slate.fr/uploads/store/story_185441/large_landscape_185441.jpg"}]
  // }

  // ]);

  function ajoutPanier(produit) {
    // let produits = JSON.parse(localStorage.getItem("produits")) || [];

    // Ajouter le nouveau produit à la liste
    // produits.push(produit);

    // Sauvegarder la liste mise à jour dans le localStorage
    // localStorage.setItem("produits", JSON.stringify(produits));

    // Récupérer les produits existants dans le localStorage
    let produits = JSON.parse(localStorage.getItem("produits")) || [];

    // Vérifier si le produit existe déjà dans le localStorage
    const produitExiste = produits.some((item) => item.id === produit.id);

    // Ajouter le nouveau produit à la liste s'il n'existe pas déjà
    if (!produitExiste) {
      produits.push(produit);
    }

    // Sauvegarder la liste mise à jour dans le localStorage
    localStorage.setItem("produits", JSON.stringify(produits));
  }

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:9195/api/produit/RecupererLesProduitsAvecUneSousCategorie/${idCategorie.idCategorie}`);
    //     setProduits(response.data);
    //     console.log(response.data);
    //     console.log("${idCategorie.idCategorie}");

    //   } catch (error) {
    //      console.error('Erreur lors de la récupération des produits:', error);
    //   }
    // };

    // fetchProducts();

    let t = [];
    let t2 = [];
    const fetchImageProduit = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9195/api/imageProduit/all`
        );
        for (let i = 0; i < response.data.length; i++) {
          if (
            response.data[i].produit.sousCategorie.id == idCategorie.idCategorie
          ) {
            t.push(response.data[i].produit);
            // setImageProduits(response.data[i]);
            t2.push(response.data[i]);
          }
        }
        for (let i = 0; i < t.length - 1; i++) {
          for (let j = i + 1; j < t.length; j++) {
            if (t[i].id === t[j].id) {
              t.splice(j, 1);
              t2.splice(j, 1);
            }
          }
        }
        setProduits(t);
        setImageProduits(t2);
        // console.log(t2)

        //   if(response.data.)
        // console.log(response.data);
        //   console.log(response.data.length);
        // console.log("la valeur de imageProduits est de ");
        // console.log(imageProduits);

        // console.log("la valeur de t est de ");
        // console.log(t);

        //   console.log(response.data.length);
        // console.log("la valeur d'une seule imageProduit est de ");
        // console.log(imageProduits);
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des image du produit:",
          error
        );
      }
    };

    fetchImageProduit();
  }, [idCategorie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    trierProduits(triOption);
  };

  const trierProduits = (option) => {
    let produitsTries = [...produits];
    if (option === "Prix croissant") {
      produitsTries.sort((a, b) => a.prix - b.prix);
    } else if (option === "Prix décroissant") {
      produitsTries.sort((a, b) => b.prix - a.prix);
    }
    setProduits(produitsTries);
  };

  console.log(triOption);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleButtonClick = () => {
    console.log("Valeur sélectionnée:", selectedValue);
    //console.log(t2);

    let croissant = [];
    let decroissant = [];
    if (selectedValue == "Prix croissant") {
      //Ordre Croissant
      croissant = imageProduits;
      console.log(croissant);
      croissant.sort(function (a, b) {
        return a.produit.prix - b.produit.prix;
      });
    }

    if (selectedValue == "Prix décroissant") {
      decroissant = imageProduits;
      console.log(decroissant);
      decroissant.sort(function (a, b) {
        return b.produit.prix - a.produit.prix;
      });
    }

    // console.log(croissant);

    //Ordre decroissant

    console.log(decroissant);
  };
  return (
    <>
      <div>
        <div className={classes.categorieDiv}>
          <div className={classes.imageCategorieDiv}>
            {/* <img src={produits[0].sousCategorie.imageSousCategorie} alt="" /> */}
          </div>
          {/* <p>{produits[0].sousCategorie.nomSousCategorie}</p> */}
        </div>
        <div className={classes.filtrerCategProduct}>
          <form className={classes.trieCategorieParNomCateg}>
            <div className={classes.divCategSearchByName}>
              <label htmlFor="SearchByName">
                Rechercher un produit a partir du nom de la categorie
              </label>
              <input
                type="text"
                name=""
                id="SearchByName"
                placeholder="Rechercher un produit a partir du nom de la categorie"
              />
            </div>
            <button>Rechercher</button>
          </form>

          {/* <SearchNameProduct/> */}

          <form
            action=""
            method=""
            className={classes.trieCategorie}
            onSubmit={handleSubmit}
          >
            <div className={classes.trieForSelectCateg}>
              <label for="" className={classes.labelTrieCategorie}>
                Trier par:
              </label>
              <select
                name=""
                id=""
                className={classes.selectTrieCategorie}
                // value={triOption}
                // onChange={(e) => setTriOption(e.target.value)}
                onChange={handleSelectChange}
              >
                {/* <option value="">Nom croissant</option> */}
                {/* <option value="">Nom décroissant</option> */}
                <option value="Prix croissant">Prix croissant</option>
                <option value="Prix décroissant">Prix décroissant</option>
                {/* <option value="">Date d'ajout</option> */}
              </select>
            </div>
            <button onClick={handleButtonClick}>Rechercher</button>
          </form>
        </div>

        <div className={classes.contenuLaCategorie}>
          <div className={classes.lesCardsCategorie}>
            {imageProduits.map((imageProduit) => {
              return (
                <div className={classes.cardCategorie} key={imageProduit.id}>
                  <div className={classes.imageCardCategorie}>
                    <img
                      src={imageProduit.cheminImageProduit}
                      alt=""
                      srcset=""
                    />
                  </div>

                  <div className={classes.infoCardCategorie}>
                    <p className={classes.nomProduitCardCategorie}>
                      {imageProduit.produit.nomProduit}
                    </p>
                    <p className={classes.pStyleCateg}>
                      {imageProduit.produit.prix}
                    </p>
                    <p className={classes.pStyleCateg}>Disponibilité</p>
                    <p>Notes du produit</p>

                    <Link
                      to={`/product/${imageProduit.produit.id}`}
                      className={classes.voirLeProduitStyleCateg}
                    >
                      Voir le produit
                    </Link>
                    <form action="" className={classes.ajouterAuPanierCateg}>
                      <button
                        onClick={() => {
                          ajoutPanier(imageProduit);
                        }}
                      >
                        Ajouter aux panier
                      </button>
                    </form>
                    <a href="" className={classes.voirPlusInfoStyleCateg}>
                      Voir plus d'info
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
