"use client";
import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";

import * as Yup from "yup";
// form
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import CustomInput from "@components/ui/customInput";
import PhoneNumberInput from "@components/ui/phoneNumberInput";
import StepperContainer from "@components/container/stepperContainer";

const StepZero = (props) => {
  const [otpSent, setOtpSent] = useState(false);

  const { basicDetail, sendOtp, onVerifyOTP, onResendOTP } = usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    full_name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    tcagree: Yup.boolean().required("The terms and conditions must be accepted.").oneOf([true], "The terms and conditions must be accepted."),
  });

  const defaultValues = {
    tcagree: false,
  };

  const methods = useForm({
    resolver: yupResolver(BasicSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  async function onSubmit(data) {
    try {
      const response = await sendOtp(data);
      setOtpSent(true);
      return;
    } catch (error) {
      if (error === "Rejected") {
        setError({ pan_no: `PAN Card Verification Failed.` });
      }
      setOtpSent(false);

      return error;
    }
  }

  return (
    <StepperContainer className={styles.personalLoanStepper} label={"Personal Loan"} color={"#FBCAA4"} cornerColor={"#F79446"}>
      <div className={styles.mobileHeading}>
        <h2>Personal Loan</h2>
      </div>
      <div className={styles.formSection}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputBlock}>
              <Controller
                name='full_name'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputTag
                    {...field}
                    label='Name (As per PAN Card)*'
                    type='text'
                    name='full_name'
                    placeholder='Enter Name as per PAN'
                    tooltip
                    tooltipContent={"Name as per PAN"}
                    error={error?.message}
                  />
                )}
              />
              <Controller
                name='phone'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <MoneyPhoneInputTag {...field} label='Mobile Number*' type='tel' placeholder='Mobile Number' initial='+91' error={error?.message} />
                )}
              />
            </div>
            <div className={`${styles.inputBlock} ${styles.consentBlock}`}>
              <label className='material-checkbox'>
                <Controller
                  name='tcagree'
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <input {...field} type='checkbox' name='tcagree' id='tcagree' error={error?.message} />
                    </>
                  )}
                />
                <span className='checkmark tcagree'></span>
                <span>
                  By submitting this form, you have read and agreed to the <Link href='#'>Credit Report</Link>, <Link href='#'>Terms of Use</Link> and{" "}
                  <Link href='#'>Privacy Policy</Link>
                </span>
              </label>
            </div>
            <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
              <button disabled={!watch("tcagree")} type='submit' className='primaryBtn' style={{ opacity: watch("tcagree") ? 1 : 0.6 }}>
                {isSubmitting ? `Sending OTP...` : `Proceed and Verify`}
              </button>
            </div>
          </form>
        </FormProvider>
        <Text className={styles.dataSafetyInfo}>
          <DataSafetyIcon />
          <span>Your data’s safety is our top priority. It is secured by cutting-edge encryption and stringent privacy protocols.</span>
        </Text>
        {otpSent && (
          <PopupPortal display={otpSent}>
            <div className='popupBox'>
              <OtpVerfication basicDetail={basicDetail} onVerifyOTP={onVerifyOTP} onResendOTP={onResendOTP} />
            </div>
          </PopupPortal>
        )}
      </div>
    </StepperContainer>
  );
};

export default StepZero;
