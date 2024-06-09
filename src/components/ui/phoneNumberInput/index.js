import styles from "./style.module.scss";
import CustomInput from "../customInput";
import IndiaFlagIcon from "../svg/indiaFlag";
import InputTag from "../inputTag";

const PhoneNumberInput = () => {
  return (
    <div className={styles.phoneNumberField}>
      <span>
        <IndiaFlagIcon />
      </span>
      <InputTag
        label="Mobile Number*"
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        tooltip
        tooltipContent={"Use your mobile number to track your loan application status."}
      />
    </div>
  );
};

export default PhoneNumberInput;
