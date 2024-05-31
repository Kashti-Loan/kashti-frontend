import { Text } from "@styles/styledComponent";
import CommonTooltip from "../commonTooltip";
import styles from "./style.module.scss";
import ErrorWrapper from "../errorWrapper";

const InputTag = (props) => {
  return (
    <ErrorWrapper {...props}>
      <div className={styles.inputTag}>
        {props.label && (
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
        )}
        <div className={styles.inputBlock}>
          <input
            {...props}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
          />
        </div>
        {props.note && <Text className={styles.note}>{props.note}</Text>}
      </div>
    </ErrorWrapper>
  );
};

export default InputTag;
