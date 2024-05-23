import GaugeChart from "@components/parts/charts/gaugeChart";
import styles from "./style.module.scss";
import { Text } from "@styles/styledComponent";
import Link from "next/link";

const CreditCardReport = () => {
  return (
    <div className={styles.stepSection}>
      <GaugeChart value={767} />
      <h2>Very Good</h2>
      <Text>Last updated: December 14, 2023</Text>
      <Link href="/" className="primaryBtn">
        Return to Homepage
      </Link>
    </div>
  );
};

export default CreditCardReport;
