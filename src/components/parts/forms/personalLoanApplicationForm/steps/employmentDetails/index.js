"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import RadioTextButton from "@components/ui/radioTextButton";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const EmploymentDetails = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData, leadDetail } =
    usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    office_email: Yup.string().email(
      "Office email must be a valid email address"
    ),
    employment_type: Yup.string().required("Employment type is required"),
    marital_status: Yup.string().required("Martial status is required"),
  });

  const defaultValues = {
    employment_type: "Self-Employed",
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
      const response = await onAddCustomerData(data, 5, "Employment Details");
      setCurrentStep(6);
      setCompletedSteps((prev) => [...prev, 5]);
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
            <Text>Please select employment type</Text>
            <div className={styles.radioGrpInner}>
              <RadioTextButton
                label="Self-Employed"
                checked={getValues("employment_type") === "Self-Employed"}
                onChange={() => {
                  setValue("employment_type", "Self-Employed", {
                    shouldValidate: true,
                  });
                }}
                note="Run a business"
              />
              <RadioTextButton
                label="Salaried"
                checked={getValues("employment_type") === "Salaried"}
                onChange={() => {
                  setValue("employment_type", "Salaried", {
                    shouldValidate: true,
                  });
                }}
                note="Receive fixed amount of income every month"
              />
            </div>
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
              name="office_email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Professional Email (Optional)"
                  type="email"
                  name="office_email"
                  placeholder="marikolundu@oakwood.com"
                  note="Please provide correct personal email"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div>
            <fieldset>
              <legend>Marital Status</legend>
              <div>
                <div>
                  <input
                    type="radio"
                    id="Unmarried"
                    name="marital_status"
                    value={getValues("marital_status")}
                    onChange={() => {
                      setValue("marital_status", "Unmarried", {
                        shouldValidate: true,
                      });
                    }}
                  />
                  <label for="Unmarried">Unmarried</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="Married"
                    name="marital_status"
                    value={getValues("marital_status")}
                    onChange={() => {
                      setValue("marital_status", "Married", {
                        shouldValidate: true,
                      });
                    }}
                  />
                  <label for="Married">Married</label>
                </div>
              </div>
            </fieldset>
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

export default EmploymentDetails;
