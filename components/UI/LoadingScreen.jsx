import classes from "./loading_screen.module.scss";

export default function LoadingScreen() {
  return (
    <div className="pgContain">
      <div className="loading-screen">
        <div className={classes.example}>
          <div className={classes.block}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
