import CardsProductDashboard from "./CardsProductDashboard/CardsProductDashboard";
import classes from "./DashboardAdmin.module.css";
import AddProductForm from "../../forms/ProductForm/AddProductForm/AddProductForm";
import { useContext, useState } from "react";
import { AddProduitContext } from "../../Context/ProduitContext/AddProduitContext/AddProduitContext";
import DashboardFournisseur from "../DashboardFournisseur/DashboardFournisseur";
import FournisseurForm from "../../forms/FournisseurForm/FournisseurForm";
import DashboardImageProduit from "../DashboardImageProduit/DashboardImageProduit";
import ImageProduitForm from "../../forms/ImageProduitForm/ImageProduitForm";

export default function DashboardAdmin() {
  const { addProduit } = useContext(AddProduitContext);
  const [buttonChoiceAdmin, setButtonChoiceAdmin] =
    useState("liste de produit");
  function addProduct() {
    setButtonChoiceAdmin("add");
  }
  function productList() {
    setButtonChoiceAdmin("liste de produit");
  }
  function userList() {
    setButtonChoiceAdmin("liste des utilisateurs");
  }
  return (
    <div className={classes.DashboardAdmin}>
      {/* <div lclassName={classes.buttonsDashboard}>
                <button 
                    onClick={addProduct}
                    className={classes.buttonAddProduct}
                >
                    Ajouter un produit
                </button>
            </div> */}

      <div className={classes.cardDashboard}>
        <div className={classes.buttonsDashboard2}>
          <button
            onClick={productList}
            className={
              buttonChoiceAdmin === "liste de produit"
                ? classes.buttonDashBoardStyle
                : classes.buttonDashBoardStyle2
            }
          >
            liste de tous les produits
          </button>

          <button onClick={userList} className={classes.buttonDashBoardStyle2}>
            liste de tous les utilisateurs
          </button>
          <button
            onClick={addProduct}
            className={
              buttonChoiceAdmin === "add"
                ? classes.buttonDashBoardStyle
                : classes.buttonDashBoardStyle2
            }
          >
            Ajout de produits
          </button>
        </div>

        <div className={classes.cardsProductDashboard}>
          {buttonChoiceAdmin === "liste de produit" ? (
            <CardsProductDashboard />
          ) : buttonChoiceAdmin === "add" &&
            addProduit === "DashboardSousCategorie" ? (
            <DashboardSousCategorie />
          ) : // <SousCategorieForm/>
          // <ImageSousCategorieForm/>
          // <DashboardSousCategorie/>
          // <DashboardCategorie/>
          // <CategorieForm/>
          // <ImageCategorieForm/>
          // <DashboardImageProduit/>
          // <DashboardFournisseur />
          // <FournisseurForm/>
          buttonChoiceAdmin === "add" && addProduit === "SousCategorieForm" ? (
            <SousCategorieForm />
          ) : buttonChoiceAdmin === "add" && addProduit === "CategorieForm" ? (
            <CategorieForm />
          ) : buttonChoiceAdmin === "add" &&
            addProduit === "ImageProduitForm" ? (
            <ImageProduitForm />
          ) : buttonChoiceAdmin === "add" &&
            addProduit === "FournisseurForm" ? (
            <FournisseurForm />
          ) : buttonChoiceAdmin === "add" &&
            addProduit === "DashboardImageProduit" ? (
            // : buttonChoiceAdmin === "add" &&
            //   addProduit === "DashboardImageProduit" ? (
            //   <DashboardImageProduit />
            // )
            <DashboardImageProduit />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
