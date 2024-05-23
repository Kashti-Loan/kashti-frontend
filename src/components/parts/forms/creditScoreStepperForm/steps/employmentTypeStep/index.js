import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import EmploymentSalariedIcon from "@components/ui/svg/formStepIcon/employmentSalariedIcon";
import SelfEmployedIcon from "@components/ui/svg/formStepIcon/selfEmployedIcon";
import BusinessOwnerIcon from "@components/ui/svg/formStepIcon/businessOwnerIcon";
import CustomInput from "@components/ui/customInput";
import CustomSelect from "@components/ui/customSelect";
import { yearlyIncomeData } from "@utils/data";

const EmploymentTypeStep = (props) => {
  return (
    <div className={styles.stepSection}>
      <h3>Choose Employment type</h3>
      <div className={styles.employmentTypeBlock}>
        <div className={styles.employmentTypeBox}>
          <h4>Salaried</h4>
          <Text>Receives Monthly Salary </Text>
          <EmploymentSalariedIcon />
        </div>
        <div className={styles.employmentTypeBox}>
          <h4>Self-Employed</h4>
          <Text>Professionals Like Doctors etc.,</Text>
          <SelfEmployedIcon />
        </div>
        <div className={styles.employmentTypeBox}>
          <h4>Business Owner</h4>
          <Text>Runs his/her own Organisations etc.,</Text>
          <BusinessOwnerIcon />
        </div>
      </div>
      <form>
        <div className={styles.salaryInputBlock}>
          <div>
            <CustomInput type={"text"} placeholder={"Monthly in hand salary"} />
          </div>
          <div>
            <CustomInput type={"text"} placeholder={"Current Company Name"} />
          </div>
        </div>
        <button type="button" className="primaryBtn" onClick={props.onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmploymentTypeStep;
