"use client";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, Text } from "@styles/styledComponent";
import { address, email, phone, whiteKashti } from "@public/assets";
import { BlogBox, ContactForm, CustomImage, FaqBox } from "@components";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { blogsData, faqData } from "@utils/data";
import { ChevronRight, Search } from "react-bootstrap-icons";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <main className={styles.blogPage}>
      {/* Get in Touch */}
      <section className={styles.headerSection}>
        <Container style={{ backgroundImage: `url(${whiteKashti.src})` }}>
          <Row>
            <Col lg={12}>
              <Text className={styles.breadCrumbs}>
                <span>Resources</span>
                <ChevronRight />
                <span>Blogs</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <PageTitle>Blogs</PageTitle>
              <Text>Last Updated - 27th June, 2023</Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <button
                className={
                  !activeCategory ? styles.activeCategory : "notactive"
                }
                onClick={() => setActiveCategory(null)}
              >
                All
              </button>
              <button
                className={
                  activeCategory === "Loans"
                    ? styles.activeCategory
                    : "notactive"
                }
                onClick={() => setActiveCategory("Loans")}
              >
                Loans
              </button>
              <button
                className={
                  activeCategory === "Debt"
                    ? styles.activeCategory
                    : "notactive"
                }
                onClick={() => setActiveCategory("Debt")}
              >
                Debt
              </button>
              <button
                className={
                  activeCategory === "Finance"
                    ? styles.activeCategory
                    : "notactive"
                }
                onClick={() => setActiveCategory("Finance")}
              >
                Finance
              </button>
              <button
                className={
                  activeCategory === "Investment"
                    ? styles.activeCategory
                    : "notactive"
                }
                onClick={() => setActiveCategory("Investment")}
              >
                Investment
              </button>
            </Col>
          </Row>
          <Row>
            {blogsData.map((item, i) => (
              <Col xs={12} md={6} lg={4} key={i}>
                <BlogBox
                  featuredImage={item.featured_image}
                  name={item.name}
                  excerpt={item.excerpt}
                  createdUser={item.created_user}
                  createdDate={item.created_date}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <button className="secondaryBtn">View More Blogs</button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
