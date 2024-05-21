"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./style.module.scss";
import SiteGreyIcon from "@components/ui/svg/siteGreyIcon";
import ProductIcon from "@components/ui/svg/productIcon";
import ResourceIcon from "@components/ui/svg/resourcesIcon";
import AccountIcon from "@components/ui/svg/accountIcon";
import PopupPortal from "../popups/popupPortal";
import OurProductMenu from "../popups/ourProductMenu";
import ResourcesMenu from "../popups/resoucesMenu";
import MyAccountLogin from "../popups/myAccountLogin";
import { routesConstant } from "@utils/routesConstant";
import useWindowWidth from "@components/hook/useWindowWidth";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [currentWindowSize, setCurrentWindowSize] = useState(null);
  const pathName = usePathname();
  const router = useRouter();

  const windowSize = useWindowWidth();

  console.log("current window size", windowSize);

  useEffect(() => {
    if (windowSize) {
      setCurrentWindowSize(windowSize);
    }
  }, [windowSize]);

  return (
    <>
      <header
        className={styles.mobileHeader}
        style={{
          display:
            currentWindowSize && currentWindowSize <= 990
              ? pathName ===
                routesConstant.PERSONAL_LOAN_QUESTIONAIRRE_APPLICATION
                ? "none"
                : "flex"
              : "none",
        }}
      >
        <ul>
          <li>
            <button
              onClick={() => {
                setActiveMenu(false);
                router.push("/");
              }}
              className={
                activeMenu === "home" || pathName === "/"
                  ? styles.activeMenu
                  : styles.notActive
              }
            >
              <span>
                <SiteGreyIcon />
              </span>
              <span>Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setActiveMenu((prev) =>
                  prev !== "products" ? "products" : false
                )
              }
              className={
                activeMenu === "products" ? styles.activeMenu : styles.notActive
              }
            >
              <span>
                <ProductIcon />
              </span>
              <span>Our Products</span>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setActiveMenu((prev) =>
                  prev !== "resources" ? "resources" : false
                )
              }
              className={
                activeMenu === "resources"
                  ? styles.activeMenu
                  : styles.notActive
              }
            >
              <span>
                <ResourceIcon />
              </span>
              <span>Resources</span>
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setActiveMenu((prev) =>
                  prev !== "account" ? "account" : false
                )
              }
              className={
                activeMenu === "account" ? styles.activeMenu : styles.notActive
              }
            >
              <span>
                <AccountIcon />
              </span>
              <span>My Account</span>
            </button>
          </li>
        </ul>
      </header>
      {activeMenu && (
        <PopupPortal display={activeMenu}>
          <div className="popupBox" style={{ zIndex: "9999999" }}>
            {activeMenu === "products" && (
              <OurProductMenu onClick={() => setActiveMenu(false)} />
            )}
            {activeMenu === "resources" && (
              <ResourcesMenu onClick={() => setActiveMenu(false)} />
            )}
            {activeMenu === "account" && <MyAccountLogin />}
          </div>
        </PopupPortal>
      )}
    </>
  );
};

export default MobileHeader;
