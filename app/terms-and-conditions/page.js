import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, Text } from "@styles/styledComponent";
import { address, email, phone, whiteKashti } from "@public/assets";
import { ContactForm, CustomImage } from "@components";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { ChevronRight } from "react-bootstrap-icons";

const Page = () => {
  return (
    <main className={styles.termsPage}>
      {/* Get in Touch */}
      <section className={styles.headerSection}>
        <Container style={{ backgroundImage: `url(${whiteKashti.src})` }}>
        <Row>
            <Col lg={12}>
              <Text className={styles.breadCrumbs}>
                <span>Resources</span>
                <ChevronRight />
                <span>Terms & Conditions</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <PageTitle>Terms & Conditions</PageTitle>
              <Text>Last Updated - 27th June, 2023</Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <Container>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <Link href={routesConstant.PRIVACY_POLICY}>Privacy Policy</Link>
              <Link
                href={routesConstant.TERMS_CONDITION}
                className={styles.activePage}
              >
                Terms and Conditions
              </Link>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <div className={styles.contentBox}>
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
