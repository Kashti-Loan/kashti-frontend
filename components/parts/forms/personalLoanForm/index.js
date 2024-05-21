"use client";
import { useEffect, useState } from "react";
import StepperContainer from "@components/container/stepperContainer";
import styles from "./style.module.scss";
import { StepZero } from "./steps";
import BasicDetailIcon from "@components/ui/svg/formStepIcon/basicDetailIcon";
import { CheckLg } from "react-bootstrap-icons";
import EmploymentDetailIcon from "@components/ui/svg/formStepIcon/employmentDetailIcon";
import ThirdDetailIcon from "@components/ui/svg/formStepIcon/thirdDetailIcon";
import IncomeDetailIcon from "@components/ui/svg/incomeDetailIcon";
import KycDetailIcon from "@components/ui/svg/kycDetailIcon";
import { ProgressBar } from "react-bootstrap";
import PopupPortal from "@components/parts/popups/popupPortal";
import MobileFilter from "@components/parts/popups/mobileFilterPopup";
import AllSteps from "@components/parts/popups/allSteps";

const PersonalLoanForm = () => {
  return (
    <StepperContainer
      className={styles.personalLoanStepper}
      label={"Personal Loan"}
      color={"#FBCAA4"}
      cornerColor={"#F79446"}
    >
      <div className={styles.mobileHeading}>
        <h2>Personal Loan</h2>
      </div>
      <div className={styles.formContentSection}>
        <StepZero
        // onSubmit={() => {
        //   setCurrentStep((prev) => prev + 1);
        //   setCompletedSteps((prev) => [...prev, 0]);
        //   setProgress(6);
        // }}
        />
      </div>
    </StepperContainer>
  );
};

export default PersonalLoanForm;
