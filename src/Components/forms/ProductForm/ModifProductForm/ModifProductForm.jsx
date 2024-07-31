import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import classes from "./ModifProductForm.module.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

export default function ModifProductForm() {
  const [produits, setProduits] = useState([]);
  //   const parametres = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/api/produit/1`);
        setProduits(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
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

  function addProduct(data) {
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8084/api/produit/ajout",
    //     data
    //   );
    //   console.log("Produit ajouté avec succès:", response.data.id);
    //   toggleDashboardImageProduit();
    //   modifIdProduitAdd(12);
    // } catch (error) {
    //   console.error("Erreur lors de l'ajout du produit:", error);
    // }
    console.log("hello");
  }

  return (
    <form
      className={classes.formulaireContact}
      onSubmit={handleSubmit(addProduct)}
    >
      <div className={classes.inputDivStyle}>
        <label for="nomProduit">Nom du produit: {produits.nomProduit}</label>
        <input
          type="text"
          placeholder={`${produits.nomProduit}`}
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
