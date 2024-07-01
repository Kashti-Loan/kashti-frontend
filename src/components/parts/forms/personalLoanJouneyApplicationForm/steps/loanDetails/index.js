"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "react-bootstrap";

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
import { useRouter } from "next/navigation";
import { routesConstant } from "@utils/routesConstant";

const LoanDetails = (props) => {
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    isLoading,
  } = usePersonalLoan();
  const router = useRouter();

  const BasicSchema = Yup.object().shape({});

  const defaultValues = {
    your_desired_loan_amount: loanData?.your_desired_loan_amount || 100000,
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
      const response = await onAddCustomerData(data, 7, "Loan Details");
      router.replace(routesConstant.PERSONAL_LOAN_OFFER);
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
          <div>
            <div className={styles.emiCalcSliderBox}>
              <div className={styles.emiCalcSliderLabel}>
                <label>Your Desired Loan Amount</label>
                <Controller
                  name="your_desired_loan_amount"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <MoneyPhoneInputTag
                      {...field}
                      type="number"
                      max={"2000000"}
                      initial="₹"
                      // style={{ maxWidth: "120px" }}
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
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="income-details"
              data-event="IncomeDetailsFilled"
              id="income-details"
              type="submit"
              className="primaryBtn income-details"
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

export default LoanDetails;
