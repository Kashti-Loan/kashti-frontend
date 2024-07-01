"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
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
import SelectTag from "@components/ui/selectTag";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import DatePickerInputTag from "@components/ui/datePickerInput";
import moment from "moment";

const BusinessDetails = (props) => {
  const natureBusiness = [
    {
      label: "Manufacturing",
      value: "Manufacturing",
    },
    {
      label: "Trading",
      value: "Trading",
    },
    {
      label: "Service",
      value: "Service",
    },
  ];

  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    isLoading,
  } = usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    nature_business: Yup.string().required("Nature of business is required"),
    date_of_incorporation: Yup.string().required(
      "Incorporation date is required"
    ),
  });

  const defaultValues = {
    date_of_incorporation: loanData?.date_of_incorporation
      ? moment(loanData?.date_of_incorporation)
      : null,
    nature_business: loanData?.nature_business || "Manufacturing",
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
      const response = await onAddCustomerData(data, 10, "Business Detail");
      setCurrentStep(11);
      setCompletedSteps((prev) => [...prev, 10]);
      fbq("trackCustom", "BusinessDetailsFilled");
      console.log("BusinessDetailsFilled");

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
            <h3>Tell us about your business</h3>
            <Text>Please fill all the details carefully</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="nature_business"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectTag
                  {...field}
                  label="Nature of Business*"
                  name="nature_business"
                  options={natureBusiness}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="date_of_incorporation"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DatePickerInputTag
                  {...field}
                  label="Date of Incorporation*"
                  placeholder="Date of Incorporation"
                  error={error?.message}
                  maxDate={moment()}
                  dateFormat="DD/MM/YYYY"
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="business-detail"
              data-event="BusinessDetailsFilled"
              id="business-detail"
              type="submit"
              className="primaryBtn"
              style={{ opacity: isLoading ? 0.6 : 1 }}
              disabled={isLoading}
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

export default BusinessDetails;
