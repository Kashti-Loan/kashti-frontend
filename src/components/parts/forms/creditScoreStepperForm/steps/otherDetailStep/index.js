"use client";
import { useState } from "react";
import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import InstantLoanIcon from "@components/ui/svg/instantLoanIcon";
import BusinessLoanIcon from "@components/ui/svg/businessLoanIcon";
import GoldLoanIcon from "@components/ui/svg/goldLoanIcon";
import CreditCardIcon from "@components/ui/svg/creditCardIcon";
import Link from "next/link";

const OtherDetailStep = (props) => {
  const [viewAllBank, setViewAllBank] = useState(false);
  const [loanAmount, setLoanAmount] = useState(100000);
  return (
    <div className={styles.stepSection}>
      <h3>Select the product you are looking for</h3>
      <div className={styles.otherDetailBlock}>
        <div className={styles.otherDetailBox}>
          <div className={styles.otherDetailTitle}>
            <h4>Credit Cards</h4>
            <CreditCardIcon />
          </div>
          <Text>
            From 50+ Cards Choose your Card Matching the lifestyle and needs.
          </Text>
        </div>
        <div className={styles.otherDetailBox}>
          <div className={styles.otherDetailTitle}>
            <h4>Instant Personal Loan</h4>
            <InstantLoanIcon />
          </div>
          <Text>
            Select the Best offers curated for you and get your loan approved
            instantly..
          </Text>
          {/* <SelfEmployedIcon /> */}
        </div>
        <div className={styles.otherDetailBox}>
          <div className={styles.otherDetailTitle}>
            <h4>Business Loan</h4>
            <BusinessLoanIcon />
          </div>
          <Text>
            Select the Best offers curated for you and get your loan approved
            instantly..
          </Text>
          {/* <BusinessOwnerIcon /> */}
        </div>
        <div className={styles.otherDetailBox}>
          <div className={styles.otherDetailTitle}>
            <h4>Gold Loan</h4>
            <GoldLoanIcon />
          </div>
          <Text>We help you to choose the Best rates for your Gold.</Text>
          {/* <BusinessOwnerIcon /> */}
        </div>
      </div>
      {/* <div className={styles.submitBtn}>
        <button className={"primaryBtn"} onClick={props.onSubmit}>
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default OtherDetailStep;
