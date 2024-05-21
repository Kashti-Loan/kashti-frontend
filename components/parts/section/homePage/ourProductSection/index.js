'use client'
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle } from "@styles/styledComponent";
import { homeProductData } from "@utils/data";
import ProductCard from "@components/ui/productCard";

const OurProductSection = () => {
  return (
    <section className={styles.ourProductSection}>
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitle>Our Products</SectionTitle>
              </Col>
            </Row>
            <Row>
              {homeProductData.map((item, i) => (
                <Col xs={12} md={3} lg={3} key={i}>
                  <ProductCard
                    title={item.title}
                    description={item.description}
                    range={item.range}
                    cta_data={item.cta_data}
                    icon={item.icon}
                  />
                </Col>
              ))}
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col>
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col>
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col>
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col>
            </Row>
          </Container>
        </section>
  )
}

export default OurProductSection;