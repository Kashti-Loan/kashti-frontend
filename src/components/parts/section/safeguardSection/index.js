"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle, Text } from "@styles/styledComponent";
// import CustomImage from "@components/ui/customImage";
import { safeguard } from "@public/assets";
import GuardIcon from "@components/ui/svg/guardIcon";
import GuardBox from "@components/parts/accordians/guardBox";
import { safeguardData } from "@utils/data";
import NormalImage from "@components/ui/image";

const SafeguardSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className={styles.safeGuardSection}>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={7}>
            <SectionTitle>Safeguarding Your Data, Always!</SectionTitle>
            <ul className={styles.safeGuardPointer}>
              {safeguardData.map((data, i) => (
                <GuardBox
                  title={data.title}
                  description={data.description}
                  id={data.id}
                  key={i}
                  currentQues={active === data.id ? true : false}
                  currentFaq={(val) => setActive(val)}
                />
              ))}
            </ul>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <NormalImage src={safeguard} alt="Safeguarding Your Data Always" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SafeguardSection;
