"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const TabSection = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section
      className={styles.tabSection}
      style={{ backgroundColor: props.color || "#fff" }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.tabBlock}>
              {props.data.map((item, i) => (
                <a
                  href={item.link}
                  className={activeTab === item.id ? styles.active : ""}
                  onClick={() => setActiveTab(item.id)}
                  key={i}
                  style={{ backgroundColor: props.color || "#fff" }}
                >
                  {item.name}
                </a>
              ))}
              <Link href={props.applyLink || "#"}>Apply Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TabSection;
