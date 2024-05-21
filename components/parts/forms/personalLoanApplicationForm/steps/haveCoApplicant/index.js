"use client";
import { useState } from "react";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
// import RadioButton from "@components/ui/radioImageButton";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioTextButton from "@components/ui/radioTextButton";
import CommonTooltip from "@components/ui/commonTooltip";

const HaveCoApplicant = (props) => {
  const [selectedValue, setSelectedValue] = useState("yes");

  const handleChange = (value) => {
    setSelectedValue(value);
    props.onSubmit();
  };
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.radioGrpBlock}>
          <div>
            <h3>Do you have a Co-Applicant?</h3>
            <CommonTooltip
              id={"haveCoApplicant"}
              content={"Hello World"}
              place={"right"}
            />
          </div>
          <div className={styles.radioGrpInner}>
            <RadioTextButton
              label="Yes, Add Co-Applicant"
              checked={selectedValue === "yes"}
              onChange={() => handleChange("yes")}
            />
            <RadioTextButton
              label="No, I don’t have a Co-Applicant"
              checked={selectedValue === "no"}
              onChange={() => handleChange("no")}
            />
          </div>
        </div>
        {/* <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
          <button
            type="button"
            className="primaryBtn"
            onClick={() => props.onSubmit()}
          >
            Continue
          </button>
        </div> */}
      </form>
      {/* <Text className={styles.dataSafetyInfo}>
        <DataSafetyIcon />
        <span>
          Your data’s safety is our top priority. It is secured by cutting-edge
          encryption and stringent privacy protocols.
        </span>
      </Text> */}
    </div>
  );
};

export default HaveCoApplicant;
