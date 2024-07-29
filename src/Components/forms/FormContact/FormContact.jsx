import { Link } from "react-router-dom";
import classes from "./FormContact.module.css";

export default function FormContact() {
  return (
    <div className={classes.formulaireContact}>
      <div className={classes.nameUser}>
        <div className={classes.nameStyle}>
          <label for="firstName">Prenom</label>
          <input
            type="text"
            placeholder="Prenom"
            className={classes.nameinputStyle}
          />
        </div>

        <div className={classes.nameStyle}>
          <label for="name">Nom</label>
          <input
            type="text"
            placeholder="Nom"
            className={classes.nameinputStyle}
          />
        </div>
      </div>

      <div className={classes.inputDivStyle}>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          className={classes.inputStyle}
        />
      </div>

      <div className={classes.inputDivStyle}>
        <label for="phone">Téléphone</label>
        <input
          type="tel"
          placeholder="Téléphone"
          className={classes.inputStyle}
        />
      </div>

      <div className={classes.inputDivStyle}>
        <label for="phone">Message</label>
        <textarea placeholder="Ecrivez vos messages"></textarea>
      </div>

      <button className={classes.buttonStyleContact}>Envoyer</button>
    </div>
  );
}
