import { Select } from "@styles/styledComponent";
import styles from "./styles.module.scss";
import { selectArrow } from "@public/assets";

const CustomSelect = (props) => {
  return (
    <div className={styles.selectContainer}>
      <label
        htmlFor={props.name}
        style={{ display: props.displayLabel ? "inline-block" : "none" }}
      >
        {props.placeholder}
      </label>
      <Select
        defaultValue={props.defaultValue ? props.defaultValue : ""}
        style={{ backgroundImage: `url(${selectArrow.src})` }}
        onChange={props.onChange}
      >
        {!props.defaultValue && (
          <option value={""} disabled={true}>
            {props.displayLabel ? "" : props.placeholder}
          </option>
        )}
        {props.options &&
          props.options.map((item, i) => (
            <option value={item.name} key={i}>
              {item.name}
            </option>
          ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
