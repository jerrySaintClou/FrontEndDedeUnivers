import { Link } from "react-router-dom"
import classes from "./Footer.module.css"
export default function Footer() {
    return(
        <footer>
            <div className={classes.newsletter}>
                <h3>Newsletters</h3>
                <form action="" method="" className={classes.newsletterForm}>
                    <input type="text" placeholder="votre email" id="inputFooter" className={classes.inputFooter}/>
                    <input type="submit" value="envoyer" id="submitFooter" className={classes.submitFooter}/>
                </form>
                <br/><br/>
            </div>
            
            <div className={classes.liensFooterDiv}>
                    <a href="#">A propos</a>
                    <Link to={"/contact"}>Contacter nous</Link>
                    <a href="#">Politique de confidentialité</a>
                    <a href="#">RGPD</a>
            </div>

        </footer>
    )
}