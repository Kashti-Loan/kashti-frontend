"use client";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import CustomImage from "@components/ui/customImage";
import { langIcon, siteLogo } from "@public/assets";
import { navMenuItems } from "@utils/constant";
import Link from "next/link";
import { ChevronDown, List } from "react-bootstrap-icons";
import MegaMenu from "@components/ui/megaMenu";
import { langData } from "@utils/data";
import CustomSelect from "@components/ui/customSelect";
import { useEffect, useState } from "react";
import PopupPortal from "../popups/popupPortal";
import MobileMenu from "../popups/mobileMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header
        className={styles.header}
        style={{ zIndex: showMenu ? "99999999" : "2" }}
      >
        <Container className={styles.headerInner}>
          <Row>
            <Col lg={2} className={styles.siteLogoBlock}>
              <Link href={"/"}>
                <CustomImage src={siteLogo} alt="Kashti" />
              </Link>
            </Col>
            <Col lg={8}>
              <ul className={styles.mainMenuList}>
                {navMenuItems.map((val, i) => (
                  <li key={i}>
                    <Link
                      href={val.path}
                      className={`${
                        val.children ? styles.childrenMenu : styles.menu
                      } ${
                        pathname.includes(val.path)
                          ? styles.activeMenu
                          : styles.inactiveMenu
                      }`}
                    >
                      {val.name} {val.children && <ChevronDown size={13} />}
                    </Link>
                    {val.children && <MegaMenu children={val.children} />}
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={2}>
              <ul className={styles.secondaryMenuList}>
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
                <li onClick={() => setShowMenu((prev) => !prev)}>
                  {showMenu ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3867_17145)">
                        <path
                          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                          fill="#323232"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3867_17145">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3867_15725)">
                        <path
                          d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                          fill="#344054"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3867_15725">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
      {showMenu && (
        <PopupPortal display={showMenu}>
          <div className="popupBox" style={{ zIndex: "99999999" }}>
            <MobileMenu />
          </div>
        </PopupPortal>
      )}
    </>
  );
};

export default Header;
