import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import Link from "next/link";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";

const SecureLoanToday = () => {
  return (
    <div className={styles.secureLoanTodayBox}>
      <h4>Secure Your Loan Today</h4>
      <form>
        <div className={styles.inputBlock}>
          <div>
            <input
              type="text"
              name="name_as_adhaar"
              placeholder="Name as per Aadhaar"
            />
          </div>
          <div className={styles.phoneNumberField}>
            <select>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
            </select>
            <input
              type="text"
              name="mobile_number"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <Text className={styles.agreeTerms}>
              By proceeding, you agree to our{" "}
              <Link href={"#"}>Terms & Conditions</Link> and{" "}
              <Link href={"#"}>Privacy Policy</Link>.
            </Text>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className="primaryBtn">
            Apply Now
          </button>
        </div>
        <div>
          <Text>
            <DataSafetyIcon />
            <span>
              Your data’s safety is our top priority. It is secured by
              cutting-edge encryption and stringent privacy protocols.
            </span>
          </Text>
        </div>
      </form>
    </div>
  );
};

export default SecureLoanToday;
