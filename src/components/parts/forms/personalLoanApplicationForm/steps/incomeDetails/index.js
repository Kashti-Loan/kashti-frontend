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
    monthly_income: Yup.string().required("Monthly salary is required."),
  });

  const defaultValues = {
    your_desired_loan_amount: loanData?.your_desired_loan_amount || 100000,
    salary_type: loanData?.salary_type || "Bank Transfer",
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
      const response = await onAddCustomerData(data, 3, "Income Details");
      setCurrentStep(4);
      setCompletedSteps((prev) => [...prev, 3]);
      fbq('trackCustom', "IncomeDetailsFilled");
      console.log('IncomeDetailsFilled');

      return;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className={styles.emiCalcSliderBox}>
              <div className={styles.emiCalcSliderLabel}>
                <label>Your Desired Loan Amount</label>
                <Controller
                  name="your_desired_loan_amount"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      {...field}
                      type="number"
                      max={"2000000"}
                      initial="₹"
                      style={{ maxWidth: "120px" }}
                    />
                  )}
                />
              </div>
              <div className={styles.mobileLoanInput}>
                <Controller
                  name="your_desired_loan_amount"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <MoneyPhoneInputTag
                      {...field}
                      label="Your Desired Loan Amount*"
                      type="number"
                      name="your_desired_loan_amount"
                      placeholder="20,000"
                      initial="₹"
                    />
                  )}
                />
              </div>
              <div className={styles.emiCalcSliderInput}>
                <Controller
                  name="your_desired_loan_amount"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <InputRange
                      {...field}
                      onChange={(val) =>
                        setValue("your_desired_loan_amount", val, {
                          shouldValidate: true,
                        })
                      }
                      max={"1000000"}
                      name="your_desired_loan_amount"
                      step={500}
                      className={styles.incomeLoanSlider}
                    />
                  )}
                />
              </div>
              <div className={styles.minMaxRange}>
                <Text>
                  Min <span>₹1000</span>
                </Text>
                <Text>
                  Max <span>10 Locs</span>
                </Text>
              </div>
            </div>
          </div>
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
