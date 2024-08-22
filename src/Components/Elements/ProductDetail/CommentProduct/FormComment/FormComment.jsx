import classes from "./FormComment.module.css";

export default function FormComment() {
  return (
    <form className={classes.formComment}>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Ecrire un commentaire"
      ></textarea>
      <input type="number" placeholder="Mettez une note sur 10" />
      <button type="submit">Ajouter</button>
    </form>
  );
}
