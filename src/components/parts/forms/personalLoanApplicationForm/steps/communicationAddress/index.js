"use client";
import { useEffect, useState } from "react";
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
import SelectTag from "@components/ui/selectTag";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const CommunicationAddress = (props) => {
  const natureOfAddress = [
    {
      label: "Self-Owned",
      value: "self_owned",
    },
    {
      label: "With Parents",
      value: "with_parents",
    },
    {
      label: "With Relatives",
      value: "with_relatives",
    },
    {
      label: "With Friends",
      value: "with_friends",
    },
    {
      label: "Rented",
      value: "rented",
    },
    {
      label: "Paying guest",
      value: "paying_guest",
    },
    {
      label: "Lease",
      value: "lease",
    },
    {
      label: "Pagadi",
      value: "pagadi",
    },
  ];

  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    getStateCityUsingPincode,
    loanData,
    setLoanData,
  } = usePersonalLoan();

  const [isPermenentAddressSame, setIsPermenentAddressSame] = useState(false);

  const BasicSchema = Yup.object().shape({
    address: Yup.string().required("Address line 1 is required"),
    address2: Yup.string().required("Address line 2 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .test("len", "Pincode must be 6 characters", (val) => val.length === 6)
      .required("Pincode is required"),
    nature_of_address: Yup.string().required("Nature of address is required"),
    years_at_current_address: Yup.string().required(
      "Years at current address is required"
    ),
  });

  const defaultValues = {
    nature_of_address: loanData?.nature_of_address || "self_owned",
    address: loanData?.address || "",
    address2: loanData?.address2 || "",
    city: loanData?.city || "",
    state: loanData?.state || "",
    pincode: loanData?.pincode || "",
    years_at_current_address: loanData?.years_at_current_address || "",
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

  useEffect(() => {
    if (loanData?.isPermenentAddressSame) {
      setIsPermenentAddressSame(true);
    }
  }, [loanData?.isPermenentAddressSame]);

  async function onSubmit(data) {
    try {
      const requestData = isPermenentAddressSame
        ? {
            ...data,
            permanent_address: `${data.address}, ${data.address2}, ${data.city}, ${data.pincode}, ${data.state}`,
          }
        : data;
      setLoanData((prevData) => ({
        ...prevData,
        isPermenentAddressSame,
      }));
      const response = await onAddCustomerData(
        requestData,
        6,
        "Communication Address"
      );
      isPermenentAddressSame ? setCurrentStep(8) : setCurrentStep(7);
      setCompletedSteps((prev) => [...prev, 6]);
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
            <h3>Communication Address</h3>
            <Text>Please enter communication address</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="address"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Address Line 1"
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
                  label="Address Line 2"
                  type="text"
                  name="address2"
                  autoComplete="address-line2"
                  placeholder="Address Line 2"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.inputAddressDetail}`}>
            <Controller
              name="pincode"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Pincode"
                  type="text"
                  autoComplete="postal-code"
                  name="pincode"
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
                  label="City"
                  type="text"
                  autoComplete="address-level2"
                  name="city"
                  placeholder="Bengaluru"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="State"
                  type="text"
                  name="state"
                  autoComplete="address-level1"
                  placeholder="Bengaluru"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="nature_of_address"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectTag
                  {...field}
                  label="Nature of Address"
                  name="nature_of_address"
                  tooltip
                  tooltipContent="Hello World!"
                  options={natureOfAddress}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="years_at_current_address"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Years at Current Address"
                  type="number"
                  name="years_at_current_address"
                  placeholder="12"
                  tooltip
                  tooltipContent="Hello World!"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.consentBlock}`}>
            <label className="material-checkbox">
              <input
                value={isPermenentAddressSame}
                onChange={(e) => setIsPermenentAddressSame(e.target.checked)}
                type="checkbox"
                name={"consent"}
                id={"consent"}
                checked={isPermenentAddressSame}
              />
              <span className="checkmark"></span>
              <span>Permanent address same as communication address</span>
            </label>
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="communication-address"
              data-event="CommunicationAddressFilled"

              id="communication-address"

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

export default CommunicationAddress;
