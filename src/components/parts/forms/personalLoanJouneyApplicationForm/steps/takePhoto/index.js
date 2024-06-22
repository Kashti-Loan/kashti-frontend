"use client";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { useState } from "react";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import CustomImage from "@components/ui/customImage";
import { takePhoto } from "@public/assets";

const TakePhoto = (props) => {
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.takePhotoSection}>
          <h3>Take Photo</h3>
          <Text>Verify your identity by taking a Photo</Text>
          <CustomImage src={takePhoto} alt="Take Selfie" />
          <button>Take Photo</button>
        </div>
        <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
          <button
            type="button"
            className="primaryBtn"
            onClick={() => props.onSubmit()}
          >
            Upload
          </button>
        </div>
      </form>
      <Text className={styles.dataSafetyInfo}>
        <DataSafetyIcon />
        <span>
          Your data’s safety is our top priority. It is secured by cutting-edge
          encryption and stringent privacy protocols.
        </span>
      </Text>
    </div>
  );
};

export default TakePhoto;
