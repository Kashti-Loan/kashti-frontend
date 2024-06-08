"use client";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import SelectTag from "@components/ui/selectTag";
import CommonTooltip from "@components/ui/commonTooltip";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import moment from "moment";
import DatePickerInputTag from "@components/ui/datePickerInput";

const CoApplicantDetails = (props) => {
  const { setCurrentStep, setCompletedSteps, onAddCustomerData, loanData } =
    usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    coAppplicantDOB: Yup.date()
      .max(
        new Date(Date.now() - 662695992000),
        "Co-applient age must be at least 21 years old."
      )
      .required("Date of Birth is required"),
    coApplicantName: Yup.string().required("Co-Applicant name is required."),
    coApplicantPAN: Yup.string()
      .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN Card number")
      .notOneOf(
        [loanData?.pan],
        "Co-applicant PAN must be different to Applicant PAN"
      )
      .required("PAN Card number is required"),
  });

  const defaultValues = {
    coAppplicantDOB: loanData?.coAppplicantDOB
      ? moment(loanData?.coAppplicantDOB)
      : null,
    coApplicantName: loanData?.coApplicantName || "",
    coApplicantPAN: loanData?.coApplicantPAN || "",
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
      data["coAppplicantDOB"] = moment(data["coAppplicantDOB"]).format(
        "YYYY-MM-DD"
      );
      const response = await onAddCustomerData(data, 12, "CoApplicant Details");
      setCurrentStep(13);
      setCompletedSteps((prev) => [...prev, 12]);
      fbq('trackCustom', "CoApplicantDetailsFilled");
      console.log('CoApplicantDetailsFilled');
      return;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h3>Add Co-Applicant Details</h3>
              <Text>Tell us about your co-applicant.</Text>
            </div>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="coApplicantName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Name*"
                  type="text"
                  name="coApplicantName"
                  placeholder="Co-Applicant Name"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="coAppplicantDOB"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DatePickerInputTag
                  {...field}
                  label="Date of Birth*"
                  placeholder="Date of Birth"
                  error={error?.message}
                  minDate={moment().subtract(500, "years")}
                  maxDate={moment().subtract(21, "years")}
                  dateFormat="DD/MM/YYYY"
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="coApplicantPAN"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="PAN Number*"
                  type="text"
                  name="coApplicantPAN"
                  placeholder="A B C T Y 1 2 3 4 D"
                  error={errors?.pan_no?.message || error?.message}
                  onChange={(event) => {
                    setValue(
                      "coApplicantPAN",
                      event.target.value.toUpperCase(),
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="coapplicant-details"
              data-event="CoApplicantDetailsFilled"

              id="coapplicant-details"
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

export default CoApplicantDetails;
