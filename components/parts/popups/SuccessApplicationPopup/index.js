import CustomImage from "@components/ui/customImage";
import styles from "./style.module.scss";
import { successImg } from "@public/assets";
import { Text } from "@styles/styledComponent";
import Link from "next/link";

const SuccessApplicationPopup = () => {
  return (
    <div className={styles.successSection}>
      <div className={styles.successBox}>
        <CustomImage src={successImg} alt="Success Credit Card" />
        <Text>
          Your application form has been successfully submitted! Kindly allow us
          some time to get back to you.{" "}
        </Text>
        <Link href="/" className="primaryBtn">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessApplicationPopup;
