"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Text } from "@styles/styledComponent";
import GuardIcon from "@components/ui/svg/guardIcon";

const GuardBox = ({ id, title, description, currentFaq, currentQues }) => {
  return (
    <li
      className={
        currentQues
          ? `${styles.activeGuard} ${styles.guardBox}`
          : styles.guardBox
      }
      onClick={() => {
        currentQues ? currentFaq(false) : currentFaq(id);
      }}
    >
      <div>
        <GuardIcon />
        <div>
          <h4>{title}</h4>
          <AnimatePresence initial={false}>
            {currentQues && (
              <Text
                as={motion.p}
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
                {description}
              </Text>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 12L10 7L15 12"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </li>
  );
};

export default GuardBox;
