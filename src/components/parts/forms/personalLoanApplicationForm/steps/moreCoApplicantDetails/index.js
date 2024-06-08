"use client";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import {
  GenderFemale,
  GenderMale,
  daughter,
  father,
  mother,
  son,
  spouse,
} from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import SelectTag from "@components/ui/selectTag";
import CommonTooltip from "@components/ui/commonTooltip";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { useRouter } from "next/navigation";
import { routesConstant } from "@utils/routesConstant";

const MoreCoApplicantDetails = (props) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("Spouse");

  const { setCurrentStep, setCompletedSteps, onAddCustomerData, loanData } =
    usePersonalLoan();

  const BasicSchema = Yup.object().shape({
    coApplicantMobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    coApplicantEmail: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    coApplicantRelation: Yup.string().required(
      "Co-Applicant relation is required"
    ),
  });

  const defaultValues = {
    coApplicantMobile: loanData?.coApplicantMobile || "",
    coApplicantEmail: loanData?.coApplicantEmail || "",
    coApplicantRelation: loanData?.coApplicantRelation || "",
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
    setValue,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  async function onSubmit(data) {
    try {
      const response = await onAddCustomerData(
        data,
        13,
        "More CoApplicant Details"
      );
      fbq('trackCustom', "MoreCoApplicantDetailsFilled");
      fbq('track', "Submit Application");
      router.replace(routesConstant.RECOMMENDED_PERSONAL_LOAN);
      console.log('MoreCoApplicantDetailsFilled');

      return;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className={styles.formSection}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Little more details</h3>
            <Text>Tell us more about Co-Applicant Details</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="coApplicantMobile"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <MoneyPhoneInputTag
                  {...field}
                  label="Mobile Number"
                  type="text"
                  name="coApplicantMobile"
                  placeholder="Enter 10 digit mobile number"
                  initial="+91"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="coApplicantEmail"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  name="coApplicantEmail"
                  label="Personal Email"
                  placeholder="Email address"
                  type="email"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.radioGrpBlock}>
            <h3>Relation with Co-Applicant*</h3>
            <div className={styles.radioGrpInner}>
              <RadioImageButton
                label="Spouse"
                icon={spouse}
                checked={getValues("coApplicantRelation") === "Spouse"}
                onChange={() =>
                  setValue("coApplicantRelation", "Spouse", {
                    shouldValidate: true,
                  })
                }
              />
              <RadioImageButton
                label="Mother"
                icon={mother}
                checked={getValues("coApplicantRelation") === "Mother"}
                onChange={() =>
                  setValue("coApplicantRelation", "Mother", {
                    shouldValidate: true,
                  })
                }
              />
              <RadioImageButton
                label="Father"
                icon={father}
                checked={getValues("coApplicantRelation") === "Father"}
                onChange={() =>
                  setValue("coApplicantRelation", "Father", {
                    shouldValidate: true,
                  })
                }
              />
              <RadioImageButton
                label="Son"
                icon={son}
                checked={getValues("coApplicantRelation") === "Son"}
                onChange={() =>
                  setValue("coApplicantRelation", "Son", {
                    shouldValidate: true,
                  })
                }
              />
              <RadioImageButton
                label="Daughter"
                icon={daughter}
                checked={getValues("coApplicantRelation") === "Daughter"}
                onChange={() =>
                  setValue("coApplicantRelation", "Daughter", {
                    shouldValidate: true,
                  })
                }
              />
            </div>
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="more-coapplicant-details"
              data-event="CoApplicantDetailsFilled"

              id="more-coapplicant-details"

              type="submit"
              className="primaryBtn"
            >
              {isSubmitting ? "Updating Data..." : "Continue"}
            </button>
          </div>
        </form>
      </FormProvider>
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

export default MoreCoApplicantDetails;
