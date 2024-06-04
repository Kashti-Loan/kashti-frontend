import { Text } from "@styles/styledComponent";
import CommonTooltip from "../commonTooltip";
import styles from "./style.module.scss";
import ErrorWrapper from "../errorWrapper";
import IndiaFlagIcon from "../svg/indiaFlag";

const MoneyPhoneInputTag = (props) => {
  return (
    <ErrorWrapper {...props}>
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
            type={"number"}
            {...props}
            name={props.name}
            placeholder={props.placeholder}
          />
          {props.phoneNumber ? (
            <span>
              <IndiaFlagIcon />
            </span>
          ) : (
            <span>{props.initial}</span>
          )}
        </div>
        {props.note && <Text className={styles.note}>{props.note}</Text>}
      </div>
    </ErrorWrapper>
  );
};

export default MoneyPhoneInputTag;
