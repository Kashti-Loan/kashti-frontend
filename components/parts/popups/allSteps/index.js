import { Plus } from "react-bootstrap-icons";
import styles from "./styles.module.scss";
import { Text } from "@styles/styledComponent";

const AllSteps = ({ onClose }) => {
  return (
    <div className={styles.allStepsSection}>
      <div className={styles.allStepHeader}>
        <h3>Total Steps (4)</h3>
        <Plus color="#212121" size={32} onClick={onClose} />
      </div>
      <div className={styles.stepSection}>
        <ul>
          <li>
            <span>1</span>
            <div className={styles.stepDetail}>
              <h4>Basic Details</h4>
              <Text>(0/2) - Completed</Text>
            </div>
          </li>
          <li>
            <span>2</span>
            <div className={styles.stepDetail}>
              <h4>Income Details</h4>
              <Text>(0/2) - Completed</Text>
            </div>
          </li>
          <li>
            <span>3</span>
            <div className={styles.stepDetail}>
              <h4>Employment Details</h4>
              <Text>(0/9) - Completed</Text>
            </div>
          </li>
          <li>
            <span>4</span>
            <div className={styles.stepDetail}>
              <h4>KYC Details</h4>
              <Text>(0/3) - Completed</Text>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllSteps;
