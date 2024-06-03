import { Plus } from "react-bootstrap-icons";
import styles from "./styles.module.scss";
import { Text } from "@styles/styledComponent";

const AllSteps = ({
  onClose,
  currentTotalStep,
  completedCurrentStep,
  currentStepName,
  currentStep,
}) => {
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
              <Text>
                ({currentStep < 3 ? completedCurrentStep : "2"}/2) - Completed
              </Text>
            </div>
          </li>
          <li>
            <span>2</span>
            <div className={styles.stepDetail}>
              <h4>Income Details</h4>
              <Text>
                (
                {currentStep > 2 && currentStep < 5
                  ? completedCurrentStep
                  : currentStep > 4
                  ? "2"
                  : "0"}
                /2) - Completed
              </Text>
            </div>
          </li>
          <li>
            <span>3</span>
            <div className={styles.stepDetail}>
              <h4>Employment Details</h4>
              <Text>
                (
                {currentStep > 4 && currentStep < 14
                  ? completedCurrentStep
                  : currentStep > 13
                  ? "9"
                  : "0"}
                /9) - Completed
              </Text>
            </div>
          </li>
          <li>
            <span>4</span>
            <div className={styles.stepDetail}>
              <h4>KYC Details</h4>
              <Text>
                (
                {currentStep > 13 && currentStep < 18
                  ? completedCurrentStep
                  : currentStep > 17
                  ? "3"
                  : "0"}
                /3) - Completed
              </Text>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllSteps;
