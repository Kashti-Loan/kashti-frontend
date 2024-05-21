"use client";
import { useState } from "react";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import SelectTag from "@components/ui/selectTag";

const BusinessDetails = (props) => {
  const natureBusiness = [
    {
      label: "Service",
      value: "Service",
    },
    {
      label: "Service",
      value: "Service",
    },
    {
      label: "Service",
      value: "Service",
    },
    {
      label: "Service",
      value: "Service",
    },
  ];
  return (
    <div className={styles.formSection}>
      <form>
        <div>
          <h3>Tell us about your business</h3>
          <Text>Please fill all the details carefully</Text>
        </div>
        <div className={styles.inputBlock}>
          <SelectTag
            label="Nature of Business"
            name="nature_business"
            options={natureBusiness}
          />
          <InputTag
            label="Date of Incorporation"
            type="date"
            name="compnay_name"
          />
        </div>
        <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
          <button
            type="button"
            className="primaryBtn"
            onClick={() => props.onSubmit()}
          >
            Continue
          </button>
        </div>
      </form>
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
