"use client";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const BasicDetailStep = (props) => {
  const { setCurrentStep, setCompletedSteps, onVerifyPAN, onAddCustomerData } =
    usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    date_of_birth: Yup.date()
      .max(new Date(), "You must be at least 21 years old.")
      .required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required."),
    pan: Yup.string()
      .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN Card number")
      .required("PAN Card number is required"),
  });

  const methods = useForm({
    resolver: yupResolver(BasicSchema),
    // defaultValues,
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
      const pan = await onVerifyPAN(data.pan);
      const response = await onAddCustomerData(data, 1, "Individual Details");
      setCurrentStep(2);
      setCompletedSteps((prev) => [...prev, 1]);
      return;
    } catch (error) {
      if (error === "Rejected") {
        setError("pan", {
          type: "custom",
          message: "PAN Card Verification Failed.",
        });
      } else {
        const response = await onAddCustomerData(data, 1, "Individual Details");
        setCurrentStep(2);
        setCompletedSteps((prev) => [...prev, 1]);
      }
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBlock}>
            <Controller
              name="pan"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="PAN Number*"
                  type="text"
                  name="pan"
                  placeholder="A B C T Y 1 2 3 4 D"
                  tooltip
                  tooltipContent={
                    "Learn why you are asked to enter your PAN Number "
                  }
                  note={
                    "If incorrect PAN is provided, the loan will be rejected"
                  }
                  error={errors?.pan_no?.message || error?.message}
                />
              )}
            />
            <Controller
              name="date_of_birth"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Date of Birth"
                  type="date"
                  name="date_of_birth"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.radioGrpBlock}>
            <h3>Gender</h3>
            <div className={styles.radioGrpInner}>
              <RadioImageButton
                label="Male"
                icon={GenderMale}
                checked={getValues("gender") === "male"}
                onChange={() => {
                  setValue("gender", "male", { shouldValidate: true });
                }}
              />
              <RadioImageButton
                label="Female"
                icon={GenderFemale}
                checked={getValues("gender") === "female"}
                onChange={() =>
                  setValue("gender", "female", { shouldValidate: true })
                }
              />
            </div>
            <div className={styles.errorBox}>
              {errors?.gender?.message && (
                <p className={styles.error}>{errors?.gender?.message}</p>
              )}
            </div>
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button type="submit" className="primaryBtn">
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

export default BasicDetailStep;
