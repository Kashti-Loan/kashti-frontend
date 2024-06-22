"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Input, Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import SelectTag from "@components/ui/selectTag";
import InputRange from "@components/ui/inputRange";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const IncomeDetails = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData, loanData } =
    usePersonalLoan();
  const { isJourneyOne } = props;

  const BasicSchema = Yup.object().shape({
    monthly_income: Yup.string().required("Monthly salary is required."),
  });

  const defaultValues = {
    monthly_income: loanData?.monthly_income || "",
  };

  const methods = useForm({
    resolver: yupResolver(BasicSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  async function onSubmit(data) {
    try {
      const response = await onAddCustomerData(
        data,
        isJourneyOne ? 3 : 5,
        "Income Details"
      );
      setCurrentStep(isJourneyOne ? 4 : 6);
      setCompletedSteps((prev) => [...prev, isJourneyOne ? 3 : 5]);
      fbq("trackCustom", "IncomeDetailsFilled");
      fbq("track", "StartTrial");
      console.log("IncomeDetailsFilled");

      return;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBlock}>
            <Controller
              name="monthly_income"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <MoneyPhoneInputTag
                  {...field}
                  label="Monthly Income*"
                  type="text"
                  name="monthly_income"
                  placeholder="20,000"
                  initial="₹"
                  note="Income entered must be verified by your bank"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="income-details"
              data-event="IncomeDetailsFilled"
              id="income-details"
              type="submit"
              className="primaryBtn income-details"
            >
              {isSubmitting ? "Updating Data..." : "Continue"}
            </button>
          </div>
        </form>
      </FormProvider>
      <Text className={styles.dataSafetyInfo}>
        <DataSafetyIcon />
        <span>
          Your data’s safety is our top priority. It is secured by cutting-edge
          encryption and stringent privacy protocols.
        </span>
      </Text>
    </div>
  );
};

export default IncomeDetails;
