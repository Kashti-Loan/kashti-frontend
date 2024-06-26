"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle } from "@styles/styledComponent";
import { faqData } from "@utils/data";
import FaqBox from "@components/parts/accordians/faqBox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routesConstant } from "@utils/routesConstant";

const FaqSection = (props) => {
  const [active, setActive] = useState(1);
  const router = useRouter();

  function handleClick(tab) {
    router.push(`${routesConstant.FAQ}/?tab=${props.tab}`);
  }

  return (
    <section
      className={`${styles.faqSection} ${
        props.className ? props.className : ""
      }`}
      id={props.id || ""}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle>Frequently Asked Questions </SectionTitle>
            <ul>
              {props?.content
                ? props?.content.map((data, i) => (
                    <FaqBox
                      title={data.title}
                      description={data.description}
                      id={data.id}
                      key={i}
                      currentQues={active === data.id ? true : false}
                      currentFaq={(val) => setActive(val)}
                      activeColor={props.activeColor}
                    />
                  ))
                : faqData.map((data, i) => (
                    <FaqBox
                      title={data.title}
                      description={data.description}
                      id={data.id}
                      key={i}
                      currentQues={active === data.id ? true : false}
                      currentFaq={(val) => setActive(val)}
                      activeColor={props.activeColor}
                    />
                  ))}
            </ul>
            <div className={styles.viewAllBtn}>
              <button className="secondaryBtn" onClick={handleClick}>
                View All FAQs
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;
