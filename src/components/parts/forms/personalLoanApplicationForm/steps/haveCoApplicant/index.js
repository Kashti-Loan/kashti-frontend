"use client";
import { useState } from "react";

import styles from "./styles.module.scss";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioTextButton from "@components/ui/radioTextButton";
import CommonTooltip from "@components/ui/commonTooltip";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const HaveCoApplicant = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData } =
    usePersonalLoan();

  const handleChange = async (value) => {
    try {
      const response = await onAddCustomerData(
        { has_coApplicant: value },
        11,
        "Have Co Applicant"
      );
      value ? setCurrentStep(12) : setCurrentStep(14);
      setCompletedSteps((prev) => [...prev, 11]);
      return;
    } catch (error) {
      return error;
    }
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
              onChange={() => handleChange(true)}
            />
            <RadioTextButton
              label="No, I don’t have a Co-Applicant"
              onChange={() => handleChange(false)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default HaveCoApplicant;
