import { Link, useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useToken } from "../../Context/TokenContext/TokenContext";
import axios from "axios";
// import TokenContext, {
//   useToken,
// } from "../../Context/TokenContext/TokenContext";
// import {DataProvider} from "../../Context/DataContext/DataContext";

export default function LoginForm() {
  const navigate = useNavigate();
  // const { token, setToken, refreshToken, setRefreshToken } =
  //   useContext(DataProvider);

  // const { setToken, setRefreshToken } = useToken();
  // const { accessToken, refreshToken } = useContext(TokenContext);

  const { setToken, setRefreshToken, token, refreshToken } = useToken();

  const loginSchema = z.object({
    username: z.string().email({ message: "Email incorrecte!" }),
    // password: z.string().min(8, {
    // 	message: "Mot de passe trop court! (Min. 6 caractères)",
    // }),
    password: z.string(),
    // .refine((value) => {
    //   return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$?!]).{8,}$/.test(
    //     value
    //   );
    // }, "Le mot de passe doit contenir au moins 8 caractères avec 2 majuscules, 2 chiffres et un de ces caractère spécial($, ? et !)."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function loginUser(data) {
    console.log("yolo");
    try {
      const response = await axios.post(
        "http://localhost:9195/api/utilisateur/connexion",
        data
      );
      console.log(response.data);
      setToken(response.data.BEARER);
      setRefreshToken(response.data.REFRESH);
      console.log("Token reçu:", token);
      console.log("refresh token reçu:", refreshToken);
      // Stocker le token dans le localStorage ou le state
      // localStorage.setItem("token", token);
      // localStorage.setItem("refresh-token", refreshToken);

      // navigate("/");
      // Mettre à jour le contexte et le localStorage
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  }

  return (
    <form
      className={classes.formulaireContact}
      onSubmit={handleSubmit(loginUser)}
    >
      <h1>Se connecter</h1>

      <div className={classes.inputDivStyle}>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("username")}
          className={errors.username ? classes.inputError : classes.inputStyle}
        />
        <p className={classes.errorStyle}>{errors.username?.message}</p>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="phone">Mot de passe</label>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
          className={errors.password ? classes.inputError : classes.inputStyle}
        />
        <p className={classes.errorStyle}>{errors.password?.message}</p>
        <a href="">Mot de passe oublié</a>
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
      </div>

      <button className={classes.buttonStyleContact}>Se connecter</button>
      <div className={classes.goToConnection}>
        <p>Pas encore inscrit ?</p>
        <Link to={"/register"}>S'inscrire</Link>
      </div>
    </form>
  );
}
