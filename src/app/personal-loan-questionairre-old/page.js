import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { PageTitle, Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";
import { CustomImage, PersonalLoanStepperForm } from "@components";
import { applyPersonalLoan, whiteKashti } from "@public/assets";

const Page = () => {
  return (
    <main className={styles.personalLoanQuestionnairePage}>
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
              <PageTitle>Instant Personal Loans Upto 5L.</PageTitle>
              <Text>
                Handpicked offers, paperless process, and money in your account
                in minutes.
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
              <PersonalLoanStepperForm />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
