import React from "react";
import styles from "./style.module.scss";

export default function ErrorWrapper(props) {
  return (
    <div className={styles.errorWrapper}>
      {props.children}
      {props?.error && (
        <div className={styles.errorBox}>
          <p className={styles.error}>{props.error}</p>
        </div>
      )}
    </div>
  );
}
