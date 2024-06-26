"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./style.module.scss";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import PersonalLoanLogin from "./personalLoanLogin";
import PersonalLoanQuestionairreApplication from "../personalLoanForm/personalLoanQuestionairreApplication";
import { routesConstant } from "@utils/routesConstant";

const SecureLoanToday = (props) => {
  const { apiKey, secretKey } = props;
  const router = useRouter();

  const { setApiKey, setSecretKey, accessToken } = usePersonalLoan();

  useEffect(() => {
    if (apiKey && secretKey) {
      setSecretKey(secretKey);
      setApiKey(apiKey);
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      router.replace(`${routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}`);
    }
  }, [accessToken]);

  return (
    <div className={styles.formContentSection}>
      <PersonalLoanLogin />
    </div>
  );
};

export default SecureLoanToday;
