import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowLeft, ArrowLeftShort } from "react-bootstrap-icons";
import { PageTitle, Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";
import { CreditCardStepperForm, CustomImage } from "@components";
import { applyCreditCard, whiteKashti } from "@public/assets";

const Page = () => {
  return (
    <main className={styles.creditCardQuestionnairePage}>
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
                Credit Cards With No Hidden Costs for Complete Financial Freedom
              </PageTitle>
              <Text>
                Compare from multiple banks, filter based on your needs, and
                enjoy a paperless and
                <br /> instant application process.
              </Text>
            </Col>
          </Row>
        </Container>
        <CustomImage
          src={applyCreditCard}
          alt="Credit Card Questionnaire"
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
              <CreditCardStepperForm />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
