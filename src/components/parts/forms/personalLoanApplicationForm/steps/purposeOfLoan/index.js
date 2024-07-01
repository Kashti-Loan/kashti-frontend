"use client";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

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
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    isLoading,
  } = usePersonalLoan();

  async function onSubmit(data) {
    try {
      const response = await onAddCustomerData(
        { purposeOfLoan: data },
        4,
        "Employment Details"
      );
      setCurrentStep(5);
      setCompletedSteps((prev) => [...prev, 4]);
      fbq("trackCustom", "PurposeDetailsFilled");
      console.log("PurposeDetailsFilled");

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
              checked={loanData?.purposeOfLoan == "Home Building"}
              onChange={() => onSubmit("Home Building")}
            />
            <RadioImageButton
              label="Home Renovation"
              icon={homeRenovation}
              checked={loanData?.purposeOfLoan == "Home Renovation"}
              onChange={() => onSubmit("Home Renovation")}
            />
            <RadioImageButton
              label="Travel"
              icon={travel}
              checked={loanData?.purposeOfLoan == "Travel"}
              onChange={() => onSubmit("Travel")}
            />
            <RadioImageButton
              label="Purchase of household"
              icon={purchaseHousehold}
              checked={loanData?.purposeOfLoan == "Purchase of household"}
              onChange={() => onSubmit("Purchase of household")}
            />
            <RadioImageButton
              label="Education"
              icon={education}
              checked={loanData?.purposeOfLoan == "Education"}
              onChange={() => onSubmit("Education")}
            />
            <RadioImageButton
              label="Occasion in Family"
              icon={familyOccasion}
              checked={loanData?.purposeOfLoan == "Occasion in Family"}
              onChange={() => onSubmit("Occasion in Family")}
            />
            <RadioImageButton
              label="Business Use"
              icon={businessLoan}
              checked={loanData?.purposeOfLoan == "Business Use"}
              onChange={() => onSubmit("Business Use")}
            />
            <RadioImageButton
              label="Office Renovation"
              icon={officeRenovation}
              checked={loanData?.purposeOfLoan == "Office Renovation"}
              onChange={() => onSubmit("Office Renovation")}
            />
            <RadioImageButton
              label="Working Capital"
              icon={workingCapital}
              checked={loanData?.purposeOfLoan == "Working Capital"}
              onChange={() => onSubmit("Working Capital")}
            />
            <RadioImageButton
              label="Marriage"
              icon={marriage}
              checked={loanData?.purposeOfLoan == "Marriage"}
              onChange={() => onSubmit("Marriage")}
            />
            <RadioImageButton
              label="Personal Crisis"
              icon={personalCrisis}
              checked={loanData?.purposeOfLoan == "Personal Crisis"}
              onChange={() => onSubmit("Personal Crisis")}
            />
            <RadioImageButton
              label="Others"
              icon={others}
              checked={loanData?.purposeOfLoan == "Others"}
              onChange={() => onSubmit("Others")}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="purpose"
              data-event="PurposeDetailsFilled"
              id="purpose-details"
              onClick={() => onSubmit(loanData?.purposeOfLoan)}
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

export default PurposeLoan;
