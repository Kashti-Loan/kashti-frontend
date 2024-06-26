"use client";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import CustomImage from "@components/ui/customImage";
import styles from "./style.module.scss";
import { axis_card, creditCardImg } from "@public/assets";
import { Plus } from "react-bootstrap-icons";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { Alert } from "@mui/material";
import { createCreditCardCompareUrl } from "@utils/constant";

const CompareBox = ({ compareData, onRemoveAll, onRemoveCard, cardData }) => {
  const [finalCompareData, setFinalCompareData] = useState([]);
  useEffect(() => {
    const data = cardData.filter((item) => {
      return compareData.findIndex(
        (val) => val.id === item.id && val.name === item.name
      ) !== -1
        ? true
        : false;
    });
    setFinalCompareData(data);
  }, [cardData, compareData]);

  return (
    <div className={styles.compareBox}>
      {compareData && compareData.length === (isMobile ? 2 : 3) && (
        <Alert severity="error" color="error">
          Remove a card to add another card to compare
        </Alert>
      )}
      <div className={styles.compareCards}>
        {compareData &&
          compareData.length > 0 &&
          compareData.map((item, i) => (
            <div
              className={styles.compareCardBox}
              style={{
                backgroundColor: item.theme || "var(--globalWhite)",
              }}
              key={i}
            >
              <div>
                <CustomImage
                  src={{
                    src: `/assets/images/credit_card/${item.image}.png`,
                    width: 199,
                    height: 128,
                  }}
                />
              </div>
              <div>
                <h3>{item.name}</h3>
              </div>
              <div>
                <Plus onClick={() => onRemoveCard(item)} />
              </div>
            </div>
          ))}
      </div>
      <div className={styles.compareBtn}>
        <button className="secondaryBtn" onClick={onRemoveAll}>
          Remove All
        </button>
        {console.log("finalCompareData", finalCompareData)}
        <Link
          href={{
            pathname: routesConstant.CREDIT_CARD_COMPARISON,
            query: createCreditCardCompareUrl(finalCompareData),
          }}
          style={
            compareData.length < 2
              ? { pointerEvents: "none", opacity: 0.5 }
              : null
          }
          className="primaryBtn"
        >
          <span>Compare</span>
          <span>{compareData.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default CompareBox;
