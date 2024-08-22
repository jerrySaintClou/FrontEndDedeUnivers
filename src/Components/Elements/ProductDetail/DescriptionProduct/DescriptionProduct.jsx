import { useContext } from "react";
import { MonContexte } from "../ProductDetail";
import classes from "./DescriptionProduct.module.css";

export default function DescriptionProduct() {
  const { description } = useContext(MonContexte);
  return (
    <div>
      <h1 className={classes.titleDescription}>Description</h1>
      <p className={classes.theDescription}>{description}</p>
    </div>
  );
}
