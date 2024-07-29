import classes from "./ShoppingCartElement.module.css";

export default function ShoppingCartElement() {
  return (
    <div>
      <h1 className={classes.titrePanierPStyle}>Panier</h1>
      <div className={classes.ensemble}>
        <div className={classes.lePanier}>
          <div className={classes.leProduit}>
            <div className={classes.imageProduit}>
              <img src="" alt="" />
            </div>

            <div className={classes.infoProduit}>
              <p className={classes.infoStyle}>
                <span className={classes.spanNomPanier}>Nom du produit:</span>{" "}
                Produit1
              </p>
              <p className={classes.infoStyle}>
                <span className={classes.spanNomPanier}>Prix du produit:</span>{" "}
                45€
              </p>

              <form action="" className={classes.ajoutPanier}>
                <input
                  type="number"
                  min="1"
                  name=""
                  id=""
                  placeholder="qté:1"
                />
                <button type="submit">valider</button>
              </form>
              <p className={classes.infoStyle}>
                <span className={classes.spanNomPanier}>Prix Quantiter:</span>{" "}
                45€
              </p>

              <form action="" className={classes.poubellStyle}>
                <button type="submit" className={classes.SupprimerStyle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className={classes.leProduit}>
            <div className={classes.imageProduit}>
              <img src="" alt="" />
            </div>

            <div className={classes.infoProduit}>
              <p className={classes.infoStyle}>
                <span className={classes.spanNomPanier}>Nom du produit:</span>{" "}
                Produit1
              </p>
              <p className={classes.infoStyle}>
                <span className={classes.spanNomPanier}>Prix du produit:</span>{" "}
                45€
              </p>

              <form action="" className={classes.ajoutPanier}>
                <input
                  type="number"
                  min="1"
                  name=""
                  id=""
                  placeholder="qté:1"
                />
                <button type="submit">valider</button>
              </form>

              <p className={classes.infoStyle}>
                <span className={classes.spanNomPanier}>Prix Quantiter:</span>{" "}
                45€
              </p>

              <form action="" className={classes.poubellStyle}>
                <button type="submit" className={classes.SupprimerStyle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={classes.recapitulatif}>
          <p className={classes.titreStyle}>Recapitulatif de votre panier</p>
          <div className={classes.recapDiv}>
            <p className={classes.pStyle}>Total produit:</p>
            <p className={classes.pStyle}>2</p>
          </div>

          <div className={classes.recapDiv}>
            <p className={classes.pStyle}>Nombre de produit differents:</p>
            <p className={classes.pStyle}>4</p>
          </div>

          <div className={classes.recapDiv}>
            <p className={classes.pStyle}>Total TTC:</p>
            <p className={classes.pStyle}>34€</p>
          </div>
          <form action="" className={classes.valideCommande}>
            <button type="submit" className={classes.commandeStyle}>
              Valider ma commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
