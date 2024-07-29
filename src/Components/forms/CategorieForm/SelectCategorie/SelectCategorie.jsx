import classes from "./SelectCategorie.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SelectCategorie(){
    const categorieSchema = z.object({
		choiceCategorie:z.string()
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
			    <label for="selectCategorie">Nom de la catégorie</label>
			    <select 
                    name="" 
                    id="selectCategorie"
                    {...register("choiceCategorie")}
                >
                   <option value="">Choississez une catégorie</option>
                   {/* <option value="dog"></option> */}
                </select>
			    <p className={classes.errorStyle}>{errors.choiceCategorie?.message}</p>
		    </div>
        
		    <button className={classes.buttonStyleContact}>Ajouter une catégorie</button>
        </form>
    )
}