"use client";
import { useState } from "react";
import BasicDetailIcon from "@components/ui/svg/formStepIcon/basicDetailIcon";
import styles from "./style.module.scss";
import EmploymentDetailIcon from "@components/ui/svg/formStepIcon/employmentDetailIcon";
import ThirdDetailIcon from "@components/ui/svg/formStepIcon/thirdDetailIcon";
import { Text } from "@styles/styledComponent";
import Link from "next/link";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import GuardIcon from "@components/ui/svg/guardIcon";
import BasicDetailStep from "./steps/basicDetailStep";
import { CheckLg } from "react-bootstrap-icons";
import EmploymentTypeStep from "./steps/employmentTypeStep";
import LoanDetailStep from "./steps/loanDetailStep";
import StepperContainer from "@components/container/stepperContainer";

const PersonalLoanStepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  return (
    <StepperContainer
      className={styles.stepperSection}
      label={"Apply in a few easy steps. Start now."}
      color={"#FBCAA4"}
      cornerColor={"#F79446"}
    >
      <div className={styles.stepperFormSection}>
        <div className={styles.formStepSection}>
          <div className={styles.stepBox}>
            <span
              className={`${
                completedSteps.includes(1)
                  ? styles.completed
                  : styles.notCompleted
              } ${currentStep === 1 ? styles.currentStep : styles.step}`}
            >
              {completedSteps.includes(1) ? (
                <CheckLg size={24} color={"var(--globalWhite)"} />
              ) : (
                <BasicDetailIcon />
              )}
            </span>
            <h4>Basic Details</h4>
          </div>
          <span></span>
          <div className={styles.stepBox}>
            <span
              className={`${
                completedSteps.includes(2)
                  ? styles.completed
                  : styles.notCompleted
              } ${currentStep === 2 ? styles.currentStep : styles.step}`}
            >
              {completedSteps.includes(2) ? (
                <CheckLg size={24} color={"var(--globalWhite)"} />
              ) : (
                <EmploymentDetailIcon />
              )}
            </span>
            <h4>Employment Type </h4>
          </div>
          <span></span>
          <div className={styles.stepBox}>
            <span
              className={`${
                currentStep === 3 ? styles.currentStep : styles.step
              }`}
            >
              <ThirdDetailIcon />
            </span>
            <h4>Loan Details</h4>
          </div>
        </div>
        <div className={styles.formContentSection}>
          {currentStep === 1 && (
            <BasicDetailStep
              onSubmit={() => {
                setCompletedSteps((prev) => [...prev, 1]);
                setCurrentStep((prev) => prev + 1);
              }}
            />
          )}
          {currentStep === 2 && (
            <EmploymentTypeStep
              onSubmit={() => {
                setCompletedSteps((prev) => [...prev, 2]);
                setCurrentStep((prev) => prev + 1);
              }}
            />
          )}
          {currentStep === 3 && (
            <LoanDetailStep
              onSubmit={() => {
                setCompletedSteps((prev) => [...prev, 2]);
                setCurrentStep((prev) => prev + 1);
              }}
            />
          )}
        </div>
      </div>
      <div className={styles.stepperDataInfoSection}>
        <Text className={styles.submitConsent}>
          By Submitting this form, You have read and agree to the{" "}
          <Link href={"#"}>Credit Report</Link>,
          <Link href={"#"}>Terms of Use</Link> and{" "}
          <Link href={"#"}>Privacy Policy</Link>
        </Text>
        <Text className={styles.dataSafetyInfo}>
          <DataSafetyIcon />
          <span>
            Your data’s safety is our top priority. It is secured by
            cutting-edge encryption and stringent privacy protocols.
          </span>
        </Text>
        <div className={styles.safetyFeatures}>
          <h4 className={styles.featureName}>
            <GuardIcon />
            <span>Data Security Assurance</span>
          </h4>
          <h4 className={styles.featureName}>
            <GuardIcon />
            <span>Encrypted Transmission</span>
          </h4>
          <h4 className={styles.featureName}>
            <GuardIcon />
            <span>Secure Storage</span>
          </h4>
          <h4 className={styles.featureName}>
            <GuardIcon />
            <span>Transparent Practices</span>
          </h4>
        </div>
      </div>
    </StepperContainer>
  );
};

export default PersonalLoanStepperForm;
