"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import StepperContainer from "@components/container/stepperContainer";
import styles from "./style.module.scss";
import { StepZero } from "./steps";
import BasicDetailIcon from "@components/ui/svg/formStepIcon/basicDetailIcon";
import { CheckLg } from "react-bootstrap-icons";
import EmploymentDetailIcon from "@components/ui/svg/formStepIcon/employmentDetailIcon";
import ThirdDetailIcon from "@components/ui/svg/formStepIcon/thirdDetailIcon";
import IncomeDetailIcon from "@components/ui/svg/incomeDetailIcon";
import KycDetailIcon from "@components/ui/svg/kycDetailIcon";
import { ProgressBar } from "react-bootstrap";
import PopupPortal from "@components/parts/popups/popupPortal";
import MobileFilter from "@components/parts/popups/mobileFilterPopup";
import AllSteps from "@components/parts/popups/allSteps";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import PersonalLoanQuestionairreApplication from "./personalLoanQuestionairreApplication";
import { routesConstant } from "@utils/routesConstant";

const PersonalLoanForm = (props) => {
  const { apiKey, secretKey } = props;
  const router = useRouter();

  const { setApiKey, setSecretKey, accessToken } = usePersonalLoan();

  useEffect(() => {
    if (apiKey && secretKey) {
      setSecretKey(secretKey);
      setApiKey(apiKey);
    }
  }, []);

  // useEffect(() => {
  //   if (accessToken) {
  //     router.replace(routesConstant.RECOMMENDED_PERSONAL_LOAN);
  //   }
  // }, [accessToken]);

  return <div className={styles.formContentSection}>{accessToken ? <PersonalLoanQuestionairreApplication /> : <StepZero />}</div>;
};

export default PersonalLoanForm;
