import { Text } from "@styles/styledComponent";
import CommonTooltip from "../commonTooltip";
import styles from "./style.module.scss";

const InputTag = (props) => {
  return (
    <div className={styles.inputTag}>
      <div className={styles.inputLabel}>
        <label>{props.label}</label>
        {props.tooltip && (
          <CommonTooltip
            id={props.name}
            content={props.tooltipContent}
            place={props.tootltipPlace || "right"}
          />
        )}
      </div>
      <div className={styles.inputBlock}>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
      {props.note && <Text className={styles.note}>{props.note}</Text>}
    </div>
  );
};

export default InputTag;
