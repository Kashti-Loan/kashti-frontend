"use client";
import { useState } from "react";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import {
  GenderFemale,
  GenderMale,
  daughter,
  father,
  mother,
  son,
  spouse,
} from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import SelectTag from "@components/ui/selectTag";
import CommonTooltip from "@components/ui/commonTooltip";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";

const MoreCoApplicantDetails = (props) => {
  const [selectedValue, setSelectedValue] = useState("Spouse");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className={styles.formSection}>
      <form>
        <div>
          <h3>Tell us more about Co-Applicant Details</h3>
          <CommonTooltip
            id={"haveCoApplicant"}
            content={"Hello World"}
            place={"right"}
          />
        </div>
        <div className={styles.inputBlock}>
          <MoneyPhoneInputTag
            label="Mobile Number"
            type="text"
            name="mobile_number"
            placeholder="9675845672"
            initial="+91"
          />
          <InputTag label="Personal Email" type="email" name="personal_email" />
        </div>
        <div className={styles.radioGrpBlock}>
          <h3>Relation with Co-Applicant*</h3>
          <div className={styles.radioGrpInner}>
            <RadioImageButton
              label="Spouse"
              icon={spouse}
              checked={selectedValue === "Spouse"}
              onChange={() => handleChange("Spouse")}
            />
            <RadioImageButton
              label="Mother"
              icon={mother}
              checked={selectedValue === "Mother"}
              onChange={() => handleChange("Mother")}
            />
            <RadioImageButton
              label="Father"
              icon={father}
              checked={selectedValue === "Father"}
              onChange={() => handleChange("Father")}
            />
            <RadioImageButton
              label="Son"
              icon={son}
              checked={selectedValue === "Son"}
              onChange={() => handleChange("Son")}
            />
            <RadioImageButton
              label="Daughter"
              icon={daughter}
              checked={selectedValue === "Daughter"}
              onChange={() => handleChange("Daughter")}
            />
          </div>
        </div>
        <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
          <button
            type="button"
            className="primaryBtn"
            onClick={() => props.onSubmit()}
          >
            Continue
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
    </div>
  );
};

export default MoreCoApplicantDetails;
