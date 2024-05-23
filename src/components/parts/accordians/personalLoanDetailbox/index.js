"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "@styles/styledComponent";
import CustomImage from "@components/ui/customImage";
import styles from "./style.module.scss";
import { ChevronDown } from "react-bootstrap-icons";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";

const PersonalLoanDetailBox = (props) => {
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
          <Text>Rate of Interest</Text>
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
      <div
        className={styles.creditCardAccordian}
        style={{ backgroundColor: props.themeColor || "##EAEBF3" }}
      >
        <motion.button
          initial={false}
          className={styles.creditCardBtn}
          whileTap={{ scale: 0.97 }}
        >
          <span>
            Loan Details <ChevronDown />
          </span>
          <Link href={"#"} className="primaryBtn">
            Apply Now
          </Link>
        </motion.button>

        <AnimatePresence initial={false}>
          {props.currentQues && (
            <motion.div
              className={styles.creditOpenBox}
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className={styles.cardFeatures}>
                <div className={styles.featureBox}>
                  <Text>Rate of Interest</Text>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PersonalLoanDetailBox;
