import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { ChevronRight } from "react-bootstrap-icons";
import Link from "next/link";
import CreditCardIcon from "../svg/creditCardIcon";

const ProductCard = (props) => {
  return (
    <div className={`${styles.productCard} ${props.className || ""}`}>
      <div className={styles.productInfo}>
        <h4>{props.title}</h4>
        <Text>
          {props.description}
        </Text>
        <span>{props.range}</span>
      </div>
      <div className={styles.seeProductBtn}>
        <Link href={props.cta_data?.link || "#"} className="secondaryBtn">{props.cta_data?.name} <ChevronRight /></Link>
        {props.icon}
        {props.hoverIcon}
      </div>
    </div>
  );
};

export default ProductCard;
