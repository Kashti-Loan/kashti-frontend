"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import { ChevronDown, Dash, Plus } from "react-bootstrap-icons";
import { Text } from "@styles/styledComponent";

const FaqBox = ({
  id,
  title,
  description,
  currentFaq,
  currentQues,
  activeColor,
}) => {
  return (
    <li
      className={
        currentQues ? `${styles.activeFaq} ${styles.faqBox}` : styles.faqBox
      }
      onClick={() => {
        currentQues ? currentFaq(false) : currentFaq(id);
      }}
      style={{
        backgroundColor: currentQues ? activeColor : "var(--globalWhite)",
      }}
    >
      <motion.button
        initial={false}
        className={styles.faqHeader}
        whileTap={{ scale: 0.97 }}
      >
        <span>{title}</span>
        <span>{currentQues ? <Dash size={30} /> : <Plus size={30} />}</span>
      </motion.button>
      <AnimatePresence initial={false}>
        {currentQues && (
          <motion.div
            className={styles.faqBody}
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
            <Text>{description}</Text>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default FaqBox;
