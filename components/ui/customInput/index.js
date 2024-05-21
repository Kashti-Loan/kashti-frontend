import { Input } from "@styles/styledComponent";
import styles from "./style.module.scss";

const CustomInput = (props) => {
  return (
    <div className={styles.inputContainer}>
      <Input type={props.type} placeholder={props.placeholder} />
      {props.placeholder && (
        <label
          style={{ display: props.displayLabel ? "inline-block" : "none" }}
        >
          {props.placeholder}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
