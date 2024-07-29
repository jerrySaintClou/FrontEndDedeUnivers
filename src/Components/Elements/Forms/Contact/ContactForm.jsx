import classes from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <>
      <form action="" className={classes.formContact}>
        <div className={classes.inputGroup}>
          <label htmlFor="">Nom</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Prenom</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea name="" id=""></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}
