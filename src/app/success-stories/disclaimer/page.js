import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, Text } from "@styles/styledComponent";
import { ChevronRight } from "react-bootstrap-icons";
import { whiteKashti } from "@public/assets";

const Page = () => {
  return (
    <main className={styles.disclaimerPage}>
      <section className={styles.headerSection}>
        <Container style={{ backgroundImage: `url(${whiteKashti.src})` }}>
          <Row>
            <Col lg={12}>
              <Text className={styles.breadCrumbs}>
                <span>Resources</span>
                <ChevronRight />
                <span>Success Stories</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <PageTitle>Disclaimer </PageTitle>
              <Text>Last Updated - 27th June, 2023</Text>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.disclaimerContentSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.disclaimerContent}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id dapibus elit, a pulvinar lorem. Duis augue
                  lorem, porttitor eget iaculis vitae, ornare eget dolor. Nam
                  posuere sapien quis ante accumsan volutpat. Nam maximus
                  iaculis sem. Curabitur a faucibus augue, ac pretium ipsum. Nam
                  elementum aliquam urna et gravida. Pellentesque quis blandit
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus faucibus sapien quis bibendum sagittis. Aenean non
                  augue porttitor, tincidunt mauris in, fermentum tortor. Sed eu
                  porta justo, eget posuere enim. Quisque vel odio non metus
                  semper pellentesque. Phasellus et mollis sem.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id dapibus elit, a pulvinar lorem. Duis augue
                  lorem, porttitor eget iaculis vitae, ornare eget dolor. Nam
                  posuere sapien quis ante accumsan volutpat. Nam maximus
                  iaculis sem. Curabitur a faucibus augue, ac pretium ipsum. Nam
                  elementum aliquam urna et gravida. Pellentesque quis blandit
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus faucibus sapien quis bibendum sagittis. Aenean non
                  augue porttitor, tincidunt mauris in, fermentum tortor. Sed eu
                  porta justo, eget posuere enim. Quisque vel odio non metus
                  semper pellentesque. Phasellus et mollis sem.
                </Text>
                <h3>Lorem ipsum</h3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id dapibus elit, a pulvinar lorem. Duis augue
                  lorem, porttitor eget iaculis vitae, ornare eget dolor. Nam
                  posuere sapien quis ante accumsan volutpat. Nam maximus
                  iaculis sem. Curabitur a faucibus augue, ac pretium ipsum. Nam
                  elementum aliquam urna et gravida. Pellentesque quis blandit
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus faucibus sapien quis bibendum sagittis. Aenean non
                  augue porttitor, tincidunt mauris in, fermentum tortor. Sed eu
                  porta justo, eget posuere enim. Quisque vel odio non metus
                  semper pellentesque. Phasellus et mollis sem.
                </Text>
                <h3>Lorem ipsum</h3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id dapibus elit, a pulvinar lorem. Duis augue
                  lorem, porttitor eget iaculis vitae, ornare eget dolor. Nam
                  posuere sapien quis ante accumsan volutpat. Nam maximus
                  iaculis sem. Curabitur a faucibus augue, ac pretium ipsum. Nam
                  elementum aliquam urna et gravida. Pellentesque quis blandit
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus faucibus sapien quis bibendum sagittis. Aenean non
                  augue porttitor, tincidunt mauris in, fermentum tortor. Sed eu
                  porta justo, eget posuere enim. Quisque vel odio non metus
                  semper pellentesque. Phasellus et mollis sem.
                </Text>
                <h3>Lorem ipsum</h3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id dapibus elit, a pulvinar lorem. Duis augue
                  lorem, porttitor eget iaculis vitae, ornare eget dolor. Nam
                  posuere sapien quis ante accumsan volutpat. Nam maximus
                  iaculis sem. Curabitur a faucibus augue, ac pretium ipsum. Nam
                  elementum aliquam urna et gravida. Pellentesque quis blandit
                  elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus faucibus sapien quis bibendum sagittis. Aenean non
                  augue porttitor, tincidunt mauris in, fermentum tortor. Sed eu
                  porta justo, eget posuere enim. Quisque vel odio non metus
                  semper pellentesque. Phasellus et mollis sem.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
