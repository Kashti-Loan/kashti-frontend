"use client";
import { useState } from "react";
import { Input } from "@styles/styledComponent";
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

const IncomeDetailStep = () => {
  const [viewAllBank, setViewAllBank] = useState(false);
  return (
    <div className={styles.stepSection}>
      <div className={styles.inHandSalary}>
        <Input type="text" placeholder="Enter In-hand Salary" />
      </div>
      <div className={styles.salaryCreditedInBlock}>
        <div className={styles.salaryCreditedTitle}>
          <h4>Salary Credited In</h4>
          <button className="secondaryBtn" onClick={() => setViewAllBank(true)}>
            View More Banks
          </button>
        </div>
        <div className={styles.bankList}>
          <div className={styles.bankBox}>
            <CustomImage src={sbiCredited} alt="Salary Credited bank" />
            <h5>State Bank of India</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={hsbcCredited} alt="Salary Credited bank" />
            <h5>HSBC Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={canaraCredited} alt="Salary Credited bank" />
            <h5>Canara Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={hdfcCredited} alt="Salary Credited bank" />
            <h5>HDFC Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={axisCredited} alt="Salary Credited bank" />
            <h5>Axis Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={sbiCredited} alt="Salary Credited bank" />
            <h5>State Bank of India</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={hsbcCredited} alt="Salary Credited bank" />
            <h5>HSBC Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={canaraCredited} alt="Salary Credited bank" />
            <h5>Canara Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={hdfcCredited} alt="Salary Credited bank" />
            <h5>HDFC Bank</h5>
          </div>
          <div className={styles.bankBox}>
            <CustomImage src={axisCredited} alt="Salary Credited bank" />
            <h5>Axis Bank</h5>
          </div>
        </div>
        <div className={styles.viewResultBtn}>
          <Link
            href={routesConstant.RECOMMENDED_CREDIT_CARD}
            className="primaryBtn"
          >
            View Results
          </Link>
        </div>
      </div>
      {viewAllBank && (
        <PopupPortal display={viewAllBank}>
          <div className="popupBox">
            <AllBanks onClose={() => setViewAllBank(false)} />
          </div>
        </PopupPortal>
      )}
    </div>
  );
};

export default IncomeDetailStep;
