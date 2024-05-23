import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowLeft, ArrowLeftShort } from "react-bootstrap-icons";
import { PageTitle, Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";
import { CreditScoreStepperForm, CustomImage } from "@components";
import { applyCreditCard, creditReport, whiteKashti } from "@public/assets";

const Page = () => {
  return (
    <main className={styles.creditScorePage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Link href={routesConstant.CREDIT_CARDS}>
                <ArrowLeftShort /> <span>Credit Report</span>
              </Link>
            </Col>
            <Col lg={12}>
              <PageTitle>Get Your Credit Report Instantly</PageTitle>
              <Text>
                Explore 50+ credit cards or avail a loan of your choice with the
                new simplified application process
              </Text>
            </Col>
          </Row>
        </Container>
        <CustomImage
          src={creditReport}
          alt="Credit Report"
          className={styles.applyCreditCard}
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
              <CreditScoreStepperForm />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
