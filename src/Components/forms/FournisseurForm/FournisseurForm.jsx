import classes from "./FournisseurForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FournisseurForm(){
    const categorieSchema = z.object({
		nomFournisseur:z.string()
		.min(2, { message: "Le nom du fournisseur doit contenir au moins 2 lettres" })
		.regex(/^[a-zA-Z\s]*$/, 'Le nom  du fournisseur ne doit contenir que des lettres et des espaces'),
        paysDOrigineFournisseur:z.string()
		.min(2, { message: "Le pays d'origine du fournisseur doit contenir au moins 2 lettres" })
		.regex(/^[a-zA-Z\s]*$/, "Le pays d'origine du fournisseur ne doit contenir que des lettres et des espaces"),
		});
  ;

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorieSchema),
  });

  
  function loginUser() {
    console.log("yolo");
  }

    return(
        <form 
		className={classes.formulaireContact}
		onSubmit={handleSubmit(loginUser)}
	>

<div className={classes.inputDivStyle}>
			<label for="nomFournisseur">Ajouter le nom du fournisseur</label>
			<input 
				type="text" 
				placeholder="Ecrivez le nom du fournisseur"
				{...register("nomFournisseur")}
                id="nomFournisseur"
				className={
					errors.nomFournisseur?
					classes.inputError:
					classes.inputStyle
				}
			/>
			<p className={classes.errorStyle}>{errors.nomFournisseur?.message}</p>
		</div>


        <div className={classes.inputDivStyle}>
			<label for="paysDOrigineFournisseur">Mettez le pays d'origine du fournisseur</label>
			<input 
				type="text" 
				placeholder="Ecrivez le pays d'origine du fournisseur"
				{...register("paysDOrigineFournisseur")}
                id="paysDOrigineFournisseur"
				className={
					errors.paysDOrigineFournisseur?
					classes.inputError:
					classes.inputStyle
				}
			/>
			<p className={classes.errorStyle}>{errors.paysDOrigineFournisseur?.message}</p>
		</div>

		<button className={classes.buttonStyleContact}>Ajouter un fournisseur</button>
        </form>
    )
}