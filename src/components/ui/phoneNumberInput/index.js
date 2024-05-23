import styles from "./style.module.scss";
import CustomInput from "../customInput";

const PhoneNumberInput = () => {
  return (
    <div className={styles.phoneNumberField}>
      <span>+91</span>
      <CustomInput
        type="text"
        name="mobile_number"
        placeholder="Mobile Number"
      />
    </div>
  );
};

export default PhoneNumberInput;
