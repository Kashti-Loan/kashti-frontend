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
import { usePersonalLoan } from "@context/PersonalLoanContext";

const PurposeLoan = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData } =
    usePersonalLoan();

  async function onSubmit(data) {
    try {
      const response = await onAddCustomerData(
        { purposeOfLoan: data },
        4,
        "Employment Details"
      );
      setCurrentStep(5);
      setCompletedSteps((prev) => [...prev, 4]);
      return;
    } catch (error) {
      return error;
    }
  }

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
              onChange={() => onSubmit("Home Building")}
            />
            <RadioImageButton
              label="Home Renovation"
              icon={homeRenovation}
              onChange={() => onSubmit("Home Renovation")}
            />
            <RadioImageButton
              label="Travel"
              icon={travel}
              onChange={() => onSubmit("Travel")}
            />
            <RadioImageButton
              label="Purchase of household"
              icon={purchaseHousehold}
              onChange={() => onSubmit("Purchase of household")}
            />
            <RadioImageButton
              label="Education"
              icon={education}
              onChange={() => onSubmit("Education")}
            />
            <RadioImageButton
              label="Occasion in Family"
              icon={familyOccasion}
              onChange={() => onSubmit("Occasion in Family")}
            />
            <RadioImageButton
              label="Business Use"
              icon={businessLoan}
              onChange={() => onSubmit("Business Use")}
            />
            <RadioImageButton
              label="Office Renovation"
              icon={officeRenovation}
              onChange={() => onSubmit("Office Renovation")}
            />
            <RadioImageButton
              label="Working Capital"
              icon={workingCapital}
              onChange={() => onSubmit("Working Capital")}
            />
            <RadioImageButton
              label="Marriage"
              icon={marriage}
              onChange={() => onSubmit("Marriage")}
            />
            <RadioImageButton
              label="Personal Crisis"
              icon={personalCrisis}
              onChange={() => onSubmit("Personal Crisis")}
            />
            <RadioImageButton
              label="Others"
              icon={others}
              onChange={() => onSubmit("Others")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PurposeLoan;
