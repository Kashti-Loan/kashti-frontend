import { Text } from "@styles/styledComponent";
import CustomImage from "../customImage";
import styles from "./style.module.scss";

const PersonalLoanCard = (props) => {
  return (
    <div className={styles.personalLoanCard}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.loanImg}>
            <CustomImage src={props.image} alt={props.name} />
          </div>
          <div className={styles.loanTitle}>
            <h3>{props.name}</h3>
            <Text>{props.description}</Text>
          </div>
        </div>
        <div>
          <button className="primaryBtn">Apply Now</button>
        </div>
      </div>
      <div className={styles.cardFeatures}>
        <div className={styles.featureBox}>
          <Text>Rate of Interst</Text>
          <h4>{props.features.rate}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>EMI to Pay </Text>
          <h4>{props.features.emi}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>Max Loan Amount</Text>
          <h4>{props.features.maxLoanAmount}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>Loan Term</Text>
          <h4>{props.features.term}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>Chances of Approval</Text>
          <h4>{props.features.approval}</h4>
        </div>
      </div>
      <div
        className={styles.cardOthers}
        style={{ backgroundColor: props.themeColor || "none" }}
      >
        {props.others &&
          props.others.map((item, i) => <Text key={i}>{item}</Text>)}
      </div>
    </div>
  );
};

export default PersonalLoanCard;
