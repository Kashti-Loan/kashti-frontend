import { Text } from "@styles/styledComponent";
import CommonTooltip from "../commonTooltip";
import styles from "./style.module.scss";
import ErrorWrapper from "../errorWrapper";
import IndiaFlagIcon from "../svg/indiaFlag";
import { DatePicker } from "@mui/x-date-pickers";

const DatePickerInputTag = (props) => {
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
        <DatePicker
          {...props}
          label=""
          onKeyDown={(e) => e.preventDefault()}
          onFocus={(e) => (e.target.readOnly = true)}
          fullWidth={true}
          variant="standard"
        />
        {props.note && <Text className={styles.note}>{props.note}</Text>}
      </div>
    </ErrorWrapper>
  );
};

export default DatePickerInputTag;
