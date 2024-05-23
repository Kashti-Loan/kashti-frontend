import { Input, Select } from "@styles/styledComponent";
import styles from "./style.module.scss";
import CustomInput from "@components/ui/customInput";
import PhoneNumberInput from "@components/ui/phoneNumberInput";
import CustomSelect from "@components/ui/customSelect";
import { genderData, primaryBankData, residentialData } from "@utils/data";
import PopupPortal from "@components/parts/popups/popupPortal";
import { useEffect, useState } from "react";
import OtpVerfication from "@components/parts/popups/otpVerificaton";

const BasicDetailStep = (props) => {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <div className={styles.stepSection}>
      <form className={styles.applicationForm}>
        <div className={styles.personalDetailSection}>
          <div className={styles.inputBlock}>
            <div>
              <CustomInput type={"text"} placeholder="Name" />
            </div>
            <div>
              <CustomInput type={"email"} placeholder="Email ID" />
            </div>
            <div>
              <PhoneNumberInput />
            </div>
            <div>
              <CustomInput
                type={"date"}
                placeholder="Date of Birth"
                displayLabel
              />
            </div>
            <div>
              <CustomSelect
                placeholder="Gender*"
                displayLabel
                options={genderData}
              />
            </div>
            <div>
              <CustomInput type={"text"} placeholder="PAN Card" />
            </div>
            <div>
              <CustomInput type={"text"} placeholder="PIN Code" />
            </div>
            <div>
              <CustomSelect
                placeholder="Residential Type"
                displayLabel
                options={residentialData}
              />
            </div>
            <div>
              <CustomSelect
                placeholder="Primary Bank Account"
                displayLabel
                options={primaryBankData}
              />
            </div>
          </div>
        </div>
        <div className={styles.submitBtn}>
          <button
            type="button"
            className="primaryBtn"
            onClick={() => setOtpSent(true)}
          >
            Proceed and Verify
          </button>
        </div>
      </form>
      {otpSent && (
        <PopupPortal display={otpSent}>
          <div className="popupBox">
            <OtpVerfication onClick={props.onSubmit} />
          </div>
        </PopupPortal>
      )}
    </div>
  );
};

export default BasicDetailStep;
