import { demoUserOne } from "@public/assets";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import { Text } from "@styles/styledComponent";

const ReviewCustomerBox = () => {
  return (
    <div className={styles.reviewCustomerBox}>
      <div className={styles.customerImg}>
        <CustomImage src={demoUserOne} alt="Customer" />
      </div>
      <div className={styles.customerName}>
        <h5>Janvi Kapoor</h5>
        <Text>CEO, Accenture</Text>
      </div>
    </div>
  );
};

export default ReviewCustomerBox;
