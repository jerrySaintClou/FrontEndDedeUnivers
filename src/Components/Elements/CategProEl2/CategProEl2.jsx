import { useEffect, useState } from "react";
import classes from "./CategProEl2.module.css";
import {Link, useParams} from 'react-router-dom';
import { useCart } from 'react-use-cart';

export default function CategProEl2(){
  
  const idCategorie = useParams();
    
  //   const [products, setProducts] = useState([]);
      const [produits, setProduits] = useState([
        {"id":1,"nomProduit":"produit1","description":"description produit1",
        "prix":32,"stock":45,"dateMiseEnLigne":"2024-10-03",
        "imageProduits":[{"id":1,"cheminImageProduit":"https://fr.web.img2.acsta.net/r_654_368/newsv7/20/04/15/16/51/5108362.jpg"}]
      },
      {"id":2,"nomProduit":"produit2","description":"description produit2",
        "prix":32,"stock":45,"dateMiseEnLigne":"2024-10-03",
        "imageProduits":[{"id":1,"cheminImageProduit":"https://www.slate.fr/uploads/store/story_185441/large_landscape_185441.jpg"}]
      }
      
      ]);
  
      function ajoutPanier(produit){
        // let produits = JSON.parse(localStorage.getItem("produits")) || [];
          
          // Ajouter le nouveau produit à la liste
          // produits.push(produit);
          
          // Sauvegarder la liste mise à jour dans le localStorage
          // localStorage.setItem("produits", JSON.stringify(produits));
  
  
           // Récupérer les produits existants dans le localStorage
           let produits = JSON.parse(localStorage.getItem("produits")) || [];
          
           // Vérifier si le produit existe déjà dans le localStorage
           const produitExiste = produits.some(item => item.id === produit.id);
           
           // Ajouter le nouveau produit à la liste s'il n'existe pas déjà
           if (!produitExiste) {
               produits.push(produit);
           }
           
           // Sauvegarder la liste mise à jour dans le localStorage
           localStorage.setItem("produits", JSON.stringify(produits));
      }
  
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:8084/trouverLesProduitsAvecUneSousCategorie/?sousCategorieId=${idCategorie.idCategorie}`);
  //         setProducts(response.data);
  //       } catch (error) {
  //         console.error('Erreur lors de la récupération des produits:', error);
  //       }
  //     };
  
  //     fetchProducts();
  //   }, [categoryName]);
  
  
      return(
          <>
          <div>
              <div className={classes.categorieDiv}>
                  <div className={classes.imageCategorieDiv}>
                      <img src="https://media.ouest-france.fr/v1/pictures/MjAyMTA1NTc1ZmU0OWEwZDc1NDcxYmMwNzJiYjkzZTQ3YWRlMzQ?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=b4c7ed803dcf64503eb0ea44974e8abfb17e30df213bd18d261cd77a2e5e1b62" alt="" />
                  </div>
                  <p>Sous Categorie 1</p>
              </div>
              <div className={classes.filtrerCategProduct}>
                  <form action="" method="" className={classes.trieCategorieParNomCateg}>
                      <div className={classes.divCategSearchByName}>
                          <label htmlFor="SearchByName">Rechercher un produit a partir du nom de la categorie</label>
                           <input type="text" name="" id="SearchByName" placeholder="Rechercher un produit a partir du nom de la categorie" />
                      </div>
                      <button>Rechercher</button>
                  </form>
  
                  <form action="" method="" className={classes.trieCategorie}>
                      <div className={classes.trieForSelectCateg}>
                          <label for="" className={classes.labelTrieCategorie}>
                              Trier par:
                          </label>
                          <select name="" id="" className={classes.selectTrieCategorie}>
                              <option value="">Nom croissant</option>
                              <option value="">Nom décroissant</option>
                              <option value="">Prix croissant</option>
                              <option value="">Prix décroissant</option>
                              <option value="">Date d'ajout</option>
                          </select>
                      </div>
                      <button>Rechercher</button>
                  </form>
              </div>
    
  
        <div className={classes.contenuLaCategorie}>
         
  
          <div className={classes.lesCardsCategorie}>
            {produits.map((produit) => {
              return (
                <div className={classes.cardCategorie}>
                <div className={classes.imageCardCategorie}>
                  <img src={produit.imageProduits[0].cheminImageProduit} alt="" srcset="" />
                </div>
    
                <div className={classes.infoCardCategorie}>
                  <p className={classes.nomProduitCardCategorie}>{produit.nomProduit}</p>
                  <p className={classes.pStyleCateg}>{produit.prix}</p>
                  <p className={classes.pStyleCateg}>Disponibilité</p>
                  <p>Notes du produit</p>
                 
                  <Link to={`/product/${produit.id}`} className={classes.voirLeProduitStyleCateg}>
                    Voir le produit
                  </Link>
                  <form action="" className={classes.ajouterAuPanierCateg}>
                    <button onClick={()=>{ajoutPanier(produit)}}>Ajouter aux panier</button>
                  </form>
                  <a href="" className={classes.voirPlusInfoStyleCateg}>
                    Voir plus d'info
                  </a>
                </div>
              </div>
              )
            })}
  
          </div>
        </div>
      </div>
          </>
      )
  
}