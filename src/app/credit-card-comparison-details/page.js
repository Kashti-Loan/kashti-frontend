"use client";
import { PageTitle, SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { useSearchParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { Checkbox, ComparisonCardBox, ComparisonDetailBox } from "@components";
import { useState } from "react";

const Page = () => {
  const router = useSearchParams();
  const data = JSON.parse(router.get("data"));
  const [annualCharge, setAnnualCharge] = useState(true);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(true);
  const [rewards, setRewards] = useState(true);
  const [rewardsExpiry, setRewardsExpiry] = useState(false);
  const [atmInterest, setAtmInterest] = useState(false);
  const [creditScore, setCreditScore] = useState(false);
  const [greatFor, setGreatFor] = useState(false);
  const [bonusOffer, setBonusOffer] = useState(false);
  const [pros, setPros] = useState(false);
  const [cons, setCons] = useState(false);
  // console.log("search para", data);
  return (
    <main className={styles.comparisonPage}>
      <Container>
        <Row className={styles.pageHeader}>
          <Col lg={12}>
            <SectionTitle>Credit Card Comparison Details</SectionTitle>
          </Col>
        </Row>
        <Row className={styles.cardContainer}>
          <Col lg={3}>
            <div className={styles.compareCardList}>
              <div>
                <h3>Compare {data && `(${data.length})`}</h3>
                <ol>
                  {data && data.map((item, i) => <li key={i}>{item.name}</li>)}
                </ol>
              </div>
              <div>
                <Checkbox label="Show only differences" />
              </div>
            </div>
          </Col>
          <Col lg={9}>
            {data &&
              data.map((item, i) => (
                <ComparisonCardBox
                  key={i}
                  image={item.image}
                  theme={item.theme_color}
                  name={item.name}
                  creditScore={item.credit_score}
                />
              ))}
          </Col>
        </Row>
        <Row className={styles.mobileShowDifference}>
          <Col xs={12} md={12} lg={12}>
            <Checkbox label="Show only differences" />
          </Col>
        </Row>
        <Row className={styles.featuresContainer}>
          <Col>
            <table>
              <thead>
                <tr>
                  <th colSpan={data.length + 1}>Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual Charges</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Monthly Interest Rate</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Rewards</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Rewards Expiry</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Interest on ATM Cash Withdrawal</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Credit Score</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Great for</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Bonus Offer</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Pros</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Cons</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className={styles.mobileFeatureContainer}>
          <Col xs={12}>
            <ComparisonDetailBox
              event={annualCharge}
              onEventChange={() => setAnnualCharge((prev) => !prev)}
              title="Annual Charges"
              comparisonOne="₹1500"
              comparisonTwo="₹1500"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={monthlyInterestRate}
              onEventChange={() => setMonthlyInterestRate((prev) => !prev)}
              title="Monthly Interest Rate"
              comparisonOne="3%"
              comparisonTwo="3%"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={rewards}
              onEventChange={() => setRewards((prev) => !prev)}
              title="Rewards"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={rewardsExpiry}
              onEventChange={() => setRewardsExpiry((prev) => !prev)}
              title="Rewards Expiry"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={atmInterest}
              onEventChange={() => setAtmInterest((prev) => !prev)}
              title="Interest on ATM Cash Withdrawal"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={creditScore}
              onEventChange={() => setCreditScore((prev) => !prev)}
              title="Credit Score"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={greatFor}
              onEventChange={() => setGreatFor((prev) => !prev)}
              title="Great for"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={bonusOffer}
              onEventChange={() => setBonusOffer((prev) => !prev)}
              title="Bonus Offer"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={pros}
              onEventChange={() => setPros((prev) => !prev)}
              title="Pros"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={cons}
              onEventChange={() => setCons((prev) => !prev)}
              title="Cons"
              comparisonOne="10 reward points on every ₹250 spent"
              comparisonTwo="10 reward points on every ₹250 spent"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Page;
