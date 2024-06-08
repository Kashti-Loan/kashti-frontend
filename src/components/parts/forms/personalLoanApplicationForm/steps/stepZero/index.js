"use client";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { useState } from "react";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";

const StepZero = (props) => {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.inputBlock}>
          <InputTag
            label="Full Name*"
            type="text"
            name="name"
            placeholder="Enter Name as per PAN"
            tooltip
            tooltipContent={"Your full name as per PAN!"}
          />
          <MoneyPhoneInputTag
            label="Mobile Number*"
            type="text"
            name="mobile_number"
            placeholder="Mobile Number"
            initial="+91"
          />
        </div>
        <div className={`${styles.inputBlock} ${styles.consentBlock}`}>
          <label className="material-checkbox">
            <input type="checkbox" name={"consent"} id={"consent"} />
            <span className="checkmark"></span>
            <span>
              By submitting this form, you have read and agreed to the{" "}
              <Link href="#">Credit Report</Link>,{" "}
              <Link href="#">Terms of Use</Link> and{" "}
              <Link href="#">Privacy Policy</Link>
            </span>
          </label>
        </div>
        <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
          <button
            data-testid="login-detail"
            data-event="LoginDetailsFilled"

            id="login-detail"
            type="button"
            className="primaryBtn"
            onClick={() => setOtpSent(true)}
          >
            Verify and Proceed
          </button>
        </div>
      </form>
      <Text className={styles.dataSafetyInfo}>
        <DataSafetyIcon />
        <span>
          Your data’s safety is our top priority. It is secured by cutting-edge
          encryption and stringent privacy protocols.
        </span>
      </Text>
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

export default StepZero;
