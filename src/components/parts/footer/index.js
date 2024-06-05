"use client";
import { useState, useEffect } from "react";
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
import useWindowWidth from "@components/hook/useWindowWidth";

const Footer = () => {
  const [currentWindowSize, setCurrentWindowSize] = useState(null);
  const pathname = usePathname();
  const windowSize = useWindowWidth();
  useEffect(() => {
    if (windowSize) {
      setCurrentWindowSize(windowSize);
    }
  }, [windowSize]);

  // console.log("current window size", {windowSize, currentWindowSize, pathname});

  return (
    <footer
      className={styles.footer}
      style={{
        display:
          currentWindowSize && currentWindowSize <= 990
            ? pathname?.includes(routesConstant.PERSONAL_LOAN_QUESTIONAIRRE)
              ? "none"
              : "flex"
            : "block",
      }}
    >
      <Container className={styles.topFooter}>
        <Row>
          <Col lg={12}>
            <CustomImage src={whiteSiteLogo} alt="Kashti" />
            <Text>
              Connecting borrowers with NBFCs/Banks for seamless personal loan
              transactions approved by RBI-registered institutions.
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
                <Envelope />
                <div>
                  <h3>Email ID</h3>
                  <ul className={styles.contactList}>
                    <li>
                      <Link
                        href={"mailto:support@kashti.com"}
                        style={{ textTransform: "lowercase" }}
                      >
                        support@kashti.com
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
                        Kashti Finserv Pvt Ltd.
                        <br />
                        “ICS SQUARE” Building
                        <br />
                        NO.57 , Ground Floor, 8th Main Road
                        <br />
                        J.P Nagar 3rd Phase, Near SBI Bank
                        <br />
                        Bengaluru - 560078
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
                <Link target="_blank" href="/assets/t_c.pdf">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/assets/Privacy_Policy.pdf">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={6}>
            <Text>© 2024 | All Rights Reserved</Text>
            <ul>
              <li>
                <Link target="_blank" href="/assets/t_c.pdf">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/assets/Privacy_Policy.pdf">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#">Data Security</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
