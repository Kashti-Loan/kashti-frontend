import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, Text } from "@styles/styledComponent";
import { address, email, phone, whiteKashti } from "@public/assets";
import { ContactForm, CustomImage } from "@components";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.contactPage}>
      {/* Get in Touch */}
      <section className={styles.headerSection}>
        <Container style={{ backgroundImage: `url(${whiteKashti.src})` }}>
          <Row>
            <Col lg={12}>
              <PageTitle>Get in Touch</PageTitle>
              <Text>
                We are here to help you! Please reach out for any queries.
              </Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enquiry Form */}
      <section className={styles.enquiryForm}>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <ContactForm />
            </Col>
            <Col xs={12} md={6} lg={8}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998912.2040233539!2d77.08801130867818!3d12.04346569388921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15859f98cfe9%3A0xdcdb47277023dd86!2sKashti%20Finserv%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1717161067213!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info */}
      <section className={styles.contactInfoSection}>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.infoBox}>
                <CustomImage src={email} alt="Email Address" />
                <h3>Email ID</h3>
                <Link href={"mailto:support@kashti.com"}>
                  support@kashti.com
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.infoBox}>
                <CustomImage src={address} alt="Email Address" />
                <h3>Address</h3>
                <Link
                  target="_blank"
                  href={"https://maps.app.goo.gl/DrSxxqtyvjgGjpEr6"}
                >
                  Kashti Finserv Pvt Ltd.
                  <br />
                  “ICS SQUARE” Building NO.57, Ground Floor, 8th Main Road J.P
                  Nagar 3rd Phase, Near SBI Bank Bengaluru - 560078
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
