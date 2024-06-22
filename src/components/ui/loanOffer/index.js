import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import CustomImage from "../customImage";
import { kreditBeeOffer } from "@public/assets";
import { CheckCircle } from "react-bootstrap-icons";

const LoanOffer = () => {
  return (
    <div className={styles.loanOffer}>
      <div className={styles.offerImg}>
        <CustomImage src={kreditBeeOffer} />
        <h4>
          <span>KreditBee</span> <CheckCircle />
        </h4>
      </div>
      <div>
        <Text>
          Loan Amount - <b>₹ 5,00,000</b>
        </Text>
      </div>
      <div>
        <button className="primaryBtn">Complete KYC</button>
      </div>
    </div>
  );
};

export default LoanOffer;
