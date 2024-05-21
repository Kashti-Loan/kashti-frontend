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

const OfficeDetails = (props) => {
  return (
    <div className={styles.formSection}>
      <form>
        <div>
          <h3>Office Details</h3>
          <Text>Please enter office address</Text>
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
        <div className={styles.inputBlock}>
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
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="State"
            type="text"
            name="karnataka"
            placeholder="Bengaluru"
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

export default OfficeDetails;
