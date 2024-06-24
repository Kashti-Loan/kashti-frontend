import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { Text } from "@styles/styledComponent";

const BottomFooter = () => {
  return (
    <section className={styles.bottomFooter}>
      <Container>
        <Row>
          <Col>
            <Text>© 2024 | All Rights Reserved</Text>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BottomFooter;
