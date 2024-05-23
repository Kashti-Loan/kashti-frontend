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

const CommunicationAddress = (props) => {
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
          <h3>Communication Address</h3>
          <Text>Please enter communication address</Text>
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="Address Line 1"
            type="text"
            name="address_line"
            placeholder="Address Line 1"
          />
          <InputTag
            label="Address Line 2"
            type="text"
            name="address_line"
            placeholder="Address Line 2"
          />
        </div>
        <div className={`${styles.inputBlock} ${styles.inputAddressDetail}`}>
          <InputTag
            label="Pincode"
            type="text"
            name="pincode"
            placeholder="560078"
          />
          <InputTag
            label="City"
            type="text"
            name="city"
            placeholder="Bengaluru"
          />
          <InputTag
            label="State"
            type="text"
            name="karnataka"
            placeholder="Bengaluru"
          />
          <SelectTag
            label="Nature of Address"
            name="nature_of_address"
            tooltip
            tooltipContent="Hello World!"
            options={natureOfAddress}
          />
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="Years at Current Address"
            type="text"
            name="years_at_address"
            placeholder="12"
            tooltip
            tooltipContent="Hello World!"
          />
        </div>
        <div className={`${styles.inputBlock} ${styles.consentBlock}`}>
          <label className="material-checkbox">
            <input type="checkbox" name={"consent"} id={"consent"} />
            <span className="checkmark"></span>
            <span>Permanent address same as communication address</span>
          </label>
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

export default CommunicationAddress;
