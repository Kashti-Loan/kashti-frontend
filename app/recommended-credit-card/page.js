"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowLeftShort,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";
import { PageTitle, Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";
import {
  CreditCardDetailBox,
  CreditCardStepperForm,
  CustomImage,
  StepperContainer,
} from "@components";
import {
  applyCreditCard,
  contactUs,
  supportImg,
  whiteKashti,
} from "@public/assets";
import { allCreditCardData } from "@utils/data";

const Page = () => {
  const [active, setActive] = useState(null);
  return (
    <main className={styles.recommendedCardPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Link href={routesConstant.CREDIT_CARDS}>
                <ArrowLeftShort /> <span>Credit Cards</span>
              </Link>
            </Col>
            <Col lg={12}>
              <PageTitle>
                3{" "}
                <span style={{ color: "var(--secondaryColor)" }}>
                  Credit Card
                </span>{" "}
                Recommendations Based on your Profile
              </PageTitle>
              <Text>
                Explore 50+ credit cards, assess unique advantages, and
                effortlessly find your ideal card.
              </Text>
            </Col>
          </Row>
        </Container>
        <CustomImage
          src={whiteKashti}
          alt="White Kashti"
          className={styles.whiteKashti}
        />
      </section>

      {/* Questionnaire Section */}
      <section className={styles.cardList}>
        <Container>
          <Row>
            <Col lg={12}>
              <StepperContainer label={"Find Your Credit Card Instantly"}>
                <ul>
                  {allCreditCardData &&
                    allCreditCardData.map((item, i) => (
                      <CreditCardDetailBox
                        key={i}
                        id={item.id}
                        theme={item.theme_color}
                        currentQues={active === item.id ? true : false}
                        currentFaq={(val) => setActive(val)}
                        name={item.name}
                        type={item.type}
                        image={item.image}
                        cardType={item.card_type}
                        annualFee={item.annual_fee}
                        joiningFee={item.joining_fee}
                        creditScore={item.credit_score}
                        features={item.features}
                        welcomeBenefits={item.welcome_benefits}
                        // onCompare={addCompareHandler}
                        // isCompared={
                        //   compareData.findIndex(
                        //     (obj) =>
                        //       obj.id === item.id && obj.name === item.name
                        //   ) !== -1
                        //     ? true
                        //     : false
                        // }
                      />
                    ))}
                </ul>
              </StepperContainer>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Help & Support Section */}
      <section className={styles.supportSection}>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className={styles.supportBox}>
                <div>
                  <h3>
                    Too many options to choose from? Let us simplify it for you!
                  </h3>
                  <Text>Why are you waiting talk to our expert</Text>
                  <Link href={"#"} className={"secondaryBtn"}>
                    Talk to an Expert
                  </Link>
                </div>
                <div>
                  <CustomImage src={supportImg} alt="Help & Support" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className={styles.supportBox}>
                <div>
                  <h3>Feel free to Contact Us</h3>
                  <ul className={styles.contactList}>
                    <li>
                      <Link href="tel:+91-9876543210">
                        <Telephone /> <span>+91-9876543210</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:kashtifinservices@gmail.com">
                        <Envelope /> <span>kashtifinservices@gmail.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <CustomImage src={contactUs} alt="Contact Us" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
