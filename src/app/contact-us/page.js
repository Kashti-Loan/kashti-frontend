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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4471171840164!2d77.45795567521587!3d13.134172878306632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae241087e199e7%3A0x96d330152f4246e1!2sMain%20Rd%2C%20Byatha%2C%20Bengaluru%2C%20Karnataka%20560089!5e0!3m2!1sen!2sin!4v1707987140542!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
                <Link href={"https://maps.app.goo.gl/M3dzjFDZeMvcB7ar9"}>
                  608, Avenue Street, Riordon Main Road, Streetlane, Bangalore -
                  560089
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
