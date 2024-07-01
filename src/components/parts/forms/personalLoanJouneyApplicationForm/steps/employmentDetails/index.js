"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Spinner } from "react-bootstrap";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import RadioTextButton from "@components/ui/radioTextButton";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { EMAIL_REGX } from "@utils/constant";
import SelectTag from "@components/ui/selectTag";

const EmploymentDetails = (props) => {
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    isLoading,
  } = usePersonalLoan();
  const { isJourneyOne } = props;

  const salaryDemoData = [
    {
      label: "Bank Transfer",
      value: "Bank Transfer",
    },
    {
      label: "By Cash",
      value: "By Cash",
    },
    {
      label: "By Cheque",
      value: "By Cheque",
    },
  ];

  const BasicSchema = Yup.object().shape({
    salary_type: Yup.string().required("Salary mode is required."),
    email: Yup.string()
      .matches(EMAIL_REGX, "Email must be a valid email address")
      .required("Email is required"),
  });

  const defaultValues = {
    salary_type: loanData?.salary_type || "Bank Transfer",
    email: loanData?.email || "",
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
        isJourneyOne ? 2 : 4,
        "Employment Details"
      );
      setCurrentStep(3);
      setCompletedSteps((prev) => [...prev, isJourneyOne ? 2 : 4]);
      fbq("trackCustom", "EmploymentDetailsFilled");
      fbq("track", "Subscribe");

      console.log("EmploymentDetailsFilled");

      return;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.radioGrpBlock}>
            <h3>Employment Type</h3>
            <Text>Please select employment type*</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Personal Email*"
                  type="email"
                  name="email"
                  placeholder="marikolundu@oakwood.com"
                  note="Please provide correct personal email"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="salary_type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectTag
                  {...field}
                  label="Salary Mode*"
                  name="salary_type"
                  options={salaryDemoData}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="employment-details"
              data-event="EmploymentDetailsFilled"
              id="employment-details"
              type="submit"
              className="primaryBtn"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.6 : 1 }}
            >
              {isLoading && (
                <Spinner size="sm" animation="border" variant="light" />
              )}
              {isLoading ? "Updating Data..." : "Continue"}
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

export default EmploymentDetails;
