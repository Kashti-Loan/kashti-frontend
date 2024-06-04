"use client";
import { useState } from "react";
import { Input, Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import CustomImage from "@components/ui/customImage";
import {
  axisCredited,
  canaraCredited,
  hdfcCredited,
  hsbcCredited,
  sbiCredited,
} from "@public/assets";
import PopupPortal from "@components/parts/popups/popupPortal";
import AllBanks from "@components/parts/popups/allBanks";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import CustomInput from "@components/ui/customInput";
import InputRange from "@components/ui/inputRange";

const LoanDetailStep = () => {
  const [viewAllBank, setViewAllBank] = useState(false);
  const [loanAmount, setLoanAmount] = useState(100000);
  return (
    <div className={styles.stepSection}>
      <form>
        <div className={styles.loanInputBox}>
          <div className={styles.loanInputLabel}>
            <label>Your Desired Loan Amount</label>
            <span>₹ {loanAmount}</span>
          </div>
          <div className={styles.loanInput}>
            <InputRange
              onChange={(val) => setLoanAmount(val)}
              max={"2000000"}
              value={loanAmount}
              className={styles.loanRangeSlider}
            />
          </div>
          <div className={styles.minMaxBox}>
            <Text>
              Min <b>0.1 lac</b>
            </Text>
            <Text>
              Max <b>20 lac</b>
            </Text>
          </div>
        </div>
        <Link
          href={routesConstant.RECOMMENDED_PERSONAL_LOAN}
          className="primaryBtn"
        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default LoanDetailStep;
