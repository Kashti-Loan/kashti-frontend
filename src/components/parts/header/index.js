//Style
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import CustomImage from "@components/ui/customImage";
import { langIcon, siteLogo } from "@public/assets";
import { navMenuItems } from "@utils/constant";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";
import MegaMenu from "@components/ui/megaMenu";
import { langData } from "@utils/data";
import CustomSelect from "@components/ui/customSelect";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <Row>
          <Col lg={2} className={styles.siteLogoBlock}>
            <Link href={"/"}>
              <CustomImage src={siteLogo} alt="Kashti" />
            </Link>
          </Col>
          <Col lg={6}>
            <ul className={styles.mainMenuList}>
              {navMenuItems.map((val, i) => (
                <li key={i}>
                  <Link
                    href={val.path}
                    className={val.children ? styles.childrenMenu : styles.menu}
                  >
                    {val.name} {val.children && <ChevronDown size={13} />}
                  </Link>
                  {val.children && <MegaMenu children={val.children} />}
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={4}>
            <ul className={styles.secondaryMenuList}>
              <li>
                <div className={styles.languageBlock}>
                  <CustomImage src={langIcon} alt="Language Translator" />
                  <CustomSelect options={langData} defaultValue="English" />
                </div>
              </li>
              <li>
                <Link href="#" className={styles.headerLoginBtn}>
                  Login/Register
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className={styles.mobileHeaderInner}>
        <Row>
          <Col xs={6} className={styles.siteLogoBlock}>
            <CustomImage src={siteLogo} alt="Kashti" />
          </Col>
          <Col xs={6}>
            <ul className={styles.secondaryMenuList}>
              <li>
                <Link href="#">
                  <CustomImage src={langIcon} alt="Language Translator" />
                  Eng
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
