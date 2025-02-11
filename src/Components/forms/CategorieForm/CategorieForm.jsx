import classes from "./CategorieForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

export default function CategorieForm() {
  const categorieSchema = z.object({
    nomCategorie: z
      .string()
      .min(2, {
        message: "Le nom de la categorie doit contenir au moins 2 lettres",
      })
      .regex(
        /^[a-zA-Z\s]*$/,
        "Le nom  de la catégorie ne doit contenir que des lettres et des espaces"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorieSchema),
  });

  async function addCategorie(data) {
    try {
      const response = await axios.post(
        "http://localhost:8084/api/categorie/ajout",
        data
      );
      console.log("categorie ajouté avec succès:", response.data.id);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la categorie:", error);
    }
  }

  return (
    <form
      className={classes.formulaireContact}
      onSubmit={handleSubmit(addCategorie)}
    >
      {/* <h1>Choissisez une catégorie</h1> */}
      {/* 		
		<div className={classes.inputDivStyle}>
			<label for="nomCategorie">Nom de la catégorie</label>
			<select name="pets" id="pet-select">
                <option value="">Catégorie</option>
                <option value="dog"></option>
            </select>
			<p className={classes.errorStyle}>{errors.email?.message}</p>
		</div> */}

      {/* <h1>OU</h1> */}

      <div className={classes.inputDivStyle}>
        <label for="nomCategorie">Ajouter une catégorie</label>
        <input
          type="text"
          placeholder="Ecrivez la catégorie"
          {...register("nomCategorie")}
          id="nomCategorie"
          className={
            errors.nomCategorie ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>{errors.nomCategorie?.message}</p>
      </div>

      <button className={classes.buttonStyleContact}>
        Ajouter une catégorie
      </button>
    </form>
  );
}
