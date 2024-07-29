import classes from "./Gch2.module.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
export default function Gch2() {
  return (
    <div className={classes.Gch2}>
      <div className={classes.carouselGch2}>
        <button className={classes.boutonGGch2}>G</button>
        <div className={classes.cardsAllGch2}>
          <div className={classes.ensembleDivGch2}>
            <div className={classes.divCardGch2}>
              <Link className={classes.cardGch2}>
                <div className={classes.imageCardGch2}>
                  <img
                    // src="https://americarprestige.com/wp-content/uploads/2013/02/location-ferrari-812-superfast-1.jpg"
                    src=""
                    alt=""
                  />
                </div>
                <div className={classes.infoCardGch2}>
                  <p></p>
                </div>
              </Link>
              {/* <Link className={classes.cardGch2}>
                <div className={classes.imageCardGch2}>
                  <img
                    src="https://americarprestige.com/wp-content/uploads/2013/02/location-ferrari-812-superfast-1.jpg"
                    alt=""
                  />
                </div>
                <div className={classes.infoCardGch2}>
                  <p></p>
                </div>
              </Link> */}
              {/* <Link className={classes.cardGch2}>
                <div className={classes.imageCardGch2}>
                  <img
                    src="https://americarprestige.com/wp-content/uploads/2013/02/location-ferrari-812-superfast-1.jpg"
                    alt=""
                  />
                </div>
                <div className={classes.infoCardGch2}>
                  <p></p>
                </div>
              </Link> */}
            </div>
          </div>
        </div>

        <button className={classes.boutonDGch2}>D</button>
      </div>

      <div className={classes.ensembleBouton}>
        <button className={classes.boutonStyleActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
        <button className={classes.boutonStyleNoActiveGch2}></button>
      </div>
    </div>
  );
}
