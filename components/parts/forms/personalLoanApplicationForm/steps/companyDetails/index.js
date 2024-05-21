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

const CompanyDetails = (props) => {
  const companyType = [
    {
      label: "Private limited",
      value: "Private limited",
    },
    {
      label: "Partnership",
      value: "Partnership",
    },
    {
      label: "Proprietor",
      value: "Proprietor",
    },
    {
      label: "Goverment",
      value: "Goverment",
    },
  ];
  return (
    <div className={styles.formSection}>
      <form>
        <div>
          <h3>Company Details</h3>
          <Text>Please enter your company details</Text>
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="Company Name"
            type="text"
            name="compnay_name"
            placeholder="Oakwood Finances"
          />
          <SelectTag
            label="Company Type"
            name="company_type"
            options={companyType}
            />
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="Total Work Experience"
            type="text"
            name="years_at_address"
            placeholder="12"
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

export default CompanyDetails;
