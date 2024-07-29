import classes from "./DashboardSousCategorie.module.css";

export default function DashboardSousCategorie() {
  return (
    <div className={classes.dashboardSousCategorie}>
      <p className={classes.pDashboardStyle}>....</p>
      <button>Ajouter un nouveau type</button>
      <p className={classes.pDashboardStyle}>ou</p>
      <p className={classes.pDashboardStyle}>Selectionner un type existant</p>
    </div>
  );
}
