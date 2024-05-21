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
          <Text>Receives a fixed regular income</Text>
          <EmploymentSalariedIcon />
        </div>
        <div className={styles.employmentTypeBox}>
          <h4>Self-Employed</h4>
          <Text>Generates your own regular income</Text>
          <SelfEmployedIcon />
        </div>
        <div className={styles.employmentTypeBox}>
          <h4>Business Owner</h4>
          <Text>Own and operate your own business</Text>
          <BusinessOwnerIcon />
        </div>
      </div>
      <form>
        <div className={styles.salaryInputBlock}>
          <div>
            <CustomInput type={"text"} placeholder={"Employer Name"} />
          </div>
          <div>
            <CustomSelect
              placeholder={"Yearly Income*"}
              displayLabel
              options={yearlyIncomeData}
            />
          </div>
        </div>
        <button type="button" className="primaryBtn" onClick={props.onSubmit}>
          Next
        </button>
      </form>
    </div>
  );
};

export default EmploymentTypeStep;
