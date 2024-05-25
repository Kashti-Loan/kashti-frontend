"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
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
import SelectTag from "@components/ui/selectTag";
import { usePersonalLoan } from "@context/PersonalLoanContext";

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

  const { setCurrentStep, setCompletedSteps, onAddCustomerData, leadDetail } =
    usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    nature_business: Yup.string().required("Nature of business is required"),
    date_of_incorporation: Yup.string().required(
      "Incorporation date is required"
    ),
  });

  const defaultValues = {
    nature_business: "Manufacturing",
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
                  label="Nature of Business"
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
                <InputTag
                  {...field}
                  label="Date of Incorporation"
                  type="date"
                  name="date_of_incorporation"
                  error={error?.message}
                />
              )}
            />
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

export default BusinessDetails;
