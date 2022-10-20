import { useEffect } from "react";
import classes from "./notification.module.scss";

export function Notification(props) {
  const { args } = props;
  return (
    <div className={classes.notification}>
      <div
        className={args.type === "success" ? classes.success : classes.error}
      >
        <p>{args.message}</p>
      </div>
    </div>
  );
}
