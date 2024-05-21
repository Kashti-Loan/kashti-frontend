import PhoneNumberInput from "@components/ui/phoneNumberInput";
import styles from "./style.module.scss";
import CustomInput from "@components/ui/customInput";

const BasicDetailStep = (props) => {
  return (
    <div className={styles.stepSection}>
      <form>
        <div className={styles.inputBlock}>
          <PhoneNumberInput />
          <div>
            <CustomInput type="text" placeholder="Current Pincode" />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button type="button" className="primaryBtn" onClick={props.onSubmit}>
            Get OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetailStep;
