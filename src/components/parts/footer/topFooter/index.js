import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import CustomImage from "@components/ui/customImage";
import { whiteSiteLogo } from "@public/assets";
import { Text } from "@styles/styledComponent";
import { At, GeoAltFill } from "react-bootstrap-icons";
import FbIcon from "@components/ui/svg/fbIcon";
import InstaIcon from "@components/ui/svg/instaIcon";
import YtIcon from "@components/ui/svg/ytIcon";
import LinkedIcon from "@components/ui/svg/linkedIcon";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";

const TopFooter = () => {
  return (
    <section className={styles.topFooter}>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <div className={styles.logoContainer}>
              <div>
                <CustomImage src={whiteSiteLogo} alt="kashti" />
              </div>
              <div>
                <Text>Kashti Finserv Private Limited</Text>
              </div>
            </div>
            <div className={styles.addressDetails}>
              <GeoAltFill color="var(--globalWhite)" size={35} />{" "}
              <Text>
                <span>Corporate Office:</span>
                <br />
                NO.57, Ground Floor, 8th Main road, 3rd Phase, JP Nagar, Near to
                State Bank Of India, Bangalore 560078
              </Text>
            </div>
            <div className={styles.socialMediaBlock}>
              <h3>Find us on</h3>
              <ul className={styles.footerSocialList}>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/kashti.finserv"
                  >
                    <FbIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/kashti.finserv/"
                  >
                    <InstaIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCKrHrziqqeHgXflY5uEq8QQ"
                  >
                    <YtIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://in.linkedin.com/company/officialkashti"
                  >
                    <LinkedIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <h3>Customer Grievance</h3>
            <Link href="mailto:support@kashti.com">
              <At size={25} /> <span>support@kashti.com</span>
            </Link>
            <div className={styles.aboutDetail}>
              <Text>About Us</Text>
              <Text>
                At Kashti, we take pride in being the country's leading Loan
                Service Provider. With close to a decade of experience, we have
                set the standard for quality and established ourselves as a
                dependable and trustworthy partner for all of your financial
                requirements.
              </Text>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div>
              <h3>Careers</h3>
              <ul>
                <li>
                  <Link href="#">Partner Website</Link>
                </li>
                <li>
                  <Link href={routesConstant.TERMS_CONDITION}>
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href={routesConstant.PRIVACY_POLICY}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#">Responsible Lender Practices</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Our Products</h3>
              <ul>
                <li>
                  <Link href={routesConstant.PERSONAL_LOAN}>Personal Loan</Link>
                </li>
                <li>
                  <Link href="#">Gold Loan</Link>
                </li>
                <li>
                  <Link href="#">Business Loan</Link>
                </li>
                <li>
                  <Link href="#">Credit Report</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TopFooter;
