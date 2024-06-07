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
import { EMAIL_REGX } from "@utils/constant";

const EmploymentDetails = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData, loanData } =
    usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    email: Yup.string()
      .matches(EMAIL_REGX, "Email must be a valid email address")
      .required("Email is required"),
    // office_email: Yup.string()
    //   .trim()
    //   .nullable()
    //   .notRequired()
    //   .matches(EMAIL_REGX, {
    //     message: "Email must be a valid email address",
    //     excludeEmptyString: true,
    //   }),
    office_email: Yup.string()
      .email("Invalid professional email format")
      .notOneOf([Yup.ref("email")], "Personal and Office email cann't same")
      .test(
        "emails-not-same",
        "Email and professional email should be different",
        function (value) {
          const { email } = this.parent;
          return email !== value;
        }
      ),
    employment_type: Yup.string().required("Employment type is required"),
    marital_status: Yup.string().required("Martial status is required"),
  });

  const defaultValues = {
    email: loanData?.email || "",
    office_email: loanData?.office_email || "",
    employment_type: loanData?.employment_type || "",
    marital_status: loanData?.marital_status || "",
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
                label="Salaried"
                checked={getValues("employment_type") === "Salaried"}
                onChange={() => {
                  setValue("employment_type", "Salaried", {
                    shouldValidate: true,
                  });
                }}
                note="Receive fixed amount of income every month"
              />
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
            </div>
            <div className={styles.errorBox}>
              {errors?.employment_type?.message && (
                <p className={styles.error}>
                  {errors?.employment_type?.message}
                </p>
              )}
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
              <div className={styles.errorBox}>
                {errors?.marital_status?.message && (
                  <p className={styles.error}>
                    {errors?.marital_status?.message}
                  </p>
                )}
              </div>
            </fieldset>
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="employment-details"
              id="employment-details"

              type="submit"
              className="primaryBtn"
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

export default EmploymentDetails;
