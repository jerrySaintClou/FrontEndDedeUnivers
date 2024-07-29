import classes from "./ImageSousCategorieForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ImageSousCategorieForm(){
    
    const imageSousCategorieSchema = z.object({
		cheminImageSousCategorie:z.string()
		});
  ;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(imageSousCategorieSchema),
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
			    <label for="nomCategorie">Ajouter une image au SousCategorie</label>
			    <input 
				    type="text" 
				    placeholder="mettez url de votre image"
				    {...register("cheminImageSousCategorie")}
                    id="cheminImageSousCategorie"
				    className={
					    errors.cheminImageSousCategorie?
					    classes.inputError:
					    classes.inputStyle
				    }
			    />
			    <p className={classes.errorStyle}>{errors.cheminImageSousCategorie?.message}</p>
		    </div>
		
		    <button className={classes.buttonStyleContact}>Ajouter une image au SousCategorie</button>
        </form>
    )
}