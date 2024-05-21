"use client";
import { useState } from "react";
import BasicDetailIcon from "@components/ui/svg/formStepIcon/basicDetailIcon";
import styles from "./style.module.scss";
import EmploymentDetailIcon from "@components/ui/svg/formStepIcon/employmentDetailIcon";
import { Text } from "@styles/styledComponent";
import Link from "next/link";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import GuardIcon from "@components/ui/svg/guardIcon";
import BasicDetailStep from "./steps/basicDetailStep";
import { CheckLg } from "react-bootstrap-icons";
import EmploymentTypeStep from "./steps/employmentTypeStep";
import OtherDetailStep from "./steps/otherDetailStep";
import StepperContainer from "@components/container/stepperContainer";
import OtherDetailIcon from "@components/ui/svg/formStepIcon/otherDetailIcon";
import CreditCardReport from "./steps/creditCardReport";

const CreditScoreStepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  console.log("completed", completedSteps);
  return (
    <StepperContainer
      className={styles.stepperSection}
      label={"3 Simple Steps to get your Best Card Deals"}
    >
      <div className={styles.stepperFormSection}>
        {currentStep !== 4 && (
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
              <h4>Employment Type</h4>
            </div>
            <span></span>
            <div className={styles.stepBox}>
              <span
                className={currentStep === 3 ? styles.currentStep : styles.step}
              >
                <OtherDetailIcon />
              </span>
              <h4>Other Details</h4>
            </div>
          </div>
        )}
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
            <OtherDetailStep
              onSubmit={() => {
                setCompletedSteps((prev) => [...prev, 2]);
                setCurrentStep((prev) => prev + 1);
              }}
            />
          )}
          {currentStep === 4 && <CreditCardReport />}
        </div>
      </div>
      {currentStep !== 4 && (
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
      )}
    </StepperContainer>
  );
};

export default CreditScoreStepperForm;
