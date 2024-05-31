import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle, Text } from "@styles/styledComponent";
import CalculatorBox from "@components/ui/calculatorBox";
import { calculatorData } from "@utils/data";

const CalculatorSection = (props) => {
  return (
    <div
      className={styles.calculatorSection}
      style={{ backgroundColor: props.bgColor || "var(--globalWhite)" }}
    >
      <Container>
        <Row>
          <Col xs={12} md={7} lg={7}>
            <SectionTitle>Calculators</SectionTitle>
            <Text>
              Quick, simple, and completely digital. India's favourite loan
              marketplace.
            </Text>
          </Col>
          <Col xs={12} md={5} lg={5}>
            <button className="secondaryBtn">View All Categories</button>
          </Col>
        </Row>
        <Row>
          {calculatorData &&
            calculatorData?.map((item, i) => {
              if (i <= 5) {
                return (
                  <Col xs={12} md={6} lg={4} key={i}>
                    <CalculatorBox
                      image={item?.image}
                      title={item?.title}
                      description={item?.description}
                      hoverColor={item?.hoverColor}
                    />
                  </Col>
                );
              }
            })}
        </Row>
        <Row>
          {calculatorData &&
            calculatorData?.map((item, i) => {
              if (i < 2) {
                return (
                  <Col xs={12} md={6} lg={4} key={i}>
                    <CalculatorBox
                      image={item?.image}
                      title={item?.title}
                      description={item?.description}
                      hoverColor={item?.hoverColor}
                    />
                  </Col>
                );
              }
            })}
        </Row>
        <Row>
          <Col lg={12}>
            <button className="secondaryBtn">View All Categories</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalculatorSection;
