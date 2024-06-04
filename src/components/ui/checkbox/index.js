import React from "react";
import "./style.scss";

const Checkbox = (props) => {
  return (
    <label className="material-checkbox">
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled}
        checked={props.checked}
        // {...props.checkFormikProps}
        // value={props.checkValue}
      />
      <span className="checkmark"></span>
      {props.label}
    </label>
  );
};

export default Checkbox;
