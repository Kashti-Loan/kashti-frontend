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
          <CustomImage src={creditCard_citiBank_color} alt="Credit Card" />
        </div>
        <div>
          <MeterIcon />
          <span>&gt;750</span>
        </div>
      </div>
      <div className={styles.creditCardBoxInfo}>
        <p>
          <span>Interest Rates</span>
          <span>10.08% - 12.00%</span>
        </p>
        <p>
          <span>Loan Amount</span>
          <span>Up to ₹40 Lakhs</span>
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
        <Text>
          This Bank offers personal loan interest rates beginning at 10.50% p.a.
          for amounts up to Rs 40 lakh, with a maximum tenure of 6 years.
          Additionally, select existing customers may receive pre-approved
          personal loans with a '10-second disbursal' based on their credit
          profiles. Clicking here allows the XYZ Bank's existing customers to
          check their eligibility for this pre-approved loan offer.
        </Text>
      </div>
      <div className={styles.creditCardButton}>
        <Link
          href={routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}
          className="secondaryBtn"
        >
          Check My Eligibility
        </Link>
        <Link href={"#"} className="secondaryBtn">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default CreditCardBox;
