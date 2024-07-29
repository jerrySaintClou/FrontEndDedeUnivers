import classes from "./CategoryProductElement.module.css";

export default function CategoryProductElement() {
  return (
    <div>
      <form action="" method="" className={classes.trieCategorie}>
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
      </form>

      <div className={classes.contenuLaCategorie}>
        <div className={classes.filtreCategorie}>
          <a href="#" className={classes.filtreCategoriePStyle}>
            Categorie 1
          </a>
          <ul className={classes.listeFiltre}>
            <li>
              <a href="">Sous-categorie1</a>
            </li>
            <li>
              <a href="">Sous-categorie1</a>
            </li>
            <li>
              <a href="">Sous-categorie1</a>
            </li>
          </ul>
          <br />
          <p className={classes.filtreCategoriePStyle}>Categorie 2</p>
          <ul className={classes.listeFiltre}>
            <li>
              <a href="">Sous-categorie2</a>
            </li>
            <li>
              <a href="">Sous-categorie2</a>
            </li>
            <li>
              <a href="">Sous-categorie2</a>
            </li>
          </ul>
        </div>

        <div className={classes.lesCardsCategorie}>
          <div className={classes.cardCategorie}>
            <div className={classes.imageCardCategorie}>
              <img src="" alt="" srcset="" />
            </div>

            <div className={classes.infoCardCategorie}>
              <p className={classes.nomProduitCardCategorie}>Nom du produit</p>
              <p className={classes.pStyleCateg}>Prix</p>
              <p className={classes.pStyleCateg}>Disponibilité</p>
              <a href="" className={classes.voirLeProduitStyleCateg}>
                Voir le produit
              </a>
              <form action="" className={classes.ajouterAuPanierCateg}>
                <button type="submit">Ajouter aux panier</button>
              </form>
            </div>
          </div>

          <div className={classes.cardCategorie}>
            <div className={classes.imageCardCategorie}>
              <img src="" alt="" srcset="" />
            </div>

            <div className={classes.infoCardCategorie}>
              <p className={classes.nomProduitCardCategorie}>Nom du produit</p>
              <p className={classes.pStyleCateg}>Prix</p>
              <p className={classes.pStyleCateg}>Disponibilité</p>
              <a href="" className={classes.voirLeProduitStyleCateg}>
                Voir le produit
              </a>
              <form action="" className={classes.ajouterAuPanierCateg}>
                <button type="submit">Ajouter aux panier</button>
              </form>
            </div>
          </div>

          <div className={classes.cardCategorie}>
            <div className={classes.imageCardCategorie}>
              <img src="" alt="" srcset="" />
            </div>

            <div className={classes.infoCardCategorie}>
              <p className={classes.nomProduitCardCategorie}>Nom du produit</p>
              <p className={classes.pStyleCateg}>Prix</p>
              <p className={classes.pStyleCateg}>Disponibilité</p>
              <a href="" className={classes.voirLeProduitStyleCateg}>
                Voir le produit
              </a>
              <form action="" className={classes.ajouterAuPanierCateg}>
                <button type="submit">Ajouter aux panier</button>
              </form>
            </div>
          </div>

          <div className={classes.cardCategorie}>
            <div className={classes.imageCardCategorie}>
              <img src="" alt="" srcset="" />
            </div>

            <div className={classes.infoCardCategorie}>
              <p className={classes.nomProduitCardCategorie}>Nom du produit</p>
              <p className={classes.pStyleCateg}>Prix</p>
              <p className={classes.pStyleCateg}>Disponibilité</p>
              <a href="" className={classes.voirLeProduitStyleCateg}>
                Voir le produit
              </a>
              <form action="" className={classes.ajouterAuPanierCateg}>
                <button type="submit">Ajouter aux panier</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
