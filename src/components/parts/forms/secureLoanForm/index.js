"use client";

import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import Link from "next/link";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import * as Yup from "yup";
// form
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputTag from "@components/ui/inputTag";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import { useEffect, useState } from "react";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import PopupPortal from "@components/parts/popups/popupPortal";
import OtpVerfication from "@components/parts/popups/otpVerificaton";
import { routesConstant } from "@utils/routesConstant";

const SecureLoanToday = ({ apiKey, secretKey }) => {
  const [otpSent, setOtpSent] = useState(false);

  const { basicDetail, sendOtp, onVerifyOTP, onResendOTP } = usePersonalLoan();

  const { setApiKey, setSecretKey, accessToken } = usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    full_name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    tcagree: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
  });

  const defaultValues = {
    tcagree: true,
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
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (apiKey && secretKey) {
      setSecretKey(secretKey);
      setApiKey(apiKey);
    }
  }, []);

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
    <div className={styles.secureLoanTodayBox}>
      <h4>Secure Your Loan Today</h4>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBlock}>
            <div className={styles.inputField}>
              <Controller
                name="full_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputTag
                    {...field}
                    label="Full Name*"
                    type="text"
                    name="full_name"
                    placeholder="Enter Full Name"
                    error={error?.message}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <MoneyPhoneInputTag
                    {...field}
                    label="Mobile Number*"
                    type="tel"
                    placeholder="Mobile Number"
                    initial="+91"
                    error={error?.message}
                    phoneNumber
                    tooltip
                    tooltipContent={"Mobile Number"}
                    onChange={(event) => {
                      setValue(
                        "phone",
                        event.target.value
                          .replaceAll("+91", "")
                          .replaceAll(" ", ""),
                        { shouldValidate: true }
                      );
                    }}
                  />
                )}
              />
            </div>
            <div className={styles.consentBlock}>
              <label className="material-checkbox">
                <Controller
                  name="tcagree"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <input
                        {...field}
                        type="checkbox"
                        name="tcagree"
                        id="tcagree"
                        error={error?.message}
                        checked={getValues("tcagree")}
                      />
                    </>
                  )}
                />
                <span className="checkmark"></span>
                <Text className={styles.agreeTerms}>
                  By Continuing, I agree to Kashti's {" "}
                  <Link target="_blank" href={routesConstant.PRIVACY_POLICY}>
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link target="_blank" href={routesConstant.TERMS_CONDITION}>
                    Terms & Conditions
                  </Link>{" "}
                  and sharing data with Roopya for Credit Bureau and bank login.
                </Text>
              </label>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className="primaryBtn">
              {isSubmitting ? `Sending OTP...` : `Apply Now`}
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
      </FormProvider>
      {otpSent && (
        <PopupPortal display={otpSent}>
          <div className="popupBox">
            <OtpVerfication
              basicDetail={basicDetail}
              onVerifyOTP={onVerifyOTP}
              onResendOTP={onResendOTP}
              setOtpSent={setOtpSent}
            />
          </div>
        </PopupPortal>
      )}
    </div>
  );
};

export default SecureLoanToday;
