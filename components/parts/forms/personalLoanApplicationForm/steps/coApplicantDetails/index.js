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
import CommonTooltip from "@components/ui/commonTooltip";

const CoApplicantDetails = (props) => {
  const natureOfAddress = [
    {
      label: "Paying Guest",
      value: "Paying Guest",
    },
    {
      label: "Paying Guest",
      value: "Paying Guest",
    },
    {
      label: "Paying Guest",
      value: "Paying Guest",
    },
    {
      label: "Paying Guest",
      value: "Paying Guest",
    },
  ];
  return (
    <div className={styles.formSection}>
      <form>
        <div>
          <h3>Add Co-Applicant Details</h3>
          <CommonTooltip
            id={"haveCoApplicant"}
            content={"Hello World"}
            place={"right"}
          />
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="Name"
            type="text"
            name="address_line"
            placeholder="Marikolundu"
          />
          <InputTag
            label="Date of Birth"
            type="date"
            name="date_of_birth"
            tooltip
            tooltipContent="Hello World"
          />
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="PAN Number"
            type="text"
            name="pan"
            placeholder="A B C T Y 1 2 3 4 D"
            tooltip
            tooltipContent="Hello World!"
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

export default CoApplicantDetails;
