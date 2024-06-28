"use client";
import { useEffect, useState } from "react";
import CustomImage from "@components/ui/customImage";
import styles from "./style.module.scss";
import { axis_card, creditCardImg } from "@public/assets";
import { Plus } from "react-bootstrap-icons";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";

const CompareBox = ({ compareData, onRemoveAll, onRemoveCard, cardData }) => {
  const [finalCompareData, setFinalCompareData] = useState([]);
  useEffect(() => {
    console.log("finally vef", { cardData, compareData });
    const data = cardData.filter((item) => {
      return compareData.findIndex(
        (val) => val.id === item.id && val.name === item.name
      ) !== -1
        ? true
        : false;
    });
    setFinalCompareData(data);
  }, [cardData, compareData]);

  //   console.log("finally", finalCompareData);

  return (
    <div className={styles.compareBox}>
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
                <CustomImage src={creditCardImg} />
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
        <Link
          href={{
            pathname: routesConstant.CREDIT_CARD_COMPARISON,
            query: { data: JSON.stringify(finalCompareData) },
          }}
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
