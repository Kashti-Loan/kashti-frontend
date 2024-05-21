import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import EmploymentSalariedIcon from "@components/ui/svg/formStepIcon/employmentSalariedIcon";
import SelfEmployedIcon from "@components/ui/svg/formStepIcon/selfEmployedIcon";
import BusinessOwnerIcon from "@components/ui/svg/formStepIcon/businessOwnerIcon";

const EmploymentTypeStep = (props) => {
  return (
    <div className={styles.stepSection}>
      <div className={styles.employmentTypeBlock}>
        <div className={styles.employmentTypeBox} onClick={props.onSubmit}>
          <h4>Salaried</h4>
          <Text>Receives a fixed regular income</Text>
          <EmploymentSalariedIcon />
        </div>
        <div className={styles.employmentTypeBox} onClick={props.onSubmit}>
          <h4>Self-Employed</h4>
          <Text>Generates your own regular income</Text>
          <SelfEmployedIcon />
        </div>
        <div className={styles.employmentTypeBox} onClick={props.onSubmit}>
          <h4>Business Owner</h4>
          <Text>Own and operate your own business</Text>
          <BusinessOwnerIcon />
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypeStep;
