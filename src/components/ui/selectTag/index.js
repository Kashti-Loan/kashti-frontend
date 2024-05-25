import { Text } from "@styles/styledComponent";
import CommonTooltip from "../commonTooltip";
import styles from "./style.module.scss";
import { selectArrow } from "@public/assets";
import ErrorWrapper from "../errorWrapper";

const SelectTag = (props) => {
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
          <select
            {...props}
            name={props.name}
            style={{ backgroundImage: `url(${selectArrow.src})` }}
          >
            {props.options.map((item, i) => (
              <option value={item.value} key={i}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        {props.note && <Text className={styles.note}>{props.note}</Text>}
      </div>
    </ErrorWrapper>
  );
};

export default SelectTag;
