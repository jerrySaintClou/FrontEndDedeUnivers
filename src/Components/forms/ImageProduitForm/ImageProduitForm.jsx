import classes from "./ImageProduitForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

export default function ImageProduitForm() {
  const imageProduitSchema = z.object({
    cheminImageProduit: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(imageProduitSchema),
  });

  async function addImageProduit(data) {
    try {
      const response = await axios.post(
        "http://localhost:8084/api/imageProduit/ajout/5",
        data
      );
      console.log("Produit ajouté avec succès:", response.data.id);
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
    }
  }

  return (
    <form
      className={classes.formulaireContact}
      onSubmit={handleSubmit(addImageProduit)}
    >
      <div className={classes.inputDivStyle}>
        <label for="nomCategorie">Ajouter une image au produit</label>
        <input
          type="text"
          placeholder="mettez url de votre image"
          {...register("cheminImageProduit")}
          id="cheminImageProduit"
          className={
            errors.cheminImageProduit ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>
          {errors.cheminImageProduit?.message}
        </p>
      </div>

      <button className={classes.buttonStyleContact}>
        Ajouter une image au produit
      </button>
    </form>
  );
}
