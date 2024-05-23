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

const EducationQualification = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
    props.onSubmit();
  };
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.radioGrpBlock}>
          <h3>Education Qualification</h3>
          <Text>Select your maximum qualification</Text>
          <div className={styles.radioGrpInner}>
            <RadioTextButton
              label="Undergraduate"
              checked={selectedValue === "Undergraduate"}
              onChange={() => handleChange("Undergraduate")}
            />
            <RadioTextButton
              label="Graduate"
              checked={selectedValue === "Graduate"}
              onChange={() => handleChange("Graduate")}
            />
            <RadioTextButton
              label="Post Graduate"
              checked={selectedValue === "post-graduate"}
              onChange={() => handleChange("post-graduate")}
            />
            <RadioTextButton
              label="Others"
              checked={selectedValue === "others"}
              onChange={() => handleChange("others")}
            />
            {/* <RadioButton
              label="Female"
              icon={GenderFemale}
              checked={selectedValue === "female"}
              onChange={() => handleChange("female")}
            /> */}
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

export default EducationQualification;
