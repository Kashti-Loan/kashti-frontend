"use client";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { useState } from "react";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import SelectTag from "@components/ui/selectTag";
import InputRange from "@components/ui/inputRange";

const IncomeDetails = (props) => {
  const [otpSent, setOtpSent] = useState(false);
  const [loanAmount, setLoanAmount] = useState(100000);

  const salaryDemoData = [
    {
      label: "Bank Transfer",
      value: "bank_transfer",
    },
    {
      label: "Bank Transfer",
      value: "bank_transfer",
    },
    {
      label: "Bank Transfer",
      value: "bank_transfer",
    },
    {
      label: "Bank Transfer",
      value: "bank_transfer",
    },
  ];
  return (
    <div className={styles.formSection}>
      <form>
        <div>
          <div className={styles.emiCalcSliderBox}>
            <div className={styles.emiCalcSliderLabel}>
              <label>Your Desired Loan Amount</label>
              <div>
                <span>₹</span>
                <span>{loanAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <div className={styles.mobileLoanInput}>
              <MoneyPhoneInputTag
                label="Your Desired Loan Amount*"
                type="text"
                name="monthly_income"
                placeholder="20,000"
                initial="₹"
              />
            </div>
            <div className={styles.emiCalcSliderInput}>
              <InputRange
                onChange={(val) => setLoanAmount(val)}
                max={"1000000"}
                value={loanAmount}
                className={styles.incomeLoanSlider}
              />
            </div>
            <div className={styles.minMaxRange}>
              <Text>
                Min <span>₹1000</span>
              </Text>
              <Text>
                Max <span>10 Locs</span>
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.inputBlock}>
          <MoneyPhoneInputTag
            label="Monthly Income*"
            type="text"
            name="monthly_income"
            placeholder="20,000"
            initial="₹"
            tooltip
            tooltipContent={"Hello World!"}
            note="Income entered must be verified by your bank"
          />
          <SelectTag
            label="Salary Mode*"
            type="text"
            name="salary_mode"
            options={salaryDemoData}
            tooltip
            tooltipContent={"Hello World!"}
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

export default IncomeDetails;
