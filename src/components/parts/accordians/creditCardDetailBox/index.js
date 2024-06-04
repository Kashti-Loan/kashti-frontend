"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import { ChevronDown, Dash, Plus } from "react-bootstrap-icons";
import { Text } from "@styles/styledComponent";
import CustomImage from "@components/ui/customImage";
import { creditCardImg } from "@public/assets";
import Link from "next/link";
import Checkbox from "@components/ui/checkbox";
import { routesConstant } from "@utils/routesConstant";

const CreditCardDetailBox = ({
  id,
  currentFaq,
  currentQues,
  theme,
  name,
  type,
  image,
  cardType,
  annualFee,
  joiningFee,
  creditScore,
  features,
  welcomeBenefits,
  onCompare,
  isCompared,
}) => {
  return (
    <li
      className={
        currentQues
          ? `${styles.activeCard} ${styles.creditCardDetailBox}`
          : styles.creditCardDetailBox
      }
      onClick={() => {
        currentQues ? currentFaq(false) : currentFaq(id);
      }}
      //   style={{backgroundColor: currentQues ? activeColor : "var(--globalWhite)"}}
    >
      <div className={styles.creditCardInfo}>
        <div className={styles.creditCardImg}>
          <div>
            <CustomImage src={image} alt="Credit Card" />
          </div>
          <div>
            <h4>{name}</h4>
            <Text>
              <span>{type.map((item) => `${item.name}, `)}</span>
              <span
                style={{
                  background:
                    cardType === "Premium"
                      ? "linear-gradient(98.02deg,#d38312 -46.18%,#d9672d 21.6%,#e04b82 104.73%,rgba(236, 18, 128, 0.7) 104.75%,#f00091 104.76%,rgba(209, 58, 58, 0.667664) 104.78%,rgba(209, 58, 58, 0.0885417) 104.79%)"
                      : cardType === "Sponsored"
                      ? "linear-gradient(94.86deg, #1A2980 -30.69%, #26D0CE 128.88%)"
                      : "var(--globalBlack)",
                }}
              >
                {cardType}
              </span>
            </Text>
            <div>
              <Checkbox
                name="add_to_compare"
                label="Add to Compare"
                onChange={() => onCompare({ id, name, image, theme })}
                checked={isCompared}
              />
            </div>
          </div>
        </div>
        <div className={styles.creditCardDetail}>
          <Text>
            Annual Fee <b>₹{annualFee}</b>
          </Text>
          <Text>
            Joining Fee <b>₹{joiningFee}</b>
          </Text>
          <Text>
            Recommended Credit Score <b>{creditScore}</b>
          </Text>
          <Link href={routesConstant.CREDIT_SCORE_REPORT}>
            Check Free Credit Score
          </Link>
        </div>
      </div>
      <div
        className={styles.creditCardAccordian}
        style={{ backgroundColor: theme || "##EAEBF3" }}
      >
        <motion.button initial={false} className={styles.creditCardBtn}>
          <span>
            Card Details <ChevronDown />
          </span>
          <Link
            href={routesConstant.CREDIT_CARD_APPLICATION_FORM}
            className="primaryBtn"
          >
            Apply Now
          </Link>
        </motion.button>

        <AnimatePresence initial={false}>
          {currentQues && (
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
              <div>
                <h4>Features</h4>
                <ul>
                  {features.map((item, i) => (
                    <li key={i}>
                      <b>{item.name}</b> {item.description}.
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Welcome Benefits</h4>
                <ul>
                  {welcomeBenefits.map((item, i) => (
                    <li key={i}>
                      <b>{item.name}</b> {item.description}.
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

export default CreditCardDetailBox;
