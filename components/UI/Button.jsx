import classes from "./button.module.scss";

export default function Button(props) {
  return <button className={classes.btn}>{props.children}</button>;
}
