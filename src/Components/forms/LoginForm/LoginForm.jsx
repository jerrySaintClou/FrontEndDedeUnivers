import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
	const loginSchema = z.object({
		email: z.string().email({ message: "Email incorrecte!" }),
		// password: z.string().min(8, {
		// 	message: "Mot de passe trop court! (Min. 6 caractères)",
		// }),
		password:z.string().refine((value) => {
			return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$?!]).{8,}$/.test(value);
		  }, 'Le mot de passe doit contenir au moins 8 caractères avec 2 majuscules, 2 chiffres et un de ces caractère spécial($, ? et !).')
	})



	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm({
		resolver: zodResolver(loginSchema),
	  });

	function loginUser() {
		console.log("yolo");
	  }


return(
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
				{...register("email")}
				className={
					errors.email?
					classes.inputError:
					classes.inputStyle
				}
			/>
			<p className={classes.errorStyle}>{errors.email?.message}</p>
		</div>


		<div className={classes.inputDivStyle}>
			<label for="phone">Mot de passe</label>
			<input 
				type="password" 
				placeholder="Mot de passe" 
				{...register("password")}
				className={
					errors.password?
					classes.inputError:
					classes.inputStyle
				}
			/>
			<p className={classes.errorStyle}>{errors.password?.message}</p>
            <a href="">Mot de passe oublié</a>
		</div>

		<div className={classes.captchaStyle}>
			<div className={classes.captchaCheckbox}>
				<input type="checkbox" />
				<label>I'm not a robot</label>
			</div>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/640px-RecaptchaLogo.svg.png" alt="" />
		</div>

		<button className={classes.buttonStyleContact}>Se connecter</button>
        <div className={classes.goToConnection}>
            <p>Pas encore inscrit ?</p>
            <Link to={"/register"}>S'inscrire</Link>
        </div>
	</form>
)
}