"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, Text } from "@styles/styledComponent";
import { address, email, phone, whiteKashti } from "@public/assets";
import { ContactForm, CustomImage, FaqBox } from "@components";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { creditCardFaq, faqData, homeFaq, personalLoanFaq } from "@utils/data";
import { ChevronRight, Search } from "react-bootstrap-icons";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [active, setActive] = useState(2);
  const searchParams = useSearchParams();
  const [activeFaq, setActiveFaq] = useState(
    searchParams.get("tab") === "credit_card"
      ? "credit_card"
      : searchParams.get("tab") === "loans"
      ? "loans"
      : searchParams.get("tab") === "kashti"
      ? "kashti"
      : "kashti"
  );

  console.log("current faq", activeFaq);
  return (
    <main className={styles.faqPage}>
      {/* Get in Touch */}
      <section className={styles.headerSection}>
        <Container style={{ backgroundImage: `url(${whiteKashti.src})` }}>
          <Row>
            <Col lg={12}>
              <Text className={styles.breadCrumbs}>
                <span>Resources</span>
                <ChevronRight />
                <span>FAQ</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <PageTitle>Frequently Asked Questions </PageTitle>
              {/* <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </Text> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.questionSection}>
        <Container>
          <Row>
            <Col lg={12}>
              {/* <div className={styles.searchBox}>
                <input type="text" placeholder="Search..." />
                <Search />
              </div> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} lg={3}>
              <div>
                <button
                  type="button"
                  className={
                    activeFaq === "loans" ? styles.activeFaq : "notActiveFaq"
                  }
                  onClick={() => setActiveFaq("loans")}
                >
                  Personal Loan
                </button>
                <button
                  type="button"
                  className={
                    activeFaq === "credit_card"
                      ? styles.activeFaq
                      : "notActiveFaq"
                  }
                  onClick={() => setActiveFaq("credit_card")}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  className={
                    activeFaq === "kashti" ? styles.activeFaq : "notActiveFaq"
                  }
                  onClick={() => setActiveFaq("kashti")}
                >
                  Kashti
                </button>
              </div>
            </Col>
            <Col xs={12} md={8} lg={9}>
              <div className={styles.questionBox}>
                <ul>
                  {/* {faqData.map((data, i) => (
                    <FaqBox
                      title={data.title}
                      description={data.description}
                      id={data.id}
                      key={i}
                      currentQues={active === data.id ? true : false}
                      currentFaq={(val) => setActive(val)}
                      activeColor={"#F8F9FF"}
                    />
                  ))} */}
                  {activeFaq === "credit_card" &&
                    creditCardFaq.map((data, i) => (
                      <FaqBox
                        title={data.title}
                        description={data.description}
                        id={data.id}
                        key={i}
                        currentQues={active === data.id ? true : false}
                        currentFaq={(val) => setActive(val)}
                        activeColor={"#F8F9FF"}
                      />
                    ))}
                  {activeFaq === "loans" &&
                    personalLoanFaq.map((data, i) => (
                      <FaqBox
                        title={data.title}
                        description={data.description}
                        id={data.id}
                        key={i}
                        currentQues={active === data.id ? true : false}
                        currentFaq={(val) => setActive(val)}
                        activeColor={"#F8F9FF"}
                      />
                    ))}
                  {activeFaq === "kashti" &&
                    homeFaq.map((data, i) => (
                      <FaqBox
                        title={data.title}
                        description={data.description}
                        id={data.id}
                        key={i}
                        currentQues={active === data.id ? true : false}
                        currentFaq={(val) => setActive(val)}
                        activeColor={"#F8F9FF"}
                      />
                    ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
