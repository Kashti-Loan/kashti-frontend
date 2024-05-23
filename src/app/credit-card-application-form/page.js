import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { PageTitle, Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";
import {
  CreditCardApplicationForm,
  CustomImage,
  DataSafetyIcon,
  GreenCheckIcon,
  GuardIcon,
  StepperContainer,
} from "@components";
import { demoCreditCard, demoGrpCard } from "@public/assets";

const Page = () => {
  return (
    <main className={styles.creditCardApplicationFormPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Link href={routesConstant.CREDIT_CARDS}>
                <ArrowLeftShort /> <span>Credit Cards</span>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={7} lg={7}>
              <PageTitle>SBI Credit Card</PageTitle>
              <ul className={styles.cardFeatureList}>
                <li>
                  <GreenCheckIcon />
                  <Text>
                    Annual Fee <b>₹12,500</b>
                  </Text>
                </li>
                <li>
                  <GreenCheckIcon />
                  <Text>
                    Joining Fee <b>₹500</b>
                  </Text>
                </li>
                <li>
                  <GreenCheckIcon />
                  <Text>
                    Upto <b>5%</b> off on Online Shoppinng
                  </Text>
                </li>
                <li>
                  <GreenCheckIcon />
                  <Text>
                    <b>10x</b> Rewards that don’t Expire
                  </Text>
                </li>
                <li>
                  <GreenCheckIcon />
                  <Text>
                    <b>3X</b> Rewards Points on all offline Spends
                  </Text>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={5} lg={4}>
              <CustomImage src={demoGrpCard} alt="Credit Card" />
              <CustomImage
                src={demoCreditCard}
                alt="Credit Card"
                className={styles.mobileImg}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.applicationFormSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <StepperContainer label={"Application Form"}>
                <CreditCardApplicationForm />
                <div className={styles.stepperDataInfoSection}>
                  <Text className={styles.submitConsent}>
                    By Submitting this form, You have read and agree to the{" "}
                    <Link href={"#"}>Credit Report</Link>,
                    <Link href={"#"}>Terms of Use</Link> and{" "}
                    <Link href={"#"}>Privacy Policy</Link>
                  </Text>
                  <Text className={styles.dataSafetyInfo}>
                    <DataSafetyIcon />
                    <span>
                      Your data’s safety is our top priority. It is secured by
                      cutting-edge encryption and stringent privacy protocols.
                    </span>
                  </Text>
                  <div className={styles.safetyFeatures}>
                    <h4 className={styles.featureName}>
                      <GuardIcon />
                      <span>Data Security Assurance</span>
                    </h4>
                    <h4 className={styles.featureName}>
                      <GuardIcon />
                      <span>Encrypted Transmission</span>
                    </h4>
                    <h4 className={styles.featureName}>
                      <GuardIcon />
                      <span>Secure Storage</span>
                    </h4>
                    <h4 className={styles.featureName}>
                      <GuardIcon />
                      <span>Transparent Practices</span>
                    </h4>
                  </div>
                </div>
              </StepperContainer>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
