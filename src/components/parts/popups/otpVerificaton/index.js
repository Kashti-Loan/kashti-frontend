"use client";
import toast, { Toaster } from "react-hot-toast";
import { LinkText, SectionTitle, Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { useEffect, useRef, useState } from "react";
import EditIcon from "@components/ui/svg/editIcon";

const OtpVerfication = (props) => {
  const [resendTimer, setResendTimer] = useState(30);
  const [startTimer, setStartTimer] = useState(true);
  const [isResendingOTP, setResendingOTP] = useState(false);
  const [isVerifying, setVerifying] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otpValues, setOTPValues] = useState(["", "", "", ""]);

  useEffect(() => {
    if (startTimer) {
      let seconds = 30;
      var timer = setInterval(() => {
        if (seconds > 1) {
          seconds = seconds - 1;
          setResendTimer((prev) => prev - 1);
        } else {
          console.log("Interval clear 1");
          clearInterval(timer);
          setStartTimer(false);
          console.log("Interval clear 3");
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [startTimer]);

  useEffect(() => {
    if (otpValues.join("").length === 4) {
      onVerify();
    }
  }, [otpValues]);

  function replaceCharacters(phoneNumber) {
    if (phoneNumber.length !== 10) {
      // Assuming the phone number is always 10 digits long
      return "Invalid phone number";
    }

    // Convert the string to an array
    let phoneNumberArray = phoneNumber.split("");

    // Replace characters at indices 5, 6, and 7 with "X"
    phoneNumberArray[5] = "X";
    phoneNumberArray[6] = "X";
    phoneNumberArray[7] = "X";

    // Join the array back into a string
    return phoneNumberArray.join("");
  }

  const handleChange = (index, e) => {
    const input = e.target;
    const value = input.value;

    // Update the OTP values
    const newOTPValues = [...otpValues];
    newOTPValues[index] = value;
    setOTPValues(newOTPValues);

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const resentOTP = async () => {
    try {
      setResendingOTP(true);
      await props.onResendOTP();
      setResendingOTP(false);
    } catch (e) {
      setResendingOTP(false);
    }
  };

  const onVerify = async () => {
    try {
      setVerifying(true);
      await props.onVerifyOTP(otpValues.join(""));

      setVerifying(false);
    } catch (e) {
      setVerifying(false);
      console.log("Error:", e.response.data);
      if (e?.response?.data) {
        toast.error(e.response.data.message);
      }
    }
  };

  // const handleKeyDown = (index, e) => {
  //   if (e.key === "Backspace" && otpValues[index] === "" && index > 0) {
  //     inputRefs.current[index - 1].current.focus();
  //     const newOTPValues = [...otpValues];
  //     newOTPValues[index - 1] = "";
  //     setOTPValues(newOTPValues);
  //   }
  // };

  return (
    <div className={styles.otpVerifcationPopup}>
      <div className={styles.verficationFormBox}>
        <SectionTitle>OTP Verification</SectionTitle>
        <Text>
          We have sent the 4-digit OTP to
          <br />
          <b>+91-{`${replaceCharacters(props.basicDetail.phone)}`} </b>
          <EditIcon onClick={() => props.setOtpSent(false)} />
        </Text>
        <form>
          <div className={styles.inputBlock}>
            {inputRefs.map((inputRef, index) => (
              <input
                key={index}
                ref={inputRef}
                type="tel"
                autoComplete="one-time-code"
                maxLength={1}
                onChange={(e) => handleChange(index, e)}
                autoFocus={index === 0}
                style={{ textAlign: "center", fontWeight: "bold" }}
              />
            ))}
          </div>
          <div className={styles.resendTimer}>
            {startTimer ? (
              <Text>
                Resend OTP in <span>00:{resendTimer}s</span>
              </Text>
            ) : (
              <LinkText onClick={resentOTP}>
                {isResendingOTP ? `Resending OTP...` : `Resend OTP`}
              </LinkText>
            )}
          </div>
          <button type="button" className="primaryBtn" onClick={onVerify}>
            {isVerifying ? `Verifying...` : `Verify OTP`}
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
