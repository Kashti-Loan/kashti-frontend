"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { PageTitle, Text } from "@styles/styledComponent";
import { CustomImage, LoanOffer } from "@components";
import { applyPersonalLoan, loadingLogo, whiteKashti } from "@public/assets";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { useLayoutEffect, useState } from "react";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { useRouter } from "next/navigation";
import moment from "moment";

const Page = () => {
  const router = useRouter();
  const { getPreApprovedLoans, realTimeLeadPush, leadDetail } =
    usePersonalLoan();
  const [preApprovedLoanOffers, setPreapprovedLoanOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const loanOffers = localStorage.getItem("pl_loan_offer");
    if (loanOffers) {
      setPreapprovedLoanOffers(JSON.parse(loanOffers));
      setIsLoading(false);
    } else {
      if (leadDetail?.leadData?.id) {
        getLoanList();
      } else {
        router.replace(routesConstant.PERSONAL_LOAN_QUESTIONAIRRE);
      }
    }
  }, []);

  const getLoanList = async () => {
    const leadPush = await realTimeLeadPush();
    const loanOffersList = await getPreApprovedLoans();
    localStorage.setItem("pl_loan_offer", JSON.stringify(loanOffersList));
    localStorage.setItem("pl_loan_expiry", moment().add(1, "hours"));
    setPreapprovedLoanOffers(loanOffersList);
    setIsLoading(false);
  };

  const handleNewLoanApplication = () => {
    localStorage.removeItem("pl_loan_offer");
    localStorage.removeItem("pl_loan_expiry");
    router.replace(routesConstant.PERSONAL_LOAN_QUESTIONAIRRE);
  };

  return (
    <main className={styles.personalLoanOffer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              {/* <Link href={routesConstant.PERSONAL_LOAN}>
                <ArrowLeftShort /> <span>Personal Loan</span>
              </Link> */}
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
      {!isLoading ? (
        <>
          {preApprovedLoanOffers && preApprovedLoanOffers.length > 0 ? (
            <section className={styles.contentSection}>
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className={styles.offersContent}>
                      {preApprovedLoanOffers &&
                        preApprovedLoanOffers.map((item, i) => (
                          <LoanOffer item={item} key={i} />
                        ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}

          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              type="button"
              onClick={handleNewLoanApplication}
              className="primaryBtn"
            >
              Start New Loan Application
            </button>
          </div>
        </>
      ) : (
        <div className={`${styles.loader}`}>
          <CustomImage
            src={loadingLogo}
            alt="Kashti-Logo-1"
            className={`${styles.kashtiLogo}`}
          />
          <p>Loading you pathway to financial empowerment - won't take long</p>
        </div>
      )}
    </main>
  );
};

export default Page;
