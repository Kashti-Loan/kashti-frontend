"use client";
import { useState } from "react";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";

const BasicDetailStep = (props) => {
  const [selectedValue, setSelectedValue] = useState("female");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.inputBlock}>
          <InputTag
            label="PAN Number*"
            type="text"
            name="pan"
            placeholder="A B C T Y 1 2 3 4 D"
            tooltip
            tooltipContent={"Learn why you are asked to enter your PAN Number "}
            note={"If incorrect PAN is provided, the loan will be rejected"}
          />
          <InputTag
            label="Date of Birth"
            type="date"
            name="dob"
            tooltip
            tooltipContent={"Hello World"}
          />
        </div>
        <div className={styles.radioGrpBlock}>
          <h3>Gender</h3>
          <div className={styles.radioGrpInner}>
            <RadioImageButton
              label="Male"
              icon={GenderMale}
              checked={selectedValue === "male"}
              onChange={() => handleChange("male")}
            />
            <RadioImageButton
              label="Female"
              icon={GenderFemale}
              checked={selectedValue === "female"}
              onChange={() => handleChange("female")}
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

export default BasicDetailStep;
