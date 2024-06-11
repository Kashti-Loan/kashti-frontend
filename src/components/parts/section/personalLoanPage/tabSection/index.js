"use client";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const TabSection = (props) => {
  // const [activeTab, setActiveTab] = useState(1);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("active section ss", activeSection);
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
                  className={
                    activeSection === item?.link.replace(/#/g, "")
                      ? styles.active
                      : ""
                  }
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
