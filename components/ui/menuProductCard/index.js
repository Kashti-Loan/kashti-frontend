import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { ChevronRight } from "react-bootstrap-icons";
import Link from "next/link";
import CreditCardIcon from "../svg/creditCardIcon";

const MenuProductCard = (props) => {
  return (
    <Link
      href={props.cta_data?.link || "#"}
      className={`${styles.productCard} ${props.className || ""}`}
      style={{ backgroundColor: props.bgColor || "tranpsarent" }}
      onClick={props.onClick}
    >
      <div className={styles.productInfo}>
        <h4>{props.title}</h4>
        <Text>{props.description}</Text>
        <span
          style={{
            backgroundColor: props.rangeBg || "tranpsarent",
            color: props.rangeColor || "#000",
          }}
        >
          {props.range}
        </span>
      </div>
      <div className={styles.seeProductBtn}>
        {props.icon}
        {props.hoverIcon}
      </div>
    </Link>
  );
};

export default MenuProductCard;
