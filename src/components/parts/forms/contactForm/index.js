"use client";
import { useState } from "react";
import Link from "next/link";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SectionTitle, Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { usePersonalLoan } from "@context/PersonalLoanContext";
import { EMAIL_REGX } from "@utils/constant";
import InputTag from "@components/ui/inputTag";
import MoneyPhoneInputTag from "@components/ui/moneyPhoneInputTag";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const BasicSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(EMAIL_REGX, "Email must be a valid email address")
      .required("Email is required"),
    mobile_number: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    message: Yup.string().required("Message is required"),
  });

  const defaultValues = {
    name: "",
    email: "",
    mobile_number: "",
    message: "",
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

  async function onSubmit(data, e) {
    setIsLoading(true);
    axios
      .post("https://kashti.vercel.app/api/contactform/", data)
      .then((response) => {
        toast.success("Contact form submitted successfully!");
        reset();
        e.target.reset();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Toaster />
      <div className={styles.contactFormBox}>
        <SectionTitle>Enquiry Form</SectionTitle>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputBlock}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputTag
                    {...field}
                    name="name"
                    label="Name*"
                    placeholder="Name"
                    type="text"
                    error={error?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputTag
                    {...field}
                    name="email"
                    label="Email*"
                    placeholder="Email address"
                    type="email"
                    error={error?.message}
                  />
                )}
              />
              <Controller
                name="mobile_number"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <MoneyPhoneInputTag
                    {...field}
                    name="mobile_number"
                    label="Mobile Number*"
                    type="tel"
                    placeholder="Mobile Number"
                    initial="+91"
                    error={error?.message}
                    style={{ marginLeft: 38, width: "80% !important" }}
                  />
                )}
              />
              <div>
                <label>Message*</label>
                <textarea
                  onChange={(event) => {
                    setValue("message", event.target.value, {
                      shouldValidate: true,
                    });
                  }}
                  name="message"
                  placeholder="Enter Message"
                  rows={5}
                />
                <div className={styles.errorBox}>
                  {errors?.message?.message && (
                    <p className={styles.error}>{errors?.message?.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button
                disabled={isLoading}
                style={{ opacity: isLoading ? 0.6 : 1 }}
                type="submit"
                className="primaryBtn"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </FormProvider>
        <div className={styles.mobileContactInfo}>
          <ul>
            <li>
              <Link href="#">
                <GeoAlt />
                <div>
                  <h3>Address</h3>
                  <Text>
                    Kashti Finserv Pvt Ltd. “ICS SQUARE” Building NO.57 , Ground
                    Floor, 8th Main Road J.P Nagar 3rd Phase, Near SBI Bank
                    Bengaluru- 560078
                  </Text>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Envelope />
                <div>
                  <h3>Email ID</h3>
                  <Text>
                    <b>General:</b> support@kashti.com
                  </Text>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
