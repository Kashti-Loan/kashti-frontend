"use client";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import { address, email, phone, whiteKashti } from "@public/assets";
import { PressReleaseBox } from "@components";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { pressData } from "@utils/data";
import { ChevronRight, Search } from "react-bootstrap-icons";

const Page = () => {
  return (
    <main className={styles.pressReleasePage}>
      {/* Get in Touch */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Text className={styles.breadCrumbs}>
                <span>Resources</span>
                <ChevronRight />
                <span>Press Release</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <PageTitle>Press Release</PageTitle>
              <Text>Last Updated - 27th June, 2023</Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <Container>
          <Row>
            <Col xs={6} lg={6}>
              <SectionTitle>Featured</SectionTitle>
            </Col>
            <Col xs={6} lg={6}>
              <select>
                <option>Newest</option>
                <option>Newest</option>
                <option>Newest</option>
                <option>Newest</option>
                <option>Newest</option>
              </select>
            </Col>
          </Row>
          <Row>
            {pressData.map((item, i) => (
              <Col xs={12} md={6} lg={4} key={i}>
                <PressReleaseBox
                  featuredImage={item.featured_image}
                  name={item.name}
                  excerpt={item.excerpt}
                  createdUser={item.created_user}
                  createdDate={item.created_date}
                  pressName={item.news}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <button className="secondaryBtn">View More Articles</button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
