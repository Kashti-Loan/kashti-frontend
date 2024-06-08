"use client";
import { useEffect, useState } from "react";
import { Input, Select } from "@styles/styledComponent";
import styles from "./style.module.scss";
import PopupPortal from "@components/parts/popups/popupPortal";
import SuccessApplicationPopup from "@components/parts/popups/SuccessApplicationPopup";
import CustomInput from "@components/ui/customInput";
import CustomSelect from "@components/ui/customSelect";
import { genderData } from "@utils/data";

const CreditCardApplicationForm = () => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <form className={styles.applicationForm}>
        <div className={styles.personalDetailSection}>
          <h3>Personal Detail</h3>
          <div className={styles.inputBlock}>
            <CustomInput
              type={"text"}
              placeholder="Full Name*"
            />
            <CustomSelect
              placeholder={"Gender*"}
              displayLabel
              options={genderData}
            />
            <CustomInput
              type={"text"}
              placeholder="Father's Name*"
            />
            <CustomInput
              type={"date"}
              displayLabel
              placeholder="Date of Birth (As per your PAN)*"
            />
            <CustomInput type={"email"} placeholder="Personal Email ID*" />
          </div>
        </div>
        <div className={styles.personalDetailSection}>
          <h3>Residential Details</h3>
          <div className={styles.inputBlock}>
            <CustomInput type={"text"} placeholder="Residence Type*" />
            <CustomInput
              type={"text"}
              placeholder="Flat no / House No / Building Name*"
            />
            <CustomInput type={"text"} placeholder="Street Name*" />
            <CustomInput
              type={"text"}
              placeholder="Landmark / Near by Place*"
            />
            <CustomInput type={"text"} placeholder="Current Pincode*" />
            <CustomInput type={"text"} placeholder="City*" />
          </div>
        </div>
        <div className={styles.submitBtn}>
          <button
            type="button"
            className="primaryBtn"
            onClick={() => setSuccess(true)}
          >
            Submit
          </button>
        </div>
      </form>
      {success && (
        <PopupPortal display={success}>
          <div className="popupBox">
            <SuccessApplicationPopup />
          </div>
        </PopupPortal>
      )}
    </>
  );
};

export default CreditCardApplicationForm;
