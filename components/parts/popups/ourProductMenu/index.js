import { SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import ProductCard from "@components/ui/productCard";
import { homeProductData } from "@utils/data";
import CreditCardIcon from "@components/ui/svg/creditCardIcon";
import InstantLoanIcon from "@components/ui/svg/instantLoanIcon";
import BusinessLoanIcon from "@components/ui/svg/businessLoanIcon";
import GoldLoanIcon from "@components/ui/svg/goldLoanIcon";
import MenuProductCard from "@components/ui/menuProductCard";

const OurProductMenu = (props) => {
  return (
    <div className={styles.productMenu}>
      <div className={styles.menuHeader}>
        <SectionTitle>Our Products</SectionTitle>
      </div>
      <div className={styles.menuListContainer}>
        <div className={styles.menuList}>
          {homeProductData.map(
            (item, i) =>
              item.title === "Credit Cards" && (
                <MenuProductCard
                  key={i}
                  title={item.title}
                  description={item.description}
                  range={item.range}
                  cta_data={item.cta_data}
                  bgColor={item.bgColor}
                  rangeBg={item.rangeBg}
                  rangeColor={item.rangeColor}
                  className={styles.menuProductBox}
                  onClick={props.onClick}
                  icon={
                    item.title === "Credit Cards" ? (
                      <>
                        <CreditCardIcon />
                      </>
                    ) : item.title === "Instant Personal Loan" ? (
                      <>
                        <InstantLoanIcon />
                      </>
                    ) : item.title === "Business Loan" ? (
                      <>
                        <BusinessLoanIcon />
                      </>
                    ) : item.title === "Gold Loan" ? (
                      <>
                        <GoldLoanIcon />
                      </>
                    ) : null
                  }
                />
              )
          )}
        </div>
        <SectionTitle>Loans</SectionTitle>
        <div className={styles.menuList}>
          {homeProductData.map(
            (item, i) =>
              item.title !== "Credit Cards" && (
                <MenuProductCard
                  key={i}
                  title={item.title}
                  description={item.description}
                  range={item.range}
                  cta_data={item.cta_data}
                  bgColor={item.bgColor}
                  rangeBg={item.rangeBg}
                  rangeColor={item.rangeColor}
                  className={styles.menuProductBox}
                  onClick={props.onClick}
                  icon={
                    item.title === "Credit Cards" ? (
                      <>
                        <CreditCardIcon />
                      </>
                    ) : item.title === "Instant Personal Loan" ? (
                      <>
                        <InstantLoanIcon />
                      </>
                    ) : item.title === "Business Loan" ? (
                      <>
                        <BusinessLoanIcon />
                      </>
                    ) : item.title === "Gold Loan" ? (
                      <>
                        <GoldLoanIcon />
                      </>
                    ) : null
                  }
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProductMenu;
