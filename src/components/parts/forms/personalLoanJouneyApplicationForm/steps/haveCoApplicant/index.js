"use client";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

import styles from "./styles.module.scss";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioTextButton from "@components/ui/radioTextButton";
import CommonTooltip from "@components/ui/commonTooltip";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { useRouter } from "next/navigation";
import { routesConstant } from "@utils/routesConstant";

const HaveCoApplicant = (props) => {
  const router = useRouter();
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    isLoading,
  } = usePersonalLoan();

  const handleChange = async (value) => {
    try {
      const response = await onAddCustomerData(
        { has_coApplicant: value },
        11,
        "Have Co Applicant"
      );
      if (value === true) {
        setCurrentStep(12);
      } else {
        fbq("track", "SubmitApplication");
        router.replace(routesConstant.RECOMMENDED_PERSONAL_LOAN);
      }
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
              content={
                "Required information in the presence of a co-applicant for your loan."
              }
              place={"right"}
            />
          </div>
          <div className={styles.radioGrpInner}>
            <RadioTextButton
              label="No, I don't have a Co-Applicant"
              checked={loanData?.has_coApplicant == false}
              onChange={() => handleChange(false)}
            />
            <RadioTextButton
              label="Yes, Add Co-Applicant"
              checked={loanData?.has_coApplicant == true}
              onChange={() => handleChange(true)}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="have-co-applicant"
              data-event="HaveCoApplicantOrNotFilled"
              id="have-co-applicant"
              onClick={() => handleChange(loanData?.has_coApplicant)}
              type="button"
              className="primaryBtn"
              style={{ opacity: isLoading ? 0.6 : 1 }}
            >
              {isLoading && (
                <Spinner size="sm" animation="border" variant="light" />
              )}
              {isLoading ? "Updating Data..." : "Continue"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HaveCoApplicant;
