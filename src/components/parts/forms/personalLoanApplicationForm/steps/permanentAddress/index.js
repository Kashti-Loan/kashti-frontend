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

const PermanentAddress = (props) => {
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    getStateCityUsingPincode,
    isLoading,
  } = usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    address: Yup.string().required("Address line 1 is required"),
    address2: Yup.string().required("Address line 2 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
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
      const response = await onAddCustomerData(
        {
          permanent_address: `${data.address}, ${data.address2}, ${data.city}, ${data.pincode}, ${data.state}`,
        },
        7,
        "Permanent Address"
      );
      setCurrentStep(8);
      setCompletedSteps((prev) => [...prev, 7]);
      fbq("trackCustom", "PermanentAddressDetailsFilled");
      console.log("PermanentAddressDetailsFilled");

      return;
    } catch (error) {
      return error;
    }
  }

  const fetchCityState = async (pincode) => {
    const response = await getStateCityUsingPincode(pincode);
    if (response) {
      setValue("state", response["State"], { shouldValidate: true });
      setValue("city", response["District"], { shouldValidate: true });
    }
  };

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Permanent Address</h3>
            <Text>Please enter permanent address</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="address"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Address Line 1*"
                  type="text"
                  name="address"
                  autoComplete="address-line1"
                  placeholder="Address Line 1"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="address2"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Address Line 2*"
                  type="text"
                  name="address2"
                  autoComplete="address-line2"
                  placeholder="Address Line 2"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="pincode"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Pincode*"
                  type="text"
                  name="pincode"
                  autoComplete="postal-code"
                  placeholder="560078"
                  error={error?.message}
                  maxLength={6}
                  onChange={(event) => {
                    setValue("pincode", event.target.value, {
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
              name="city"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="City*"
                  type="text"
                  autoComplete="address-level2"
                  name="city"
                  placeholder="Bengaluru"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="state"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="State*"
                  type="text"
                  name="state"
                  placeholder="Bengaluru"
                  autoComplete="address-level1"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="permanent-address"
              data-event="PermanentAddressFilled"
              id="permanent-address"
              type="submit"
              className="primaryBtn"
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

export default PermanentAddress;
