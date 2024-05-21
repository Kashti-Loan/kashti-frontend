import Link from "next/link";
import InstantLoanIcon from "../svg/instantLoanIcon";
import styles from "./style.module.scss";
import { Text } from "@styles/styledComponent";
import BusinessLoanIcon from "../svg/businessLoanIcon";
import GoldLoanIcon from "../svg/goldLoanIcon";
import HomeLoanIcon from "../svg/homeLoanIcon";
import PressReleaseIcon from "../svg/pressReleaseIcon";
import BlogsIcon from "../svg/blogsIcon";
import SuccessStoryIcon from "../svg/successStoryIcon";
import FaqIcon from "../svg/faqIcon";

const MegaMenu = (props) => {
  return (
    <div className={styles.megaMenuSection}>
      {props.children &&
        props.children.map((item, i) => (
          <Link href={item.link} className={styles.menuBox} key={i}>
            {item.name === "Instant Personal Loan" ? (
              <InstantLoanIcon />
            ) : item.name === "Business Loan" ? (
              <BusinessLoanIcon />
            ) : item.name === "Gold Loan" ? (
              <GoldLoanIcon />
            ) : item.name === "Home Loan" ? (
              <HomeLoanIcon />
            ) : item.name === "Press Releases" ? (
              <PressReleaseIcon />
            ) : item.name === "Blogs" ? (
              <BlogsIcon />
            ) : item.name === "Success Stories" ? (
              <SuccessStoryIcon />
            ) : item.name === "FAQ" ? (
              <FaqIcon />
            ) : null}
            <div className={styles.menuInfo}>
              <h5>{item.name}</h5>
              <Text>{item.description}</Text>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MegaMenu;
