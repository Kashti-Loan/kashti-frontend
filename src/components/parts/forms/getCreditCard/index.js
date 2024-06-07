import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import Link from "next/link";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { routesConstant } from "@utils/routesConstant";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";

const GetCreditCard = () => {
  return (
    <div className={styles.secureLoanTodayBox}>
      <h4>Get the Best Credit Card</h4>
      <form>
        <div className={styles.inputBlock}>
          <MoneyPhoneInputTag
            label="Mobile Number*"
            type="tel"
            placeholder="Mobile Number"
            initial="+91"
            name={"mobile_number"} // Add Name to these tags else tooltip wont work
            // error={error?.message}
            phoneNumber
            tooltip
            tooltipContent={"Mobile Number"}
          />
          <div className={styles.consentBlock}>
            <label className="material-checkbox">
              <input type="checkbox" name={"consent"} id={"consent"} />
              <span className="checkmark"></span>
              <Text className={styles.agreeTerms}>
                By Continuing, i agree to kashtis{" "}
                <Link href={routesConstant.PRIVACY_POLICY}>Privacy Policy</Link>{" "}
                and{" "}
                <Link href={routesConstant.TERMS_CONDITION}>
                  Terms & Conditions
                </Link>{" "}
                and Receive communication from Kashti via SMS,E-Mail and whatApp
              </Text>
            </label>
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
