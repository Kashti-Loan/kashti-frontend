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
  businessLoan,
  education,
  familyOccasion,
  homeBulding,
  homeRenovation,
  marriage,
  officeRenovation,
  others,
  personalCrisis,
  purchaseHousehold,
  travel,
  workingCapital,
} from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";

const PurposeLoan = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
    props.onSubmit();
  };
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.radioGrpBlock}>
          <h3>Purpose Of Loan</h3>
          <Text>Please select one out of the below options</Text>
          <div className={styles.radioGrpInner}>
            <RadioImageButton
              label="Home Building"
              icon={homeBulding}
              checked={selectedValue === "Home Building"}
              onChange={() => handleChange("Home Building")}
            />
            <RadioImageButton
              label="Home Renovation"
              icon={homeRenovation}
              checked={selectedValue === "Home Renovation"}
              onChange={() => handleChange("Home Renovation")}
            />
            <RadioImageButton
              label="Travel"
              icon={travel}
              checked={selectedValue === "Travel"}
              onChange={() => handleChange("Travel")}
            />
            <RadioImageButton
              label="Purchase of household"
              icon={purchaseHousehold}
              checked={selectedValue === "Purchase of household"}
              onChange={() => handleChange("Purchase of household")}
            />
            <RadioImageButton
              label="Education"
              icon={education}
              checked={selectedValue === "Education"}
              onChange={() => handleChange("Education")}
            />
            <RadioImageButton
              label="Occasion in Family"
              icon={familyOccasion}
              checked={selectedValue === "Occasion in Family"}
              onChange={() => handleChange("Occasion in Family")}
            />
            <RadioImageButton
              label="Business Use"
              icon={businessLoan}
              checked={selectedValue === "Business Use"}
              onChange={() => handleChange("Business Use")}
            />
            <RadioImageButton
              label="Office Renovation"
              icon={officeRenovation}
              checked={selectedValue === "Office Renovation"}
              onChange={() => handleChange("Office Renovation")}
            />
            <RadioImageButton
              label="Working Capital"
              icon={workingCapital}
              checked={selectedValue === "Working Capital"}
              onChange={() => handleChange("Working Capital")}
            />
            <RadioImageButton
              label="Marriage"
              icon={marriage}
              checked={selectedValue === "Marriage"}
              onChange={() => handleChange("Marriage")}
            />
            <RadioImageButton
              label="Personal Crisis"
              icon={personalCrisis}
              checked={selectedValue === "Personal Crisis"}
              onChange={() => handleChange("Personal Crisis")}
            />
            <RadioImageButton
              label="Others"
              icon={others}
              checked={selectedValue === "Others"}
              onChange={() => handleChange("Others")}
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

export default PurposeLoan;
