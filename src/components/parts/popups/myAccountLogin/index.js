import { SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import PhoneNumberInput from "@components/ui/phoneNumberInput";
import CustomImage from "@components/ui/customImage";
import { fbImg, googleImg } from "@public/assets";

const MyAccountLogin = () => {
  return (
    <div className={styles.accountMenu}>
      <div className={styles.menuHeader}>
        <SectionTitle>My Account</SectionTitle>
      </div>
      <div className={styles.menuList}>
        <div className={styles.menuBlock}>
          <div className={styles.menuTitle}>
            <h4>Login / Register</h4>
          </div>
          <form>
            <PhoneNumberInput />
            <button className="primaryBtn">Get OTP</button>
          </form>
          <div className={styles.orBlock}>
            <hr />
            <span>Or</span>
            <hr />
          </div>
          <div className={styles.socialLoginContainer}>
            <div className={styles.socialLogin}>
              <CustomImage src={googleImg} alt="Google Login" />
              <h5>Google</h5>
            </div>
            <div className={styles.socialLogin}>
              <CustomImage src={fbImg} alt="FB Login" />
              <h5>Facebook</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountLogin;
