import { Link, useNavigate } from "react-router-dom";
import classes from "./FormRegister.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

export default function FormRegister() {
  const navigate = useNavigate();

  const registerSchema = z.object({
    nom: z
      .string()
      .min(2, { message: "Le nom doit contenir au moins 2 lettres" })
      .regex(
        /^[a-zA-Z\s]*$/,
        "Le nom ne doit contenir que des lettres et des espaces"
      ),
    // prenom: z
    //   .string()
    //   .min(2, { message: "Le prenom doit contenir au moins 2 lettres" })
    //   .regex(
    //     /^[a-zA-Z\s]*$/,
    //     "Le prenom ne doit contenir que des lettres et des espaces"
    //   ),
    email: z.string().email({ message: "Email incorrecte!" }),
    // joursNaissance: z.string(),
    // moisNaissance: z.string(),
    // reponseQuestion: z
    //   .string()
    //   .min(2, { message: "La reponse doit contenir au moins 2 lettres" })
    //   .regex(
    //     /^[a-zA-Z\s]*$/,
    //     "La reponse ne doit contenir que des lettres et des espaces"
    //   ),
    mdp: z.string(),
    // .refine((value) => {
    //   return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$?!]).{8,}$/.test(
    //     value
    //   );
    // }, "Le mot de passe doit contenir au moins 8 caractères avec 2 majuscules, 2 chiffres et un de ces caractère spécial($, ? et !)."),
    // confirmMotDePasse: z.string().refine((value) => {
    //   return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$?!]).{8,}$/.test(
    //     value
    //   );
    // }, "Le mot de passe doit contenir au moins 8 caractères avec 2 majuscules, 2 chiffres et un de ces caractère spécial($, ? et !)."),
  });
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Les mot de passes sont differents",
  //   path: ["confirmPassword"],
  // })
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
        "http://localhost:9195/api/utilisateur/inscription",
        data
      );
      console.log(response.data);
      // setToken(response.data.BEARER);
      // setRefreshToken(response.data.REFRESH);
      // console.log("Token reçu:", token);
      // Stocker le token dans le localStorage ou le state
      // localStorage.setItem("token", token);
      // localStorage.setItem("refresh-token", refreshToken);

      // Mettre à jour le contexte et le localStorage
      navigate("/activation");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  }

  return (
    <form
      className={classes.formulaireContact}
      onSubmit={handleSubmit(loginUser)}
    >
      <h1>S'inscrire</h1>
      <div className={classes.nameUser}>
        {/* <div className={classes.nameStyle}>
          <label for="firstName">Prenom</label>
          <input
            type="text"
            placeholder="Prenom"
            {...register("prenom")}
            className={
              errors.prenom
                ? classes.nameinputStyleError
                : classes.nameinputStyle
            }
          />
          <p className={classes.errorStyle}>{errors.prenom?.message}</p>
        </div> */}

        <div className={classes.nameStyle}>
          <label for="name">Nom</label>
          <input
            type="text"
            placeholder="Nom"
            {...register("nom")}
            className={
              errors.nom ? classes.nameinputStyleError : classes.nameinputStyle
            }
          />
          <p className={classes.errorStyle}>{errors.nom?.message}</p>
        </div>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={errors.email ? classes.inputError : classes.inputStyle}
        />
        <p className={classes.errorStyle}>{errors.email?.message}</p>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="phone">Mot de passe</label>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("mdp")}
          className={errors.mdp ? classes.inputError : classes.inputStyle}
        />
        <p className={classes.errorStyle}>{errors.mdp?.message}</p>
      </div>
      {/* 
      <div className={classes.inputDivStyle}>
        <label for="phone">Confirmation de mot de passe</label>
        <input
          type="password"
          placeholder="Confirmation de mot de passe"
          {...register("confirmMotDePasse")}
          className={
            errors.confirmMotDePasse ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>
          {errors.confirmMotDePasse?.message}
        </p>
      </div> */}

      {/* <div className={classes.dateNaissance}>
        <p className={classes.pDateNaissanceStyle}>Date naissance</p>
        <div className={classes.dateNaissanceDiv}>
          <div className={classes.dateNaissanceOption}>
            <label htmlFor="joursNaissance">Jours</label>
            <select name="" id="joursNaissance" {...register("joursNaissance")}>
              <option value="">1</option>
            </select>
          </div>

          <div className={classes.dateNaissanceOption}>
            <label htmlFor="moisNaissance">Mois</label>
            <select name="" id="moisNaissance" {...register("moisNaissance")}>
              <option value="">Janvier</option>
            </select>
          </div>

          <div className={classes.dateNaissanceOption}>
            <label htmlFor="anneeNaissance">Année</label>
            <select name="" id="anneeNaissance" {...register("anneeNaissance")}>
              <option value="">1950</option>
            </select>
          </div>
        </div>
      </div> */}
      {/* 
      <div className={classes.inputDivStyle}>
        <label for="questions">Questions Pour vous</label>
        <select name="" id="questions" className={classes.questionStyle}>
          <option value="">Choississez une question</option>
          <option value="">Quel est votre plat favories</option>
          <option value="">Quelle est votre série préférer</option>
          <option value="">Quel est votre film préférer</option>
        </select>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="phone">Ecrivez une réponse a la question</label>
        <input
          type="text"
          placeholder="Ecrivez une réponse à la question que vous avez choisit"
          {...register("reponseQuestion")}
          className={
            errors.mdp ? classes.inputError : classes.inputStyle
          }
        />
        <p className={classes.errorStyle}>{errors.mdp?.message}</p>
      </div>

      <div className={classes.captchaStyle}>
        <div className={classes.captchaCheckbox}>
          <input type="checkbox" />
          <label>I'm not a robot</label>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/640px-RecaptchaLogo.svg.png"
          alt=""
        />
      </div> */}

      <button className={classes.buttonStyleContact}>S'incrire</button>
      <div className={classes.goToConnection}>
        <p>Déja inscrit ?</p>
        <Link to={"/login"}>Se connecter</Link>
      </div>
    </form>
  );
}
