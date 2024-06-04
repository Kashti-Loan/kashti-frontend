"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "@styles/styledComponent";
import CustomImage from "@components/ui/customImage";
import styles from "./style.module.scss";
import { ChevronDown } from "react-bootstrap-icons";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";

const PersonalLoanDetailBox = ({ item, currentQues, key }) => {
  return (
    <div className={styles.personalLoanCard}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.loanImg}>
            {item?.image ? (
              <CustomImage src={item?.image} alt={item.bank_image_name} />
            ) : null}
          </div>
          <div className={styles.loanTitle}>
            <h3>{item.bank_name}</h3>
            <Text>{item.description}</Text>
          </div>
        </div>
        <div>
          <Link
            href={item?.apply_link ? item.apply_link : "#"}
            className="primaryBtn"
            target="_blank"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className={styles.cardFeatures}>
        <div className={styles.featureBox}>
          <Text>Rate of Interest</Text>
          <h4>{item.interest_rate ? item.interest_rate : "-"}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>EMI to Pay </Text>
          <h4>-</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>Max Loan Amount</Text>
          <h4>{item.loan_amount ? item.loan_amount : "-"}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>Loan Term</Text>
          <h4>{item.tenure ? item.tenure : "-"}</h4>
        </div>
        <div className={styles.featureBox}>
          <Text>Chances of Approval</Text>
          <h4>-</h4>
        </div>
      </div>
      <div className={styles.cardOthers} style={{ backgroundColor: "#EAEBF3" }}>
        {[
          "No Documentation",
          "Get Instant Dispursal",
          "Pending Interest Charges Applicable",
        ].map((item, i) => (
          <Text key={i}>{item}</Text>
        ))}
      </div>
      <div
        className={styles.creditCardAccordian}
        style={{ backgroundColor: "#FEF2E9" }}
      >
        <motion.button
          initial={false}
          className={styles.creditCardBtn}
          whileTap={{ scale: 0.97 }}
        >
          <span>
            Loan Details <ChevronDown />
          </span>
          <Link
            target="_blank"
            href={item?.apply_link ? item.apply_link : "#"}
            className="primaryBtn"
          >
            Apply Now
          </Link>
        </motion.button>

        <AnimatePresence initial={false}>
          {item?.currentQues && (
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
                  <h4>{item.interest_rate ? item.interest_rate : "-"}</h4>
                </div>
                <div className={styles.featureBox}>
                  <Text>EMI to Pay </Text>
                  <h4>-</h4>
                </div>
                <div className={styles.featureBox}>
                  <Text>Max Loan Amount</Text>
                  <h4>{item.loan_amount ? item.loan_amount : "-"}</h4>
                </div>
                <div className={styles.featureBox}>
                  <Text>Loan Term</Text>
                  <h4>{item.tenure ? item.tenure : "-"}</h4>
                </div>
                <div className={styles.featureBox}>
                  <Text>Chances of Approval</Text>
                  <h4>-</h4>
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
