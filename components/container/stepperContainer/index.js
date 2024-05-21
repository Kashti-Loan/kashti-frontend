import styles from "./style.module.scss";

const StepperContainer = ({
  children,
  label,
  className,
  color,
  cornerColor,
}) => {
  return (
    <div className={`${styles.stepperContainer} ${className || ""}`}>
      <div
        className={styles.stepperLabel}
        style={{ backgroundColor: color || "#bddcc5" }}
      >
        <span
          className={styles.leftCorner}
          style={{ backgroundColor: cornerColor || "#71B382" }}
        ></span>
        <span
          className={styles.rightCorner}
          style={{ backgroundColor: cornerColor || "#71B382" }}
        ></span>
        <h4>{label}</h4>
      </div>
      {children}
    </div>
  );
};

export default StepperContainer;
