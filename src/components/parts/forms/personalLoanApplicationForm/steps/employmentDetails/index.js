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
import RadioTextButton from "@components/ui/radioTextButton";

const EmploymentDetails = (props) => {
  const [selectedValue, setSelectedValue] = useState("female");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.radioGrpBlock}>
          <h3>Employment Type</h3>
          <Text>Please select employment type</Text>
          <div className={styles.radioGrpInner}>
            <RadioTextButton
              label="Self-Employed"
              checked={selectedValue === "Self-Employed"}
              onChange={() => handleChange("Self-Employed")}
              note="Run a business"
            />
            <RadioTextButton
              label="Salaried"
              checked={selectedValue === "Salaried"}
              onChange={() => handleChange("Salaried")}
              note="Receive fixed amount of income every month"
            />
          </div>
        </div>
        <div className={styles.inputBlock}>
          <InputTag
            label="Personal Email*"
            type="email"
            name="personalEmail"
            placeholder="marikolundu@oakwood.com"
            note="Please provide correct personal email"
          />
          <InputTag
            label="Professional Email (Optional)"
            type="email"
            name="professionalEmail"
            placeholder="marikolundu@oakwood.com"
            note="Please provide correct personal email"
          />
        </div>
        <div>
          <fieldset>
            <legend>Marital Status</legend>
            <div>
              <div>
                <input
                  type="radio"
                  id="Unmarried"
                  name="Unmarried"
                  value="Unmarried"
                  checked
                />
                <label for="Unmarried">Unmarried</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Married"
                  name="Married"
                  value="Married"
                />
                <label for="Married">Married</label>
              </div>
            </div>
          </fieldset>
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

export default EmploymentDetails;
