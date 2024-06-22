"use client";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import InputTag from "@components/ui/inputTag";
import styles from "./styles.module.scss";
import PhoneInputTag from "@components/ui/moneyPhoneInputTag";
import Link from "next/link";
import { Text } from "@styles/styledComponent";
import DataSafetyIcon from "@components/ui/svg/dataSafetyIcon";
import { GenderFemale, GenderMale } from "@public/assets";
import RadioImageButton from "@components/ui/radioImageButton";
import SelectTag from "@components/ui/selectTag";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { usePathname, useRouter } from "next/navigation";
import { routesConstant } from "@utils/routesConstant";

const CompanyDetails = (props) => {
  const router = useRouter();
  const companyType = [
    {
      label: "Private Limited",
      value: "Private limited",
    },
    {
      label: "Partnership Company",
      value: "Partnership Company",
    },
    {
      label: "Proprietor",
      value: "Proprietor",
    },
    {
      label: "Government/PSU",
      value: "Government/PSU",
    },
    {
      label: "LLP",
      value: "LLP",
    },
    {
      label: "Public",
      value: "Public",
    },
  ];
  const pathname = usePathname();
  const {
    setCurrentStep,
    setCompletedSteps,
    onAddCustomerData,
    loanData,
    getPreApprovedLoans,
  } = usePersonalLoan();

  const [isLoading, setIsLoading] = useState(false);

  const BasicSchema = Yup.object().shape({
    company_name: Yup.string().required("Company name is required"),
    company_type: Yup.string().required("Compnay type is required"),
    work_experience: Yup.string().required("Work experience is required"),
  });

  const defaultValues = {
    company_name: loanData?.company_name || "",
    company_type: loanData?.company_type || "Private limited",
    work_experience: loanData?.work_experience || "",
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
      const response = await onAddCustomerData(data, 9, "Company Detail");
      if (loanData.employment_type === "Salaried") {
        fbq("track", "SubmitApplication");

        if (pathname.includes("personal-loan-questionairre-journey3")) {
          setIsLoading(true);
          const loanOffersList = await getPreApprovedLoans();
          if (
            loanOffersList &&
            loanOffersList.length > 0 &&
            loanOffersList[0]?.apply_link
          ) {
            window.open(loanOffersList[0]?.apply_link);
          }
          router.replace(routesConstant.PERSONAL_LOAN_OFFER);
        } else {
          router.replace(routesConstant.PERSONAL_LOAN_OFFER);
        }
      } else {
        setCurrentStep(10);
      }
      setCompletedSteps((prev) => [...prev, 9]);
      fbq("trackCustom", "CompanyDetailsFilled");

      console.log("CompanyDetailsFilled");

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
            <h3>Company Details</h3>
            <Text>Please enter your company details</Text>
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="company_name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Company Name*"
                  type="text"
                  name="company_name"
                  placeholder="Oakwood Finances"
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="company_type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <SelectTag
                  {...field}
                  label="Company Type*"
                  name="company_type"
                  options={companyType}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={styles.inputBlock}>
            <Controller
              name="work_experience"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputTag
                  {...field}
                  label="Total Work Experience* (Years)"
                  type="text"
                  name="work_experience"
                  placeholder="12"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className={`${styles.inputBlock} ${styles.submitBlock}`}>
            <button
              data-testid="company-detail"
              data-event="CompanyDetailsFilled"
              id="company-detail"
              type="submit"
              className="primaryBtn"
            >
              {isSubmitting || isLoading ? "Updating Data..." : "Continue"}
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

export default CompanyDetails;
