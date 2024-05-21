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
              <CustomInput type={"text"} placeholder="First Name" />
            </div>
            <div>
              <CustomInput type={"text"} placeholder="Last Name" />
            </div>
            <div>
              <PhoneNumberInput />
            </div>
            <div>
              <CustomInput type={"email"} placeholder="Email ID" />
            </div>
            <div>
              <CustomInput
                type={"date"}
                placeholder="Date of Birth"
                displayLabel
              />
            </div>
            <div>
              <CustomInput type={"text"} placeholder="City" />
            </div>
            <div>
              <fieldset>
                <legend>Gender:</legend>

                <div>
                  <input
                    type="radio"
                    id="Male"
                    name="Male"
                    value="Male"
                    checked
                  />
                  <label for="huey">Male</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="Female"
                    name="Female"
                    value="Female"
                  />
                  <label for="dewey">Female</label>
                </div>
              </fieldset>
            </div>
            <div>
              <CustomInput type={"text"} placeholder="PIN Code" />
            </div>
            <div>
              <CustomInput type={"text"} placeholder="PAN Number" />
            </div>
          </div>
        </div>
        <div className={styles.submitBtn}>
          <button type="button" className="primaryBtn" onClick={props.onSubmit}>
            Verify and Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetailStep;
