"use client";
import { SectionTitle, Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import OTPInput from "@components/ui/otpInput";
import { useRouter } from "next/navigation";

const OtpVerfication = (props) => {
  const router = useRouter();
  return (
    <div className={styles.otpVerifcationPopup}>
      <div className={styles.verficationFormBox}>
        <SectionTitle>OTP Verfication</SectionTitle>
        <Text>
          We have sent the 4-digit OTP to <b>+91-9345XXX890</b>
        </Text>
        <form>
          <div className={styles.inputBlock}>
            <OTPInput />
          </div>
          <div className={styles.resendTimer}>
            <Text>
              Resend OTP in <span>00:29s</span>
            </Text>
          </div>
          <button
            type="button"
            className="primaryBtn"
            onClick={() =>
              router.push("/personal-loan-questionairre-application")
            }
          >
            Verify OTP
          </button>
        </form>
        <Text className={styles.dataSafetyInfo}>
          <DataSafetyIcon />
          <span>
            Your data’s safety is our top priority. It is secured by
            cutting-edge encryption and stringent privacy protocols.
          </span>
        </Text>
      </div>
    </div>
  );
};

export default OtpVerfication;
