"use client";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle, Text } from "@styles/styledComponent";
import InputRange from "@components/ui/inputRange";
import { getEmiAmount } from "@utils/helper";
import DoughnutChart from "@components/parts/charts/doughnutChart";
import Link from "next/link";

const EmiCalculator = (props) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRateAmount, setInterestRateAmount] = useState(15);
  const [tenure, setTenure] = useState(5);
  const [calculatedData, setCalculatedData] = useState({
    totalAmountPaid: 0,
    principleAmount: 0,
    interestPayable: 0,
    monthlyEmi: 0,
  });

  useEffect(() => {
    const calculatedValues = {
      totalAmountPaid:
        parseInt(loanAmount) +
        parseFloat(((interestRateAmount / 100) * loanAmount).toFixed(2)),
      principleAmount: parseFloat(loanAmount),
      interestPayable: parseFloat(
        ((interestRateAmount / 100) * loanAmount).toFixed(2)
      ),
      monthlyEmi: getEmiAmount(loanAmount, interestRateAmount, tenure),
    };
    setCalculatedData((prev) => ({ ...prev, ...calculatedValues }));
  }, [loanAmount, interestRateAmount, tenure]);

  console.log("calc values", calculatedData);

  return (
    <section
      className={styles.emiCalcSection}
      style={{ backgroundColor: props.color ? props.color : "transparent" }}
      id={props.id || ""}
    >
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <SectionTitle>Installments Made Easy</SectionTitle>
            <div className={styles.emiCalcSliderBlock}>
              <div className={styles.emiCalcSliderBox}>
                <div className={styles.emiCalcSliderLabel}>
                  <label>Loan Amount (₹)</label>
                  <span>{loanAmount.toLocaleString("en-IN")}</span>
                </div>
                <div className={styles.emiCalcSliderInput}>
                  <InputRange
                    onChange={(val) => setLoanAmount(val)}
                    max={"1000000"}
                    value={loanAmount}
                  />
                </div>
              </div>
              <div className={styles.emiCalcSliderBox}>
                <div className={styles.emiCalcSliderLabel}>
                  <label>Interest Rate (%)</label>
                  <span>{interestRateAmount}</span>
                </div>
                <div className={styles.emiCalcSliderInput}>
                  <InputRange
                    onChange={(val) => setInterestRateAmount(val)}
                    max={"100"}
                    value={interestRateAmount}
                  />
                </div>
              </div>
              <div className={styles.emiCalcSliderBox}>
                <div className={styles.emiCalcSliderLabel}>
                  <label>Tenure (months)</label>
                  <span>{tenure}</span>
                </div>
                <div className={styles.emiCalcSliderInput}>
                  <InputRange
                    onChange={(val) => setTenure(val)}
                    max={"1000"}
                    value={tenure}
                  />
                </div>
              </div>
            </div>
            <Text className={styles.emiNote}>
              <b>Note:</b> The calculation is a sample. Do complete the
              eligibility check to get accurate results.
            </Text>
            <div className={styles.mobileElgibleBtn}>
              <Text>
                <b>Note:</b> The calculation is a sample. Do complete the
                eligibility check to get accurate results.
              </Text>
              <Link href="#" className="secondaryBtn">
                Check My Eligibility
              </Link>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            {/* <ul>
              <li>
                Total Amount Paid:{" "}
                {parseInt(loanAmount) +
                  parseFloat(((interestRateAmount / 100) * loanAmount).toFixed(2))}
              </li>
              <li>Principle Amount: {loanAmount}</li>
              <li>
                Interest Payable:{" "}
                {((interestRateAmount / 100) * loanAmount).toFixed(2)}
              </li>
              <li>
                Monthly EMI:{" "}
                {getEmiAmount(loanAmount, interestRateAmount, tenure)}
              </li>
            </ul> */}
            <SectionTitle>EMI Calculator for Personal Loan</SectionTitle>
            <div className={styles.chartBlock}>
              <DoughnutChart data={calculatedData} />
              <div
                className={styles.netMonthlyPayable}
                style={{
                  backgroundColor: props.color ? props.color : "transparent",
                }}
              >
                <Text>
                  Monthly EMI to be Paid:{" "}
                  <span>{`₹${calculatedData.monthlyEmi.toLocaleString(
                    "en-IN"
                  )}`}</span>{" "}
                </Text>
                <button className="secondaryBtn">Check My Eligibility</button>
              </div>
            </div>
            <div className={styles.mobileNetMonthlyPayable}>
              <Text>
                Monthly EMI to be Paid:{" "}
                <span>{`₹${calculatedData.monthlyEmi.toLocaleString(
                  "en-IN"
                )}`}</span>{" "}
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmiCalculator;
