import { Text } from "@styles/styledComponent";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import { creditCardImg } from "@public/assets";

const ComparisonCardBox = (props) => {
  return (
    <div className={styles.comparisonCardBox}>
      <div
        className={styles.comparisonCardImg}
        style={{ backgroundColor: props.theme }}
      >
        <CustomImage src={creditCardImg} alt="Credit Card" />
      </div>
      <div className={styles.cardInfo}>
        <h4>{props.name}</h4>
        <Text>
          Recommended Credit Score
          <br />
          <b>{props.creditScore}</b>
        </Text>
        <div className={styles.comparisonCardBtn}>
          <button className="secondaryBtn">Remove</button>
          <button className="secondaryBtn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCardBox;
