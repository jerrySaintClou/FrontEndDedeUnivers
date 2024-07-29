import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import classes from "./AddProductForm.module.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AddProduitContext } from "../../../Context/ProduitContext/AddProduitContext/AddProduitContext";

export default function AddProductForm() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { toggleDashboardImageProduit } = useContext(AddProduitContext);
  const addProductSchema = z.object({
    nomProduit: z
      .string()
      .min(2, { message: "Le nom du produit doit contenir au moins 2 lettres" })
      .regex(
        /^[a-zA-Z\s]*$/,
        "Le nom ne doit contenir que des lettres et des espaces"
      ),
    description: z
      .string()
      .min(6, { message: "la description doit avoir au moin 6 lettre" }),
    prix: z
      .number()
      .positive(/*{ message: "le stock ne peut être négative " }*/),
    // image:z.string({message:"l'image doit être une chaine de caractère "}),
    stock: z
      .number()
      .positive(/*{ message: "le stock ne peut être négative " }*/),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addProductSchema),
  });

  async function addProduct(data) {
    try {
      const response = await axios.post(
        "http://localhost:8084/api/produit/ajout",
        data
      );
      console.log("Produit ajouté avec succès:", response.data);
      toggleDashboardImageProduit();
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
    }
  }

  return (
    <form
      className={classes.formulaireContact}
      onSubmit={handleSubmit(addProduct)}
    >
      <div className={classes.inputDivStyle}>
        <label for="nomProduit">nom du produit</label>
        <input
          type="text"
          placeholder="nom du produit"
          {...register("nomProduit")}
          className={
            errors.nomProduit ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>{errors.nomProduit?.message}</p>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="description">Description</label>
        <textarea
          placeholder="description du produit"
          {...register("description")}
          className={
            errors.nomProduit ? classes.inputError : classes.inputStyle
          }
        ></textarea>
        <p className={classes.errorStyle}>{errors.description?.message}</p>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="prix">Prix</label>
        <input
          type="number"
          placeholder="prix du produit"
          {...register("prix", { valueAsNumber: true })}
          className={errors.prix ? classes.inputError : classes.inputStyle}
        />
        <p className={classes.errorStyle}>{errors.prix?.message}</p>
      </div>

      {/*         

		<div className={classes.inputDivStyle}>
			<label for="imageProduit">image du produit</label>
			<input 
				type="text" 
				placeholder="image du produit"
				{...register("imageProduit")}
				className={
					errors.imageProduit?
					classes.inputError:
					classes.inputStyle
				}
			/>
			<p className={classes.errorStyle}>{errors.imageProduit?.message}</p>
		</div> */}

      <div className={classes.inputDivStyle}>
        <label for="stock">stock du produit</label>
        <input
          type="number"
          placeholder="stock du produit"
          {...register("stock", { valueAsNumber: true })}
          className={
            errors.imageProduit ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>{errors.stock?.message}</p>
      </div>

      <button className={classes.buttonStyleContact}>Ajouter</button>
    </form>
  );
}
