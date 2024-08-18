import { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import DescriptionProduct from "./DescriptionProduct/DescriptionProduct";
import SimilarProuct from "./SimilarProduct/SimilarProduct";
import CommentProduct from "./CommentProduct/CommentProduct";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function ProductDetail() {
    
    const idProduit = useParams();

    const [product, setProduct] = useState(null);
    
    const [imageProduits, setImageProduits] = useState([]);
    
    const [imageProduit, setImageProduit] = useState([]);

  useEffect(() => {
    // const fetchProduct = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:9195/api/produit/${idProduit.idProduit}`);
    //     setProduct(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log('Erreur lors de la récupération du produit:', error);
    //   }
    // };
    let t = [];
    const fetchImageProduit = async () => {
        try {
          const response = await axios.get(`http://localhost:9195/api/imageProduit/all`); 
          for(let i = 0; i < response.data.length;i++)
          {
            if(response.data[i].produit.id == idProduit.idProduit ){
                setProduct(response.data[i].produit);
                t.push(response.data[i])
                setImageProduit(response.data[i]);
            }
        }
        setImageProduits(t);
         
        //   if(response.data.)
          console.log(response.data);
        //   console.log(response.data.length);
          console.log("la valeur de imageProduits est de ");
          console.log(imageProduits);
          console.log("la valeur de t est de ");
          console.log(t);
          
        //   console.log(response.data.length);
        console.log("la valeur d'une seule imageProduit est de ");
        console.log(imageProduit);
          
        } catch (error) {
          console.log('Erreur lors de la récupération des image du produit:', error);
        }
      };


    // fetchProduct();
    fetchImageProduit();
  }, [idProduit]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

    const [buttonActive,setButtonActive] = useState(false);
    const [contentMenu,setContentMenu] = useState("");

    function activeDescription()
    {
        setButtonActive(!buttonActive);
        setContentMenu("description");
    }

    function backtoMenu()
    {
        setButtonActive(!buttonActive);
    }

    function activeSimilarProduct()
    {
        setButtonActive(!buttonActive);
        setContentMenu("produit similaire");
    }

    function activeComment()
    {
        setButtonActive(!buttonActive);
        setContentMenu("commentaire");
    }
    return(
        <div className={classes.productDetail}>
            <div className={classes.showProduct}>

                <div className={classes.imageProduct}>
                    <div className={classes.theImageProduct}>
                        <img src={imageProduit.cheminImageProduit} alt="" srcset="" />
                    </div>
                    <div className={classes.carousselProduct}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up"><path d="M8 6L12 2L16 6"/><path d="M12 2V22"/></svg>
                        </button>

                        <div className={classes.theCarousselProduct}>
                            <div className={classes.imagesCarousselProduct}>

                                {imageProduits.map((imageProduit)=>{
                                    return(
                                    <div className={classes.imageCaroussel}>
                                        <img src={imageProduit.cheminImageProduit} alt="" />
                                    </div>
                                    )
                                })}
                                {/* <div className={classes.imageCaroussel}>

                                </div>
                                <div className={classes.imageCaroussel}>

                                </div>
                                <div className={classes.imageCaroussel}>

                                </div>
                                <div className={classes.imageCaroussel}>

                                </div> */}
                           </div>
                        </div>
                
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
                        </button>

                
                    </div>
                </div>
                <div className={classes.menuProduct}>
                    {
                        product === undefined || product === null?
                        <></>:
                        <p className={classes.nomProduitStyle}>{product.nomProduit}</p>

                    }
                    {/* <p className={classes.pStyle}>{product.prix}€</p>
                    <p className={classes.pStyle}>{product.stock}</p> */}
                    <p className={classes.pStyle}>Note</p>
                    <p className={classes.pStyle}>Nombre de commentaires</p>
                    
                    <button className={classes.panierStyleLiens}>Ajouter aux panier</button>
                    <button className={classes.favorisStyleLiens}>Ajouter aux favoris</button>
                    <button className={classes.boutonDescriptionStyle} onClick={activeDescription}>Description</button>
                    <button className={classes.boutonStyleProduitSimi} onClick={activeSimilarProduct}>Produit similaire</button>
                    <button className={classes.boutonStyleComm} onClick={activeComment}>Commentaire</button>


                </div>
            </div>

            <div 
                className={buttonActive  ? classes.detailMenuOpen:classes.invisible}
            >
                <div className={classes.detailMenuContent}>
                    <button className={classes.retourButtonStyle} onClick={backtoMenu}>Retour</button>
                    {
                        contentMenu == "description" ? <DescriptionProduct/> 
                        : contentMenu == "produit similaire" ? <SimilarProuct/>:
                        contentMenu == "commentaire" ?  <CommentProduct/> : <></>
                    }
                </div>
            </div>
            
        </div>
    )

}