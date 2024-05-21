"use client";
// Styles
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import CustomImage from "@components/ui/customImage";
import { whiteSiteLogo } from "@public/assets";
import { Text } from "@styles/styledComponent";
import {
  aboutMenuItems,
  loanMenuItems,
  resourcesMenuItems,
  supportMenuItems,
} from "@utils/constant";
import Link from "next/link";
import FbIcon from "@components/ui/svg/fbIcon";
import XIcon from "@components/ui/svg/xIcon";
import InstaIcon from "@components/ui/svg/instaIcon";
import YtIcon from "@components/ui/svg/ytIcon";
import LinkedIcon from "@components/ui/svg/linkedIcon";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import { routesConstant } from "@utils/routesConstant";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={styles.footer}
      style={{
        display:
          pathname === routesConstant.PERSONAL_LOAN_QUESTIONAIRRE_APPLICATION
            ? "none"
            : "block",
      }}
    >
      <Container className={styles.topFooter}>
        <Row>
          <Col lg={12}>
            <CustomImage src={whiteSiteLogo} alt="Kashti" />
            <Text>
              Lorem ipsum dolor sit amet consectetur. Tempus tortor ut nec
              habitant. Sed eget egestas pretium egestas ut dui morbi tincidunt
              pharetra. empusLorem ipsum dolor sit habitant. Sed eget egestas
              pretium egestas ut dui morbi tincidun
            </Text>
            <div className={styles.footerMenuBlock}>
              <div>
                <h3>Our products</h3>
                <ul className={styles.footerMenuList}>
                  {loanMenuItems.map((val, i) => (
                    <li key={i}>
                      <Link href={val.path}>{val.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Resources</h3>
                <ul className={styles.footerMenuList}>
                  {resourcesMenuItems.map((val, i) => (
                    <li key={i}>
                      <Link href={val.path}>{val.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Company</h3>
                <ul className={styles.footerMenuList}>
                  {aboutMenuItems.map((val, i) => (
                    <li key={i}>
                      <Link href={val.path}>{val.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Find us on</h3>
                <ul className={styles.footerSocialList}>
                  <li>
                    <Link href={"#"}>
                      <FbIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <XIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <InstaIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <YtIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <LinkedIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerContactBlock}>
              <div className={styles.footerContactBox}>
                <Telephone />
                <div>
                  <h3>Phone number</h3>
                  <ul className={styles.contactList}>
                    <li>
                      <Link href={"tel:+91-9876543210"}>+91-9876543210</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.footerContactBox}>
                <Envelope />
                <div>
                  <h3>Email ID</h3>
                  <ul className={styles.contactList}>
                    <li>
                      <Link
                        href={"mailto:contactkashti@gmail.com"}
                        style={{ textTransform: "lowercase" }}
                      >
                        contactkashti@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.footerContactBox}>
                <GeoAlt />
                <div>
                  <h3>Address</h3>
                  <ul className={styles.contactList}>
                    <li>
                      <Link href={"#"}>
                        608, Avenue Street, Riordon Main Road,
                        <br />
                        Streetlane, Bangalore - 560089
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.bottomFooter}>
        <Row>
          <Col md={6} lg={6}>
            <ul className={styles.bottomFooterMenu}>
              <li>
                <Link href={routesConstant.TERMS_CONDITION}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href={routesConstant.PRIVACY_POLICY}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={routesConstant.SUCCESS_STORIES + `/disclaimer`}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={6}>
            <Text>© 2024 | All Rights Reserved</Text>
            <ul>
              <li>
                <Link href={routesConstant.TERMS_CONDITION}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href={routesConstant.PRIVACY_POLICY}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Data Security</Link>
              </li>
              <li>
                <Link href={routesConstant.SUCCESS_STORIES + `/disclaimer`}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
