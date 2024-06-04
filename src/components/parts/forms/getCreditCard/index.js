import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import Link from "next/link";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { routesConstant } from "@utils/routesConstant";

const GetCreditCard = () => {
  return (
    <div className={styles.secureLoanTodayBox}>
      <h4>Get the Best Credit Card</h4>
      <form>
        <div className={styles.inputBlock}>
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
              <Link href={routesConstant.TERMS_CONDITION}>
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href={routesConstant.PRIVACY_POLICY}>Privacy Policy</Link>.
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

export default GetCreditCard;
