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
import LoanDetails from "./steps/loanDetails";
import { usePathname } from "next/navigation";

const PersonalLoanJouneyApplicationForm = ({
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
  const isBrowser = () => typeof window !== "undefined";
  const pathname = usePathname();
  const isJourneyOne = pathname.includes(
    "personal-loan-questionairre-journey1"
  );

  useEffect(() => {
    scrollToTop();
  }, [currentStep]);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StepperContainer
      className={styles.personalLoanStepper}
      label={"Personal Loan"}
      color={"#FBCAA4"}
      cornerColor={"#F79446"}
    >
      <div className={styles.formStepSection}>
        <div className={styles.stepBox}>
          <span
            className={`${
              completedSteps.includes(1)
                ? styles.completed
                : styles.notCompleted
            } ${currentStep === 1 ? styles.currentStep : styles.step}`}
          >
            <BasicDetailIcon />
          </span>
          <h4>Basic Details</h4>
        </div>
        <span
          className={`${
            completedSteps.includes(1) && completedSteps.includes(2)
              ? styles.completedLine
              : styles.notCompletedLine
          }`}
        ></span>
        <div className={styles.stepBox}>
          <span
            className={`${
              completedSteps.includes(3)
                ? styles.completed
                : styles.notCompleted
            } ${currentStep === 3 ? styles.currentStep : styles.step}`}
          >
            <IncomeDetailIcon />
          </span>
          <h4>Income Details</h4>
        </div>
        <span
          className={`${
            completedSteps.includes(3) && completedSteps.includes(4)
              ? styles.completedLine
              : styles.notCompletedLine
          }`}
        ></span>
        <div className={styles.stepBox}>
          <span
            className={`${
              completedSteps.includes(5)
                ? styles.completed
                : styles.notCompleted
            } ${currentStep === 5 ? styles.currentStep : styles.step}`}
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
            className={`${
              completedSteps.includes(14)
                ? styles.completed
                : styles.notCompleted
            } ${currentStep === 14 ? styles.currentStep : styles.step}`}
          >
            <KycDetailIcon />
          </span>
          <h4>KYC Details</h4>
        </div>
      </div>
      {/* <div className={styles.backBox}>
        <button onClick={onBack}>
          <ArrowLeftShort /> <span>Back</span>
        </button>
      </div> */}
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
          <ProgressBar now={progress} variant="success" />
        </div>
      </div>
      <div className={styles.formContentSection}>
        {currentStep === 1 && (
          <BasicDetailStep
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 1]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 2 && (
          <EmploymentDetails
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 3]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 3 && (
          <IncomeDetails
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 3]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(2);
            }}
          />
        )}
        {currentStep === 4 && (
          <CommunicationAddress
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 6]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(3);
            }}
          />
        )}
        {currentStep === 5 && (
          <PermanentAddress
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 7]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(4);
            }}
          />
        )}
        {currentStep === 6 && (
          <OfficeDetails
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 8]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(5);
            }}
          />
        )}
        {currentStep === 7 && (
          <LoanDetails
            isJourneyOne={isJourneyOne}
            onSubmit={() => {
              setCurrentStep((prev) => prev + 1);
              setCompletedSteps((prev) => [...prev, 8]);
              // setProgress((prev) => prev + 6);
              // setCompletedCurrentStep(5);
            }}
          />
        )}
      </div>
      {viewSteps && (
        <PopupPortal display={viewSteps}>
          <div className="popupBox">
            <AllSteps
              currentTotalStep={currentTotalStep}
              completedCurrentStep={completedCurrentStep}
              currentStepName={currentStepName}
              currentStep={currentStep}
              onClose={() => setViewSteps(false)}
            />
          </div>
        </PopupPortal>
      )}
    </StepperContainer>
  );
};

export default PersonalLoanJouneyApplicationForm;
