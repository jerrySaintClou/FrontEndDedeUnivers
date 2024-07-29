import classes from "./ImageProduitForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ImageProduitForm(){
    const imageProduitSchema = z.object({
		cheminImageProduit:z.string()
		});
  ;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(imageProduitSchema),
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
			    <label for="nomCategorie">Ajouter une image au produit</label>
			    <input 
				    type="text" 
				    placeholder="mettez url de votre image"
				    {...register("cheminImageProduit")}
                    id="cheminImageProduit"
				    className={
					    errors.cheminImageProduit?
					    classes.inputError:
					    classes.inputStyle
				    }
			    />
			    <p className={classes.errorStyle}>{errors.cheminImageProduit?.message}</p>
		    </div>
		
		    <button className={classes.buttonStyleContact}>Ajouter une image au produit</button>
        </form>
    )
}