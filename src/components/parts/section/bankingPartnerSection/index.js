"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle, Text } from "@styles/styledComponent";
import { useState } from "react";
import CustomImage from "@components/ui/customImage";
import {
  amex_bank,
  axis_bank,
  bajaj_finserv,
  cash,
  chola,
  crif,
  experian,
  fibe,
  hdfc_bank,
  icici_bank,
  indus_bank,
  kredit_bee,
  ltfinance,
  moneyV,
  mpokket,
  muthoot_fin,
  paysense,
  piramal,
  poonawal,
  sbi_bank,
  tata_capital,
} from "@public/assets";

const BankingPartnerSection = () => {
  const [currentTab, setCurrentTab] = useState("all");
  return (
    <div className={styles.bankingPartnerSection}>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle $textAlign="center">
              Our Banking Partners and NBFCs
            </SectionTitle>
            <Text $textAlign="center">
              We're here to connect you to your ideal financial partner. Our
              customised solutions, through strong partnerships with renowned
              banks and NBFCs, ensure you always receive the most relevant
              products at the most competitive prices.
            </Text>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className={styles.bankTabHeader}>
              <button
                onClick={() => setCurrentTab("all")}
                className={
                  currentTab === "all" ? styles.activeBtn : styles.inactiveBtn
                }
              >
                All
              </button>
              <button
                onClick={() => setCurrentTab("creditCards")}
                className={
                  currentTab === "creditCards"
                    ? styles.activeBtn
                    : styles.inactiveBtn
                }
              >
                Credit Cards
              </button>
              <button
                onClick={() => setCurrentTab("personalLoans")}
                className={
                  currentTab === "personalLoans"
                    ? styles.activeBtn
                    : styles.inactiveBtn
                }
              >
                Personal Loans
              </button>
              <button
                onClick={() => setCurrentTab("goldLoans")}
                className={
                  currentTab === "goldLoans"
                    ? styles.activeBtn
                    : styles.inactiveBtn
                }
              >
                Gold Loans
              </button>
              <button
                onClick={() => setCurrentTab("businessLoans")}
                className={
                  currentTab === "businessLoans"
                    ? styles.activeBtn
                    : styles.inactiveBtn
                }
              >
                Business Loans
              </button>
              <button
                onClick={() => setCurrentTab("bureau")}
                className={
                  currentTab === "bureau"
                    ? styles.activeBtn
                    : styles.inactiveBtn
                }
              >
                Bureau Partner
              </button>
            </div>
            {currentTab === "all" && (
              <div className={styles.bankLogoContent}>
                <div className={styles.logoContent}>
                  <CustomImage src={sbi_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={axis_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={hdfc_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={icici_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={amex_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={moneyV} />
                </div>
                {/* <div className={styles.logoContent}>
                  <CustomImage src={money_view} />
                </div> */}
                <div className={styles.logoContent}>
                  <CustomImage src={kredit_bee} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={tata_capital} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={indus_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={cash} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={paysense} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={mpokket} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={fibe} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={piramal} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={poonawal} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={chola} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={muthoot_fin} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={bajaj_finserv} />
                </div>
              </div>
            )}
            {currentTab === "personalLoans" && (
              <div className={styles.bankLogoContent}>
                <div className={styles.logoContent}>
                  <CustomImage src={tata_capital} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={indus_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={moneyV} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={paysense} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={mpokket} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={fibe} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={piramal} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={poonawal} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={cash} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={kredit_bee} />
                </div>
              </div>
            )}
            {currentTab === "creditCards" && (
              <div className={styles.bankLogoContent}>
                <div className={styles.logoContent}>
                  <CustomImage src={sbi_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={axis_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={hdfc_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={icici_bank} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={amex_bank} />
                </div>
              </div>
            )}
            {currentTab === "goldLoans" && (
              <div className={styles.bankLogoContent}>
                <div className={styles.logoContent}>
                  <CustomImage src={chola} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={muthoot_fin} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={bajaj_finserv} />
                </div>
              </div>
            )}
            {currentTab === "businessLoans" && (
              <div className={styles.bankLogoContent}>
                <div className={styles.logoContent}>
                  <CustomImage src={tata_capital} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={poonawal} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={ltfinance} />
                </div>
              </div>
            )}
            {currentTab === "bureau" && (
              <div className={styles.bankLogoContent}>
                <div className={styles.logoContent}>
                  <CustomImage src={crif} />
                </div>
                <div className={styles.logoContent}>
                  <CustomImage src={experian} />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BankingPartnerSection;
