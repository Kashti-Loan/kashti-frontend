"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./style.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import Link from "next/link";
import { ArrowLeftShort, ChevronDown } from "react-bootstrap-icons";
import { CustomImage, CustomSlider, PersonalLoanForm } from "@components";
import {
  applyPersonalLoan,
  newicici,
  newmuthoot,
  newyes,
  personalLoanMobileModel,
  personalLoanQuestionairreModel,
  whiteKashti,
} from "@public/assets";
import { routesConstant } from "@utils/routesConstant";
import { bankLogoSliderSettings, bankingSliderSettings } from "@utils/constant";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { Toaster } from "react-hot-toast";
import moment from "moment";
import { useRouter } from "next/navigation";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const Page = ({ params }) => {
  const router = useRouter();
  const { accessToken, currentStep, setCurrentStep, loanData } =
    usePersonalLoan();

  const [personalLoanAccordian, setPersonalLoanAccordian] = useState(true);
  const [
    personalLoanEligibilityAccordian,
    setPersonalLoanEligibilityAccordian,
  ] = useState(true);

  useLayoutEffect(() => {
    const loanOffersExipry = localStorage.getItem("pl_loan_expiry");
    if (moment(loanOffersExipry).isAfter(moment())) {
      router.replace(routesConstant.RECOMMENDED_PERSONAL_LOAN);
    } else {
      localStorage.removeItem("pl_loan_offer");
      localStorage.removeItem("pl_loan_expiry");
    }
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <main className={styles.personalLoanQuestionnairePage}>
        {/* Header Section */}

        <Toaster />
        <section
          className={`${styles.headerSection} ${
            accessToken ? styles.headerLogin : null
          }`}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <button
                  onClick={() => {
                    setCurrentStep((prevStep) =>
                      prevStep > 1
                        ? prevStep === 8 && loanData?.isPermenentAddressSame
                          ? prevStep - 2
                          : prevStep - 1
                        : prevStep
                    );
                  }}
                >
                  {currentStep > 1 ? <ArrowLeftShort /> : null}{" "}
                  {accessToken ? <span>Personal Loan</span> : null}{" "}
                </button>
              </Col>
              <Col lg={12}>
                <div className={styles.bannerContent}>
                  <PageTitle>Unlock Best Personal Loan Offers</PageTitle>
                  <Text>Avail a Loan of Your Choice Instantly.</Text>
                </div>
                <div className={styles.mobileImg}>
                  <CustomImage src={personalLoanMobileModel} />
                </div>
              </Col>
            </Row>
          </Container>
          <CustomImage
            src={applyPersonalLoan}
            alt="Personal Loan Questionnaire"
            className={styles.applyPersonalLoan}
          />
          <CustomImage
            src={whiteKashti}
            alt="White Kashti"
            className={styles.whiteKashti}
          />
        </section>
        <section className={styles.questionairreSection}>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={11}>
                <PersonalLoanForm
                  apiKey={params.apiKey}
                  secretKey={params.secretKey}
                />
              </Col>
              <Col xs={12} md={12} lg={11}>
                <div className={`${styles.infoAccordian}`}>
                  <div className={styles.infoAccordianHeader}>
                    <h4>Our Banking partners and NBFCs</h4>
                  </div>
                  <div className={styles.infoAccordianContent}>
                    <CustomSlider
                      settings={bankingSliderSettings}
                      className={`bankLogoSlider ${styles.bankSliderContainer}`}
                      children={[
                        <div className={styles.logoSlide}>
                          <CustomImage src={newicici} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newyes} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newmuthoot} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newicici} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newyes} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newmuthoot} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newicici} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newyes} alt="Bank Partners" />
                        </div>,
                        <div className={styles.logoSlide}>
                          <CustomImage src={newmuthoot} alt="Bank Partners" />
                        </div>,
                      ]}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12} lg={11}>
                <div
                  className={`${styles.infoAccordian} ${
                    personalLoanAccordian
                      ? styles.activeAccordian
                      : styles.inActiveAccordian
                  }`}
                >
                  <div
                    className={styles.infoAccordianHeader}
                    onClick={() => setPersonalLoanAccordian((prev) => !prev)}
                  >
                    <h4>Personal Loan Features and Benefits</h4>
                    <ChevronDown />
                  </div>
                  <div className={styles.infoAccordianContent}>
                    <ul>
                      <li>There are no restrictions on usage.</li>
                      <li>
                        Loan amounts up to Rs. 40 lakh can be borrowed and can
                        be increased at the discretion of the lender.
                      </li>
                      <li>
                        Flexible repayment period, ranging from 1 to 5 years,
                        depending on the lender.
                      </li>
                      <li>
                        Very little documentation is required for loan
                        processing.
                      </li>
                      <li>
                        Competitive interest rates, beginning at 10.50% p.a.,
                        further decreased depending on the lender.
                      </li>
                      <li>
                        Fastest loan disbursement compared to any other lending
                        platform.
                      </li>
                      <li>
                        Opportunity for pre-approved loans with
                        instant disbursement for those with excellent credit
                        scores.
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12} lg={11}>
                <div
                  className={`${styles.infoAccordian} ${
                    personalLoanEligibilityAccordian
                      ? styles.activeAccordian
                      : styles.inActiveAccordian
                  }`}
                >
                  <div
                    className={styles.infoAccordianHeader}
                    onClick={() =>
                      setPersonalLoanEligibilityAccordian((prev) => !prev)
                    }
                  >
                    <h4>Personal Loan Eligibility</h4>
                    <ChevronDown />
                  </div>
                  <div className={styles.infoAccordianContent}>
                    <ul>
                      <li>
                        <b>Age</b>: 18-60 years
                      </li>
                      <li>
                        <b>Income</b>: As low as Rs 15,000/month for salaried
                        applicants
                      </li>
                      <li>
                        <b>Credit Score</b>: A score of 750 or above is
                        recommended, as it increases the likelihood of loan
                        approval and reduced interest rates.
                      </li>
                      <li>
                        <b>Address</b>: KASHTI FINSERV PVT LTD.
                      </li>
                      <li>
                        Competitive interest rates, beginning at 10.50% p.a.,
                        further decreased depending on the lender.
                      </li>
                      <li>
                        Fastest loan disbursement compared to any other lending
                        platform.
                      </li>
                      <li>
                        Opportunity for pre-approved loans with
                        instant disbursement for those with excellent credit
                        scores.
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </LocalizationProvider>
  );
};

export default Page;
