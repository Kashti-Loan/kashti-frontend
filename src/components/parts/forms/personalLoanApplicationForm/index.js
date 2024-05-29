"use client";
import { useEffect, useState } from "react";
import StepperContainer from "@components/container/stepperContainer";
import styles from "./style.module.scss";
import {
  BasicDetailStep,
  BusinessDetails,
  CoApplicantDetails,
  CommunicationAddress,
  CompanyDetails,
  EducationQualification,
  EmploymentDetails,
  HaveCoApplicant,
  IdentityVerifications,
  IncomeDetails,
  MoreCoApplicantDetails,
  OfficeDetails,
  PermanentAddress,
  PurposeLoan,
  TakePhoto,
} from "./steps";
import BasicDetailIcon from "@components/ui/svg/formStepIcon/basicDetailIcon";
import EmploymentDetailIcon from "@components/ui/svg/formStepIcon/employmentDetailIcon";
import IncomeDetailIcon from "@components/ui/svg/incomeDetailIcon";
import KycDetailIcon from "@components/ui/svg/kycDetailIcon";
import { ProgressBar } from "react-bootstrap";
import PopupPortal from "@components/parts/popups/popupPortal";
import AllSteps from "@components/parts/popups/allSteps";
import { ArrowLeftShort, ChevronDown } from "react-bootstrap-icons";

const PersonalLoanApplicationForm = ({
  currentStep,
  setCurrentStep,
  progress,
  setProgress,
  currentStepName,
  setCurrentStepName,
  currentTotalStep,
  setCurrentTotalStep,
  completedCurrentStep,
  setCompletedCurrentStep,
  completedSteps,
  onBack,
}) => {
  const [viewSteps, setViewSteps] = useState(false);
  return (
    <StepperContainer className={styles.personalLoanStepper} label={"Personal Loan"} color={"#FBCAA4"} cornerColor={"#F79446"}>
      <div className={styles.formStepSection}>
        <div className={styles.stepBox}>
          <span
            className={`${completedSteps.includes(1) ? styles.completed : styles.notCompleted} ${
              currentStep === 1 ? styles.currentStep : styles.step
            }`}
          >
            <BasicDetailIcon />
          </span>
          <h4>Basic Details</h4>
        </div>
        <span className={`${completedSteps.includes(1) && completedSteps.includes(2) ? styles.completedLine : styles.notCompletedLine}`}></span>
        <div className={styles.stepBox}>
          <span
            className={`${completedSteps.includes(3) ? styles.completed : styles.notCompleted} ${
              currentStep === 3 ? styles.currentStep : styles.step
            }`}
          >
            <IncomeDetailIcon />
          </span>
          <h4>Income Details</h4>
        </div>
        <span className={`${completedSteps.includes(3) && completedSteps.includes(4) ? styles.completedLine : styles.notCompletedLine}`}></span>
        <div className={styles.stepBox}>
          <span
            className={`${completedSteps.includes(5) ? styles.completed : styles.notCompleted} ${
              currentStep === 5 ? styles.currentStep : styles.step
            }`}
          >
            <EmploymentDetailIcon />
          </span>
          <h4>Employment Details</h4>
        </div>
        <span
          className={`${
            completedSteps.includes(6) &&
            completedSteps.includes(7) &&
            completedSteps.includes(8) &&
            completedSteps.includes(9) &&
            completedSteps.includes(10) &&
            completedSteps.includes(11) &&
            completedSteps.includes(12) &&
            completedSteps.includes(13)
              ? styles.completedLine
              : styles.notCompletedLine
          }`}
        ></span>
        <div className={styles.stepBox}>
          <span
            className={`${completedSteps.includes(14) ? styles.completed : styles.notCompleted} ${
              currentStep === 14 ? styles.currentStep : styles.step
            }`}
          >
            <KycDetailIcon />
          </span>
          <h4>KYC Details</h4>
        </div>
      </div>
      <div className={styles.backBox}>
        <button onClick={onBack}>
          <ArrowLeftShort /> <span>Back</span>
        </button>
      </div>
      <div className={styles.mobileFormStepSection}>
        <div className={styles.stepLabelSection}>
          <div className={styles.stepName}>
            <h4>
              {currentStepName} ({completedCurrentStep}/{currentTotalStep})
            </h4>
          </div>
          <div className={styles.viewAllSteps}>
            <button onClick={() => setViewSteps(true)}>View All Steps</button>
          </div>
        </div>
        <div className={styles.progressBar}>
          <ProgressBar now={progress} variant='success' />
        </div>
      </div>
      <div className={styles.formContentSection}>
        {currentStep === 1 && (
          <BasicDetailStep
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 1]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 2 && (
          <EducationQualification
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 2]);
              // setProgress((prev) => prev + 6);
              // setCurrentStepName("Income Details");
              // setCompletedCurrentStep(1);
            }}
          />
        )}
        {currentStep === 3 && (
          <IncomeDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 3]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 4 && (
          <PurposeLoan
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 4]);
              setProgress((prev) => prev + 6);
              // setCurrentStepName("Employment Details");
              // setCompletedCurrentStep(1);
              // setCurrentTotalStep(9);
            }}
          />
        )}
        {currentStep === 5 && (
          <EmploymentDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 5]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 6 && (
          <CommunicationAddress
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 6]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(3);
            }}
          />
        )}
        {currentStep === 7 && (
          <PermanentAddress
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 7]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(4);
            }}
          />
        )}
        {currentStep === 8 && (
          <OfficeDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 8]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(5);
            }}
          />
        )}
        {currentStep === 9 && (
          <CompanyDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 9]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(6);
            }}
          />
        )}
        {currentStep === 10 && (
          <BusinessDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 10]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(7);
            }}
          />
        )}
        {currentStep === 11 && (
          <HaveCoApplicant
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 11]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(8);
            }}
          />
        )}
        {currentStep === 12 && (
          <CoApplicantDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 12]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(9);
            }}
          />
        )}
        {currentStep === 13 && (
          <MoreCoApplicantDetails
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 13]);
              // setProgress((prev) => prev + 6);
              // setCurrentStepName("KYC Details");
              // setCompletedCurrentStep(1);
              // setCurrentTotalStep(3);
            }}
          />
        )}
        {currentStep === 14 && (
          <TakePhoto
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 14]);
              // setProgress((prev) => prev + 20);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 15 && (
          <IdentityVerifications
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 15]);
              setProgress((prev) => prev + 4);
              setCompletedCurrentStep(3);
            }}
          />
        )}
      </div>
      {viewSteps && (
        <PopupPortal display={viewSteps}>
          <div className='popupBox'>
            <AllSteps onClose={() => setViewSteps(false)} />
          </div>
        </PopupPortal>
      )}
    </StepperContainer>
  );
};

export default PersonalLoanApplicationForm;
