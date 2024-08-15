import { useEffect, useState } from "react";
import classes from "./CategProEl2.module.css";
import {useParams} from 'react-router-dom';
export default function CategProEl2(){
    const idCategorie = useParams();
    
//   const [products, setProducts] = useState([]);
    const [categorie, setCategorie] = useState({"id":1, "nomCategorie":"categorie1"});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8084/api/categorie?id=${idCategorie.idCategorie}`);
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
                <p>{categorie.nomCategorie}</p>
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
          <div className={classes.cardCategorie}>
            <div className={classes.imageCardCategorie}>
              <img src="https://www.slate.fr/uploads/store/story_185441/large_landscape_185441.jpg" alt="" srcset="" />
            </div>

            <div className={classes.infoCardCategorie}>
              <p className={classes.nomProduitCardCategorie}>Nom du produit</p>
              <p className={classes.pStyleCateg}>Prix</p>
              <p className={classes.pStyleCateg}>Disponibilité</p>
              <p>Notes du produit</p>
             
              <a href="" className={classes.voirLeProduitStyleCateg}>
                Voir le produit
              </a>
              <form action="" className={classes.ajouterAuPanierCateg}>
                <button type="submit">Ajouter aux panier</button>
              </form>
              <a href="" className={classes.voirPlusInfoStyleCateg}>
                Voir plus d'info
              </a>
            </div>
          </div>

          <div className={classes.cardCategorie}>
            <div className={classes.imageCardCategorie}>
              <img src="https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/series/la-famille-simpson-revient-pour-deux-nouvelles-saisons-2948096/54370090-1-fre-FR/La-famille-Simpson-revient-pour-deux-nouvelles-saisons.jpg" alt="" srcset="" />
            </div>

            <div className={classes.infoCardCategorie}>
              <p className={classes.nomProduitCardCategorie}>Nom du produit</p>
              <p className={classes.pStyleCateg}>Prix</p>
              <p className={classes.pStyleCateg}>Disponibilité</p>
              <p>Notes du produit</p>
              
              <a href="" className={classes.voirLeProduitStyleCateg}>
                Voir le produit
              </a>
              <form action="" className={classes.ajouterAuPanierCateg}>
                <button type="submit">Ajouter aux panier</button>
              </form>
              <a href="" className={classes.voirPlusInfoStyleCateg}>
                Voir plus d'info
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
        </>
    )
}