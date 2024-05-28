"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import Link from "next/link";
import { ArrowLeftShort, ChevronDown } from "react-bootstrap-icons";
import {
  CustomImage,
  CustomSlider,
  PersonalLoanApplicationForm,
  PersonalLoanForm,
} from "@components";
import {
  applyPersonalLoan,
  newicici,
  newmuthoot,
  newyes,
  whiteKashti,
} from "@public/assets";
import { routesConstant } from "@utils/routesConstant";
import { bankLogoSliderSettings, bankingSliderSettings } from "@utils/constant";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const PersonalLoanQuestionairreApplication = () => {
  const { currentStep, setCurrentStep, completedSteps, loanData } =
    usePersonalLoan();

  const [progress, setProgress] = useState(6);
  const [currentStepName, setCurrentStepName] = useState("Basic Details");
  const [currentTotalStep, setCurrentTotalStep] = useState(2);
  const [completedCurrentStep, setCompletedCurrentStep] = useState(1);

  useEffect(() => {
    if (currentStep >= 1) {
      switch (currentStep) {
        case 1:
          setProgress(6);
          setCurrentStepName("Basic Details");
          setCompletedCurrentStep(1);
          setCurrentTotalStep(2);
          break;
        case 2:
          setProgress(12);
          setCurrentStepName("Basic Details");
          setCompletedCurrentStep(2);
          setCurrentTotalStep(2);
          break;
        case 3:
          setProgress(18);
          setCurrentStepName("Income Details");
          setCompletedCurrentStep(1);
          setCurrentTotalStep(2);
          break;
        case 4:
          setProgress(24);
          setCurrentStepName("Income Details");
          setCompletedCurrentStep(2);
          setCurrentTotalStep(2);
          break;
        case 5:
          setCurrentStepName("Employment Details");
          setCompletedCurrentStep(1);
          setCurrentTotalStep(9);
          setProgress(30);
          break;
        case 6:
          setProgress(36);
          setCompletedCurrentStep(2);
          setCurrentStepName("Employment Details");
          break;
        case 7:
          setProgress(42);
          setCompletedCurrentStep(3);
          setCurrentStepName("Employment Details");
          break;
        case 8:
          setProgress(48);
          setCompletedCurrentStep(4);
          setCurrentStepName("Employment Details");
          break;
        case 9:
          setProgress(54);
          setCompletedCurrentStep(5);
          setCurrentStepName("Employment Details");
          break;
        case 10:
          setProgress(60);
          setCompletedCurrentStep(6);
          setCurrentStepName("Employment Details");
          break;
        case 11:
          setProgress(66);
          setCompletedCurrentStep(7);
          setCurrentStepName("Employment Details");
          break;
        case 12:
          setProgress(72);
          setCompletedCurrentStep(8);
          setCurrentStepName("Employment Details");
          break;
        case 13:
          setProgress(78);
          setCompletedCurrentStep(9);
          setCurrentStepName("Employment Details");
          setCurrentTotalStep(9);
          break;
        case 14:
          setProgress(84);
          setCurrentStepName("KYC Details");
          setCompletedCurrentStep(1);
          setCurrentTotalStep(3);
          break;
        case 15:
          setProgress(100);
          setCompletedCurrentStep(2);
          setCurrentStepName("KYC Details");
          break;
      }
    }
  }, [currentStep]);

  return (
    <main className={styles.personalLoanQuestionnairePage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <button
                onClick={() =>
                  currentStep !== 1 &&
                  setCurrentStep((prev) => {
                    if (loanData?.isPermenentAddressSame) {
                      return prev - 2;
                    } else {
                      return prev - 1;
                    }
                  })
                }
              >
                <ArrowLeftShort /> <span>Personal Loan</span>
              </button>
            </Col>
            <Col lg={12}>
              <PageTitle>Unlock Best Personal Loan Offers</PageTitle>
              <Text>
                Avail a Loan of Your Choice Instantly. Avail a Loan of Your
                Choice Instantly
              </Text>
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
              <PersonalLoanApplicationForm
                currentStep={currentStep}
                setCurrentStep={(val) => setCurrentStep(val)}
                progress={progress}
                setProgress={(val) => setProgress(val)}
                currentStepName={currentStepName}
                setCurrentStepName={(val) => setCurrentStepName(val)}
                currentTotalStep={currentTotalStep}
                setCurrentTotalStep={(val) => setCurrentTotalStep(val)}
                completedCurrentStep={completedCurrentStep}
                setCompletedCurrentStep={(val) => setCompletedCurrentStep(val)}
                completedSteps={completedSteps}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default PersonalLoanQuestionairreApplication;
