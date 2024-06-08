"use client";
import { useState } from "react";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioTextButton from "@components/ui/radioTextButton";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const EducationQualification = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData, loanData } =
    usePersonalLoan();

  async function onSubmit(data) {
    try {
      const response = await onAddCustomerData(
        { educational_qualification: data },
        2,
        "Educational Qualification"
      );
      setCurrentStep(3);
      setCompletedSteps((prev) => [...prev, 2]);
      return;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.radioGrpBlock}>
          <h3>Education Qualification</h3>
          <Text>Select your maximum qualification</Text>
          <div className={styles.radioGrpInner}>
            <RadioTextButton
              label="Undergraduate"
              checked={loanData?.educational_qualification == "Undergraduate"}
              onChange={() => onSubmit("Undergraduate")}
            />
            <RadioTextButton
              label="Graduate"
              checked={loanData?.educational_qualification == "Graduate"}
              onChange={() => onSubmit("Graduate")}
            />
            <RadioTextButton
              label="Post Graduate"
              checked={loanData?.educational_qualification == "post-graduate"}
              onChange={() => onSubmit("post-graduate")}
            />
            <RadioTextButton
              label="Others"
              checked={loanData?.educational_qualification == "others"}
              onChange={() => onSubmit("others")}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="educational-qualification"
              id="educational-qualification"
              onClick={() => onSubmit(loanData?.educational_qualification)}
              type="button"
              className="primaryBtn"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationQualification;
