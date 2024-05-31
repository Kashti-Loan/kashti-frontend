import { personalLoanEmi } from "@public/assets";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import { Text } from "@styles/styledComponent";
import { ChevronRight } from "react-bootstrap-icons";

const CalculatorBox = (props) => {
  return (
    <div className={styles.calculatorBox}>
      <CustomImage src={props.image} alt="personal loan emi" />
      <div className={styles.calculatorContent}>
        <h3>{props.title}</h3>
        <Text>{props.description}</Text>
        <button className="secondaryBtn">
          Calculate Now <ChevronRight />
        </button>
      </div>
      <div
        className={styles.hoverColor}
        style={{ background: props.hoverColor }}
      ></div>
    </div>
  );
};

export default CalculatorBox;
