import React, { useState } from 'react'
import classes from "./NavBar3.module.css"
import { Link } from 'react-router-dom';
import logoImage from "../../../assets/logo.png";

export default function NavBar3(){
    const [buttonClicked,setButtonCliked] = useState("aucun bouton activé");
    const [activeButton,setActiveButton] = useState(false);

    function SearchButtonActive()
    {
        setButtonCliked("recherche");
        setActiveButton(!activeButton);
    }

    function CompteButtonActive()
    {
        setButtonCliked("compte");
        setActiveButton(!activeButton);
    }

    function ShoppingCartButtonActive()
    {
        setButtonCliked("panier");
        setActiveButton(!activeButton);
    }

    function categorieButtonActive()
    {
        setButtonCliked("les catégories");
        setActiveButton(!activeButton);
    }


    function CategorieFormActive()
    {
        setButtonCliked("categorie");
    }


    function subCategorieFormActive()
    {
        setButtonCliked("sous-categorie");
    }


    function nameFormActive()
    {
        setButtonCliked("nom");
    }




    function toolsButtonsActive()
    {
        setButtonCliked("paramètre");
        setActiveButton(!activeButton);
    }
    const produits = JSON.parse(localStorage.getItem("produits")) || [];
    const nombreDeProduits = produits.length;
    let prixTotal = 0;
    console.log(nombreDeProduits)
    for(let i = 0; i < nombreDeProduits; i++)
    {
        prixTotal += produits[i].prix
    }
    return(
        <>
        <div className={classes.navBar}>
            <div className={classes.menuBurger}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="35" height="35" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round" class="lucide lucide-menu"
                >
                 <line x1="4" x2="20" y1="12" y2="12"/>
                 <line x1="4" x2="20" y1="6" y2="6"/>
                 <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            </div>
            <Link to="/" className={classes.logo}>
                <img src={logoImage} alt="" />
            </Link>
            <button 
                className=
                {
                    buttonClicked === "recherche" && activeButton === true || activeButton === false
                     || buttonClicked === "categorie" && activeButton === true
                     || buttonClicked === "sous-categorie" && activeButton === true
                     || buttonClicked === "nom" && activeButton === true ?
                    classes.boutonNav1Style : classes.invisible
                }
                onClick={SearchButtonActive} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    Recherche
            </button>

                <button 
                    className={
                        buttonClicked === "compte" && activeButton === true || activeButton === false ? classes.boutonNav1Style : classes.invisible
                        }
                        onClick={CompteButtonActive}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                    Compte
                </button>

                <button 
                    className={
                        buttonClicked === "panier" && activeButton === true || activeButton === false ? classes.boutonNav1Style : classes.invisible
                        }
                    onClick={ShoppingCartButtonActive}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                   panier
                </button>
{/* 
                <button 
                    className={
                        buttonClicked === "les catégories" && activeButton === true || activeButton === false ? classes.boutonNav1Style : classes.invisible
                    } 
                    onClick={categorieButtonActive}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-search"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27 22 19"/></svg>
                    Categories
                </button> */}

                <button 
                    className=
                    {
                        buttonClicked === "paramètre" && activeButton === true || activeButton === false ? classes.boutonNav1Style : classes.invisible
                    }
                    onClick={toolsButtonsActive}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                   Parametre
                </button>

{/* --------------------------------------------------------- Les boutons recherche ---------------------------------------------------- --  */}
    <button  
        
        className=
        {
            buttonClicked === "recherche" && activeButton === true ?  
            classes.boutonNav1Style:classes.invisible
        }
        onClick={CategorieFormActive}
    >
	    Par categorie
    </button>
<button 
    className=
        {
            buttonClicked === "recherche" && activeButton === true ?  
            classes.boutonNav1Style:classes.invisible
        }  
        onClick={subCategorieFormActive}
 >
   Par sous-categorie
</button>

<button 
   className=
    {
        buttonClicked === "recherche" && activeButton === true ?  
        classes.boutonNav1Style:classes.invisible
    }  
    onClick={nameFormActive}
>
     Par nom du produit
</button>


{/* --------------------------------------- Les formulaires de recherche ------------------------------------------- --  */}


<form  
    action="" 
    method="" 
    className=
    {
        buttonClicked === "categorie" && activeButton === true ?
          classes.formNavBarStyle:classes.invisible
    } 
>
        <input type="text" name="" placeholder="recherche par catégorie"/>
        <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
</form>

    <form  
        action="" 
        method="" 
        className=
        {
            buttonClicked === "sous-categorie" && activeButton === true ?
            classes.formNavBarStyle:classes.invisible
        } 
    >
       <input type="text" name="" placeholder="recherche par sous categorie"/>
       <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
</form>

<form  
    action="" 
    method="" 
    className=
    {
        buttonClicked === "nom" && activeButton === true ?
        classes.formNavBarStyle:classes.invisible
    } 
>
       <input type="text" name="" placeholder="rechercher par nom du produit"/>
       <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
</form>






{/* ------------------------------------------------- Les boutons Compte ---------------------------------------------------- --  */}
<Link  to={"/register"}
   id="boutonCategorie"
   className={buttonClicked === "compte" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}
>
	S'inscrire
</Link>
<Link to={"/login"}
    className={buttonClicked === "compte" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}  
 >
   Se connecter
</Link>








{/* ------------------------------------------------- Les boutons panier ---------------------------------------------------- --  */}
<p  
   id="boutonCategorie"
   className={buttonClicked === "panier" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}
>
    Nombre de produit : {nombreDeProduits}
</p>
<p 
    className={buttonClicked === "panier" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}  
 >
   Coût totale : {prixTotal}€
</p>

<Link
    to={"/shoppingCart"}
    className={buttonClicked === "panier" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}  
 >
   Voir le panier
</Link>



{/* ------------------------------------------------- les catégories ---------------------------------------------------- --  */}


<div
   className={buttonClicked === "les catégories" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}
>
        {/*------- la liste de tous les catégories --------------------*/}
</div>


  {/*------------------------------------ Les boutons Paramètre -------------------------------------  */}
<select  
   id="boutonCategorie"
   className={buttonClicked === "paramètre" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}
>
	<option value="normal">theme normal</option>
        <option value="dark">theme sombre</option>
</select>

<select 
    className={buttonClicked === "paramètre" && activeButton === true ?  classes.boutonNav1Style:classes.invisible}  
 >
  <option value="fr">français</option>
  <option value="eng">English</option>
  <option value="espn">Espagnole</option>
</select>
                 
        </div>
        <div className={classes.navBarCategorie}>
            <Link to="/categoryProduct/1" className={classes.boutonNav1Style}>
                Categorie1
            </Link>
            <Link to="/categoryProduct/2" className={classes.boutonNav1Style}>
                Categorie2
            </Link>
            <Link to="/categoryProduct/3" className={classes.boutonNav1Style}>
                Categorie3
            </Link>
            <Link to="/categoryProduct/4" className={classes.boutonNav1Style}>
                Categorie4
            </Link>
            
            <Link to="/categoryProduct/1" className={classes.boutonNav1Style}>
                tout les categories
            </Link>
        </div>
        </>
    )

}