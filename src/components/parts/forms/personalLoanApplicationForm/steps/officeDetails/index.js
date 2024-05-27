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
import { useRouter } from "next/navigation";
import { routesConstant } from "@utils/routesConstant";

const OfficeDetails = (props) => {
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    getStateCityUsingPincode,
  } = usePersonalLoan();
  const router = useRouter();

  const BasicSchema = Yup.object().shape({
    officeaddress1: Yup.string().required("Address line 1 is required"),
    officeaddress2: Yup.string().required("Address line 2 is required"),
    office_city: Yup.string().required("City is required"),
    office_state: Yup.string().required("State is required"),
    officepincode: Yup.string().required("Pincode is required"),
  });

  const methods = useForm({
    resolver: yupResolver(BasicSchema),
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
      const response = await onAddCustomerData(data, 8, "Office Address");
      setCompletedSteps((prev) => [...prev, 8]);
      if (loanData.employment_type === "Salaried") {
        router.replace(routesConstant.RECOMMENDED_PERSONAL_LOAN);
      } else {
        setCurrentStep(9);
      }
      return;
    } catch (error) {
      return error;
    }
  }

  const fetchCityState = async (pincode) => {
    const response = await getStateCityUsingPincode(pincode);
    if (response) {
      setValue("office_state", response["State"], { shouldValidate: true });
      setValue("office_city", response["District"], { shouldValidate: true });
    }
  };

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Office Details</h3>
            <Text>Please enter office address</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="officeaddress1"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Address Line 1"
                  type="text"
                  name="officeaddress1"
                  placeholder="Address Line 1"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="officeaddress2"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Address Line 2"
                  type="text"
                  name="officeaddress2"
                  placeholder="Address Line 2"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="officepincode"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Pincode"
                  type="text"
                  name="officepincode"
                  placeholder="560078"
                  error={error?.message}
                  maxLength={6}
                  onChange={(event) => {
                    setValue("officepincode", event.target.value, {
                      shouldValidate: true,
                    });
                    if (event.target.value.length === 6) {
                      fetchCityState(event.target.value);
                    }
                  }}
                />
              )}
            />
            <Controller
              name="office_city"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="City"
                  type="text"
                  name="office_city"
                  placeholder="Bengaluru"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="office_state"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="State"
                  type="text"
                  name="office_state"
                  placeholder="Bengaluru"
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

export default OfficeDetails;
