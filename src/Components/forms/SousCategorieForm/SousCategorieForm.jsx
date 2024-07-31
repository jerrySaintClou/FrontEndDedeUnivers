import classes from "./SousCategorieForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

export default function SousCategorieForm() {
  const sousCategorieSchema = z.object({
    nomSousCategorie: z
      .string()
      .min(2, {
        message: "Le nom de la sous categorie doit contenir au moins 2 lettres",
      })
      .regex(
        /^[a-zA-Z\s]*$/,
        "Le nom de la sous catégorie ne doit contenir que des lettres et des espaces"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(sousCategorieSchema),
  });

  async function addSousCategorie(data) {
    try {
      const response = await axios.post(
        "http://localhost:8084/api/sousCategorie/ajout/1",
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
      onSubmit={handleSubmit(addSousCategorie)}
    >
      <div className={classes.inputDivStyle}>
        <label for="nomSousCategorie">Ajouter une sous catégorie</label>
        <input
          type="text"
          placeholder="Confirmation de mot de passe"
          {...register("nomSousCategorie")}
          id="nomSousCategorie"
          className={
            errors.nomSousCategorie ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>{errors.nomSousCategorie?.message}</p>
      </div>

      <button className={classes.buttonStyleContact}>
        Ajouter une sous catégorie
      </button>
    </form>
  );
}
