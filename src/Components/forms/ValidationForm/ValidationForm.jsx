import classes from "./ValidationForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ValidationForm() {
  const navigate = useNavigate();
  const registerSchema = z.object({
    code: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function loginUser(data) {
    console.log("yolo");
    try {
      const response = await axios.post(
        "http://localhost:9195/api/utilisateur/activation",
        data
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  }

  return (
    <>
      <form
        className={classes.formulaireContact}
        onSubmit={handleSubmit(loginUser)}
      >
        <h1>S'inscrire</h1>
        <div className={classes.nameUser}>
          <div className={classes.nameStyle}>
            <label for="name">code</label>
            <input
              type="text"
              placeholder="code"
              {...register("code")}
              className={
                errors.nom
                  ? classes.nameinputStyleError
                  : classes.nameinputStyle
              }
            />
            <p className={classes.errorStyle}>{errors.code?.message}</p>
          </div>
        </div>

        <button className={classes.buttonStyleContact}>Valider</button>
        {/* <div className={classes.goToConnection}>
          <p>Déja inscrit ?</p>
          <Link to={"/login"}>Se connecter</Link>
        </div> */}
      </form>
    </>
  );
}
