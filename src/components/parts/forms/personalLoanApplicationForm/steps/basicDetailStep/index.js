"use client";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "react-bootstrap";

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
import isPanValid from "@ashwinbande/validators";
import moment from "moment";
import DatePickerInputTag from "@components/ui/datePickerInput";

// Custom function to check if the date makes the user at least 18 years old
const isAdult = (value) => {
  const today = new Date();
  const birthDate = new Date(value);
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
};

const BasicDetailStep = (props) => {
  const {
    setCurrentStep,
    setCompletedSteps,
    onVerifyPAN,
    onAddCustomerData,
    loanData,
    basicDetail,
    isLoading,
  } = usePersonalLoan();
  const currentDate = new Date();

  // Calculate the future date 18 years from now
  const futureDate = new Date(currentDate);
  futureDate.setFullYear(futureDate.getFullYear() + 18);

  // Get the timestamp for the future date
  const EighteenYears = futureDate.getTime();
  const BasicSchema = Yup.object().shape({
    date_of_birth: Yup.date()
      .required("Date of birth is required")
      .test(
        "is-18-years-old",
        "You must be at least 18 years old",
        function (value) {
          return isAdult(value) >= 18;
        }
      ),
    gender: Yup.string().required("Gender is required."),
    pan: Yup.string()
      // .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN Card number")
      .required("PAN Card number is required")
      .test("pan-valid", "Invalid PAN Card number", isPanValid.pan),
  });

  const defaultValues = {
    date_of_birth: loanData?.date_of_birth
      ? moment(loanData?.date_of_birth)
      : null,
    gender: loanData?.gender || "",
    pan: loanData?.pan || "",
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
    data["date_of_birth"] = moment(data["date_of_birth"]).format("YYYY-MM-DD");
    data["full_name"] = basicDetail?.full_name;
    try {
      const pan = await onVerifyPAN(data.pan);
      const response = await onAddCustomerData(data, 1, "Individual Details");
      setCurrentStep(2);
      setCompletedSteps((prev) => [...prev, 1]);
      fbq("trackCustom", "IndividualDetailsFilled");
      console.log("IndividualDetailsFilled");

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
        fbq("trackCustom", "IndividualDetailsFilled");
        fbq("track", "Search");

        console.log("IndividualDetailsFilled");
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
                  onChange={(event) => {
                    setValue("pan", event.target.value.toUpperCase(), {
                      shouldValidate: true,
                    });
                  }}
                  error={errors?.pan_no?.message || error?.message}
                />
              )}
            />

            <Controller
              name="date_of_birth"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DatePickerInputTag
                  {...field}
                  label="Date of Birth*"
                  placeholder="Date of Birth"
                  error={error?.message}
                  minDate={moment().subtract(500, "years")}
                  maxDate={moment().subtract(21, "years")}
                  format="DD/MM/YYYY"
                />
              )}
            />
          </div>
          <div className={styles.radioGrpBlock}>
            <h3>Gender*</h3>
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
            <button
              data-testid="individual-details"
              data-event="IndividualDetailsFilled"
              id="individual-details"
              type="submit"
              className="primaryBtn individual-details"
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

export default BasicDetailStep;
