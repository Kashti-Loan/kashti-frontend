"use client";
import { PageTitle, SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { Checkbox, ComparisonCardBox, ComparisonDetailBox } from "@components";
import { useState } from "react";
import { routesConstant } from "@utils/routesConstant";
import {
  capitalize,
  createCreditCardCompareUrl,
  objectToParams,
} from "@utils/constant";
import { allCreditCardsList } from "@utils/data";

const Page = () => {
  const routerParams = useSearchParams();
  const router = useRouter();
  const cardOne = routerParams.get("cardone");
  const cardTwo = routerParams.get("cardtwo");
  const cardThree = routerParams.get("cardthree");
  let data = [];
  let cardOneData = null;
  let cardTwoData = null;
  let cardThreeData = null;
  if (cardOne) {
    cardOneData = allCreditCardsList.find((card) => card.name === cardOne);
    data.push(cardOneData);
  }
  if (cardTwo) {
    cardTwoData = allCreditCardsList.find((card) => card.name === cardTwo);
    data.push(cardTwoData);
  }
  if (cardThree) {
    cardThreeData = allCreditCardsList.find((card) => card.name === cardThree);
    data.push(cardThreeData);
  }
  console.log("data", data);

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
              {/* <div>
                <Checkbox label="Show only differences" />
              </div> */}
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
                  removeCard={() => {
                    const cardsTempList = data.filter(
                      (card) => card.name != item.name
                    );
                    if (cardsTempList.length > 0) {
                      router.push(
                        `${
                          routesConstant.CREDIT_CARD_COMPARISON
                        }?${objectToParams(
                          createCreditCardCompareUrl(cardsTempList)
                        )}`
                      );
                    } else {
                      router.push(routesConstant.CREDIT_CARD_QUESTIONAIRRE);
                    }
                  }}
                />
              ))}
          </Col>
        </Row>
        <Row className={styles.mobileShowDifference}>
          {/* <Col xs={12} md={12} lg={12}>
            <Checkbox label="Show only differences" />
          </Col> */}
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
                  <td>Joining Fee</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.joining_fee}</td>)}
                </tr>
                <tr>
                  <td>Annual Fee</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Credit Score</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Benefits</td>
                  {data &&
                    data.map((item, i) => (
                      <td key={i}>{capitalize(item.types.join(", "))}</td>
                    ))}
                </tr>
                <tr>
                  <td>Features</td>
                  {data &&
                    data.map((item, i) => (
                      <td key={i}>
                        <ul>
                          {item.features
                            ? item.features.map((item, i) => (
                                <li key={i}>{item}.</li>
                              ))
                            : "-"}
                        </ul>
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>Welcome Offer</td>
                  {data &&
                    data.map((item, i) => (
                      <td key={i}>
                        <ul>
                          {item.welcome_benefits
                            ? item.welcome_benefits.map((item, i) => (
                                <li key={i}>{item}.</li>
                              ))
                            : "-"}
                        </ul>
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className={styles.mobileFeatureContainer}>
          <Col xs={12}>
            <ComparisonDetailBox
              event={monthlyInterestRate}
              onEventChange={() => setMonthlyInterestRate((prev) => !prev)}
              title="Joining Fee"
              comparisonOne={`${cardOneData?.joining_fee != "Free" ? "₹" : ""}${
                cardOneData?.joining_fee
              }`}
              comparisonTwo={`${cardTwoData?.joining_fee != "Free" ? "₹" : ""}${
                cardTwoData?.joining_fee
              }`}
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={annualCharge}
              onEventChange={() => setAnnualCharge((prev) => !prev)}
              title="Annual Charges"
              comparisonOne={`${cardOneData?.annual_fee != "Free" ? "₹" : ""}${
                cardOneData?.annual_fee
              }`}
              comparisonTwo={`${cardTwoData?.annual_fee != "Free" ? "₹" : ""}${
                cardTwoData?.annual_fee
              }`}
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={creditScore}
              onEventChange={() => setCreditScore((prev) => !prev)}
              title="Credit Score"
              comparisonOne={cardOneData?.credit_score}
              comparisonTwo={cardTwoData?.credit_score}
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={greatFor}
              onEventChange={() => setGreatFor((prev) => !prev)}
              title="Benefits"
              comparisonOne={capitalize(cardOneData?.types.join(", "))}
              comparisonTwo={capitalize(cardTwoData?.types.join(", "))}
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={bonusOffer}
              onEventChange={() => setBonusOffer((prev) => !prev)}
              title="Features"
              comparisonOne={
                <ul>
                  {cardOneData?.features
                    ? cardOneData?.features.map((item, i) => (
                        <li key={i}>{item}.</li>
                      ))
                    : "-"}
                </ul>
              }
              comparisonTwo={
                <ul>
                  {cardTwoData?.features
                    ? cardTwoData?.features.map((item, i) => (
                        <li key={i}>{item}.</li>
                      ))
                    : "-"}
                </ul>
              }
            />
          </Col>
          <Col xs={12}>
            <ComparisonDetailBox
              event={pros}
              onEventChange={() => setPros((prev) => !prev)}
              title="Welcome Offer"
              comparisonOne={
                <ul>
                  {cardOneData?.welcome_benefits
                    ? cardOneData?.welcome_benefits.map((item, i) => (
                        <li key={i}>{item}.</li>
                      ))
                    : "-"}
                </ul>
              }
              comparisonTwo={
                <ul>
                  {cardTwoData?.welcome_benefits
                    ? cardTwoData?.welcome_benefits.map((item, i) => (
                        <li key={i}>{item}.</li>
                      ))
                    : "-"}
                </ul>
              }
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Page;
