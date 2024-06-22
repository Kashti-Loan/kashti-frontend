import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { PageTitle, Text } from "@styles/styledComponent";
import { CustomImage, LoanOffer } from "@components";
import { applyPersonalLoan, whiteKashti } from "@public/assets";
import { ArrowLeftShort } from "react-bootstrap-icons";

const Page = () => {
  return (
    <main className={styles.personalLoanOffer}>
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
              <PageTitle>Congratulations!</PageTitle>
              <Text>
                Your loan request has been approved. Complete your KYC process
                to receive loan amount.
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
      <section className={styles.contentSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.offersContent}>
                <LoanOffer />
                <LoanOffer />
                <LoanOffer />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
