import { creditCard_citiBank_color } from "@public/assets";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import MeterIcon from "../svg/meterIcon";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import { routesConstant } from "@utils/routesConstant";

const CreditCardBox = (props) => {
  return (
    <div
      className={styles.creditCardBox}
      style={{ backgroundColor: props.themeColor || "#e9f4ec" }}
    >
      <div
        className={styles.creditCardBoxHeader}
        style={{ backgroundColor: props.themeColor || "#e9f4ec" }}
      >
        <div>
          <CustomImage src={props.image} alt="Credit Card" />
        </div>
        <div>
          <MeterIcon />
          <span>{props.score}</span>
        </div>
      </div>
      <div className={styles.creditCardBoxInfo}>
        <p>
          <span>Interest Rates</span>
          <span>{props.interest}</span>
        </p>
        <p>
          <span>Loan Amount</span>
          <span>{props.loan}</span>
        </p>
        <p>
          <span>EMI Per Lakh</span>
          <span>₹1,682 - ₹2,345</span>
        </p>
        <p>
          <span>Age</span>
          <span>21-60 years</span>
        </p>
      </div>
      <div className={styles.aboutBank}>
        <h4>About the Bank</h4>
        <Text>{props.description}</Text>
      </div>
      {/* <div className={styles.creditCardButton}>
        <Link
          href={routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}
          className="secondaryBtn"
        >
          Check My Eligibility
        </Link>
        <Link href={"#"} className="secondaryBtn">
          Apply Now
        </Link>
      </div> */}
    </div>
  );
};

export default CreditCardBox;
