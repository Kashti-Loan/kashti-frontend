import { Dash, Plus } from "react-bootstrap-icons";
import styles from "./style.module.scss";
import { Text } from "@styles/styledComponent";

const ComparisonDetailBox = (props) => {
  return (
    <div
      className={`${styles.detailBox} ${
        props.event ? styles.activeDetailBox : styles.inActiveDetailBox
      }`}
    >
      <div className={styles.detailHeader} onClick={props.onEventChange}>
        <h4>{props.title}</h4>
        {props.event ? <Dash size={20} /> : <Plus size={20} />}
        {/* <Dash /> */}
      </div>
      <div className={styles.detailContent}>
        <div>
          <Text>{props.comparisonOne}</Text>
        </div>
        <div>
          <Text>{props.comparisonTwo}</Text>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDetailBox;
