import { useEffect } from "react";
import classes from "./Comments.module.css";
import { useState } from "react";
import axios from "axios";
// import { useToken } from "../../../../Context/TokenContext/TokenContext";

export default function Comments() {
  const [avis, setAvis] = useState([]);
  // const { token, refreshToken } = useToken();
  useEffect(() => {
    const fetchAvis = async () => {
      const token = localStorage.getItem("token");
      try {
        console.log(token);
        const response = await axios.get(`http://localhost:9195/api/avis/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setAvis(response.data);
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des commentaires du produit:",
          error
        );
      }
    };

    fetchAvis();
  }, []);

  return (
    <div className={classes.Comments}>
      {avis.map((avi) => {
        return (
          <div className={classes.theComment} key={avi.id}>
            <div className={classes.infoProfil}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <p>{avi.utilisateur.nom}</p>
              <p>Date du commentaire</p>
              <p>Note 5/10</p>
            </div>
            <div className={classes.reviewProduct}>
              <p>{avi.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
