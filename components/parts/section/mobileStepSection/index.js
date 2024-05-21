"use client";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle } from "@styles/styledComponent";
import MobileStepBox from "@components/parts/accordians/mobileStepBox";
import ExploreIcon from "@components/ui/svg/exploreIcon";
import BasicIcon from "@components/ui/svg/basicIcon";
import BestIcon from "@components/ui/svg/bestIcon";
import AlgorithmIcon from "@components/ui/svg/algorithmIcon";

const MobileStepSection = () => {
  const [active, setActive] = useState(2);
  const sectionData = [
    {
      id: 1,
      title: "Explore",
      icon: <ExploreIcon />,
      description:
        "With our simplified application process, enter only your basic details and avail a service of your choice.",
    },
    {
      id: 2,
      title: "Basic Info",
      icon: <BasicIcon />,
      description:
        "With our simplified application process, enter only your basic details and avail a service of your choice.",
    },
    {
      id: 3,
      title: "Pick the Best",
      icon: <BestIcon />,
      description:
        "With our simplified application process, enter only your basic details and avail a service of your choice.",
    },
    {
      id: 4,
      title: "Powerful Algorithm",
      icon: <AlgorithmIcon />,
      description:
        "With our simplified application process, enter only your basic details and avail a service of your choice.",
    },
  ];
  return (
    <section className={styles.mobileStepSection}>
      <Container>
        <Row>
          <Col>
            <SectionTitle>Quick Easy Steps For Using Kashti</SectionTitle>
            <ul>
              {sectionData.map((data, i) => (
                <MobileStepBox
                  title={data.title}
                  description={data.description}
                  id={data.id}
                  key={i}
                  currentQues={active === data.id ? true : false}
                  currentFaq={(val) => setActive(val)}
                  icon={data.icon}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MobileStepSection;
