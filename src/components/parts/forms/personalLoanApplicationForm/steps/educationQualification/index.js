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
  const { setCurrentStep, setCompletedSteps, onAddCustomerData } =
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
              onChange={() => onSubmit("Undergraduate")}
            />
            <RadioTextButton
              label="Graduate"
              onChange={() => onSubmit("Graduate")}
            />
            <RadioTextButton
              label="Post Graduate"
              onChange={() => onSubmit("post-graduate")}
            />
            <RadioTextButton
              label="Others"
              onChange={() => onSubmit("others")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationQualification;
