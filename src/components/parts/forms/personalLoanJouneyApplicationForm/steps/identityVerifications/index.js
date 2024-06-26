"use client";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import Link from "next/link";
import { SectionTitle, Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { useState } from "react";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import CustomImage from "@components/ui/customImage";
import { cloudUpload, takePhoto } from "@public/assets";
import { routesConstant } from "@utils/routesConstant";

const IdentityVerifications = (props) => {
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.takePhotoSection}>
          <h3>Identity Verification</h3>
          <Text>Please upload your PAN Card</Text>
          <div className={styles.dragDropBox}>
            <div>
              <CustomImage src={cloudUpload} />
              <SectionTitle>Drag files to upload</SectionTitle>
              <SectionTitle>or</SectionTitle>
              <button className="primaryBtn">Upload or take a photo</button>
            </div>
            <ul>
              <li>Please make sure that the image is clear</li>
              <li>File size shouldn’t be more than 700 KB</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
          {/* <button
            type="button"
            className="primaryBtn"
            onClick={() => props.onSubmit()}
          >
            Submit
          </button> */}
          <Link
            href={routesConstant.RECOMMENDED_PERSONAL_LOAN}
            className="primaryBtn"
          >
            Submit
          </Link>
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

export default IdentityVerifications;
