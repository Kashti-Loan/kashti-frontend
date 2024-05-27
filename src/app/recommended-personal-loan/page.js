"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";
import {
  CustomImage,
  InputRange,
  PersonalLoanCard,
  StepperContainer,
} from "@components";
import { applyPersonalLoan, whiteKashti } from "@public/assets";
import { useEffect, useState } from "react";
import { personalLoanData } from "@utils/data";
import PersonalLoanDetailBox from "@components/parts/accordians/personalLoanDetailbox";
import { usePersonalLoan } from "@context/PersonalLoanContext";

const Page = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanPeriod, setLoanPeriod] = useState(2);
  const [interestRate, setInterestRate] = useState(15);
  const [activeFilter, setActiveFilter] = useState(1);
  const [active, setActive] = useState(0);
  const { getPreApprovedLoans } = usePersonalLoan();

  useEffect(() => {
    getPreApprovedLoans();
  }, []);

  return (
    <main className={styles.recommendedLoanPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Link href={routesConstant.PERSONAL_LOAN}>
                <ArrowLeftShort /> <span>Personal Loan</span>
              </Link>
            </Col>
            <Col lg={12}>
              <PageTitle>
                3 Personal Loan Recommendations Based on your Profile
              </PageTitle>
              <Text>
                Explore the loans, assess unique advantages, and effortlessly
                avail a loan.
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

      {/* Questionnaire Section */}
      <section className={styles.questionairreSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <StepperContainer
                className={styles.loanListSection}
                label={"Avail a Loan of Your Choice Instantly"}
                color={"#FBCAA4"}
                cornerColor={"#F79446"}
              >
                <div className={styles.rangeFilterSection}>
                  <SectionTitle>Modify Preferences</SectionTitle>
                  <div className={styles.sliderBlock}>
                    <div className={styles.sliderBox}>
                      <div className={styles.loanInputBox}>
                        <div className={styles.loanInputLabel}>
                          <label>Loan Amount</label>
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
                    </div>
                    <div className={styles.sliderBox}>
                      <div className={styles.loanInputBox}>
                        <div className={styles.loanInputLabel}>
                          <label>Loan Period</label>
                          <span>{loanPeriod} Year</span>
                        </div>
                        <div className={styles.loanInput}>
                          <InputRange
                            onChange={(val) => setLoanPeriod(val)}
                            max={"5"}
                            value={loanPeriod}
                            className={styles.loanRangeSlider}
                          />
                        </div>
                        <div className={styles.minMaxBox}>
                          <Text>
                            Min <b>1 Year</b>
                          </Text>
                          <Text>
                            Max <b>5 Years</b>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sliderBox}>
                      <div className={styles.loanInputBox}>
                        <div className={styles.loanInputLabel}>
                          <label>Interest Rate</label>
                          <span>{interestRate}%</span>
                        </div>
                        <div className={styles.loanInput}>
                          <InputRange
                            onChange={(val) => setInterestRate(val)}
                            max={"25"}
                            value={interestRate}
                            className={styles.loanRangeSlider}
                          />
                        </div>
                        <div className={styles.minMaxBox}>
                          <Text>
                            Min <b>12%</b>
                          </Text>
                          <Text>
                            Max <b>25%</b>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobileRangeFilterSection}>
                  <div className={styles.mobileRangeHeader}>
                    <button
                      className={
                        activeFilter === 1
                          ? styles.activeFilter
                          : styles.notActiveFilter
                      }
                      onClick={() => setActiveFilter(1)}
                    >
                      Loan Amount
                    </button>
                    <button
                      className={
                        activeFilter === 2
                          ? styles.activeFilter
                          : styles.notActiveFilter
                      }
                      onClick={() => setActiveFilter(2)}
                    >
                      Loan Period
                    </button>
                    <button
                      className={
                        activeFilter === 3
                          ? styles.activeFilter
                          : styles.notActiveFilter
                      }
                      onClick={() => setActiveFilter(3)}
                    >
                      Interest Rate
                    </button>
                  </div>
                  {activeFilter === 1 && (
                    <div className={styles.sliderBox}>
                      <div className={styles.loanInputBox}>
                        <div className={styles.loanInputLabel}>
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
                    </div>
                  )}
                  {activeFilter === 2 && (
                    <div className={styles.sliderBox}>
                      <div className={styles.loanInputBox}>
                        <div className={styles.loanInputLabel}>
                          <span>{loanPeriod} Year</span>
                        </div>
                        <div className={styles.loanInput}>
                          <InputRange
                            onChange={(val) => setLoanPeriod(val)}
                            max={"5"}
                            value={loanPeriod}
                            className={styles.loanRangeSlider}
                          />
                        </div>
                        <div className={styles.minMaxBox}>
                          <Text>
                            Min <b>1 Year</b>
                          </Text>
                          <Text>
                            Max <b>5 Years</b>
                          </Text>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeFilter === 3 && (
                    <div className={styles.sliderBox}>
                      <div className={styles.loanInputBox}>
                        <div className={styles.loanInputLabel}>
                          <span>{interestRate}%</span>
                        </div>
                        <div className={styles.loanInput}>
                          <InputRange
                            onChange={(val) => setInterestRate(val)}
                            max={"25"}
                            value={interestRate}
                            className={styles.loanRangeSlider}
                          />
                        </div>
                        <div className={styles.minMaxBox}>
                          <Text>
                            Min <b>12%</b>
                          </Text>
                          <Text>
                            Max <b>25%</b>
                          </Text>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {personalLoanData &&
                  personalLoanData.map((item, i) => (
                    <PersonalLoanDetailBox
                      name={item.name}
                      image={item.image}
                      description={item.description}
                      features={item.features}
                      others={item.others}
                      themeColor={item.themeColor}
                      currentQues={active === item.id ? true : false}
                      key={i}
                    />
                  ))}
              </StepperContainer>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
