"use client";

import { loanAPI, YO_INDI_API } from "@api/apiConfig";
import { phone } from "@public/assets";
import { routesConstant } from "@utils/routesConstant";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export const PersonalLoanContext = createContext();

export function PersonalLoanProvider({ children }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [basicDetail, setBasicDetail] = useState(null);
  const [applicationDetail, setApplicationDetail] = useState(null);
  const [leadDetail, setLeadDetail] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [loanData, setLoanData] = useState(null);

  //Save Secret and API Key
  useEffect(() => {
    console.log("API & SECRET:", apiKey, secretKey);
    if (apiKey && secretKey) {
      localStorage.setItem("apiKey", apiKey);
      localStorage.setItem("secretKey", secretKey);
    } else {
      localStorage.removeItem("apiKey");
      localStorage.removeItem("secretKey");
    }
  }, [apiKey, secretKey]);

  //Send OTP to user's phone number
  const sendOtp = async (data) => {
    let payload = {
      phone: data.phone,
      countryCode: "+91",
    };
    setBasicDetail(data);
    return new Promise((resolve, reject) => {
      fetch("https://api.db-ip.com/v2/free/self", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          payload.ip = response.ipAddress;
          loanAPI
            .post("/customer/api/v2/customer/lead/", payload)
            .then((response) => {
              console.log("Response:", response.data);
              setBasicDetail(data);
              setLeadDetail(response.data.data);
              resolve(response.data);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          payload.ip = "220.158.156.86";
          loanAPI
            .post("/customer/api/v2/customer/lead/", payload)
            .then((response) => {
              console.log("Response:", response.data);
              setBasicDetail(data);
              setLeadDetail(response.data.data);
              resolve(response.data);
            })
            .catch((err) => {
              reject(err);
            });
        });
    });
  };

  const onResendOTP = async () => {
    let payload = {
      phone: basicDetail.phone,
      countryCode: "+91",
      type: "text",
    };
    return new Promise((resolve, reject) => {
      loanAPI
        .post("/customer/api/v2/customer/lead/otp/resend/", payload)
        .then((response) => {
          console.log("Response:", response.data);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const onVerifyOTP = async (otp) => {
    let payload = {
      phone: basicDetail.phone,
      otp,
    };
    return new Promise((resolve, reject) => {
      loanAPI
        .post("/customer/api/v2/customer/lead/otp/verifiy", payload)
        .then((response) => {
          if (response.data.statusCode === 200) {
            console.log("response.data", response.data.data.token);
            setApplicationDetail(response.data.data);
            setAccessToken(response.data.data.token);
            router.replace(`${routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}/${apiKey}/${secretKey}`);
            resolve(response.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const onVerifyPAN = async (pan) => {
    let payload = {
      mobileNumber: basicDetail?.phone,
      pan,
      contactId: leadDetail?.contact.id,
    };
    return new Promise((resolve, reject) => {
      YO_INDI_API.post("/api/v2/customer/lead/pan-ocr/", payload)
        .then((response) => {
          resolve("Approved");
        })
        .catch((err) => {
          console.log("Error:", err.response);
          if (err.response.status !== 500) {
            reject("Rejected");
          } else {
            reject(err);
          }
        });
    });
  };

  const onAddCustomerData = async (data, slideIndex, slideName, slideIcon) => {
    let payload = {
      app_id: applicationDetail.appID,
      ...data,
    };
    return new Promise((resolve, reject) => {
      loanAPI
        .post(`/customer/api/v2/customer/lead/add/${applicationDetail.appID}`, payload)
        .then((response) => {
          console.log("Response:", response.data);
          setLoanData((prevData) => ({
            ...prevData,
            ...data,
          }));
          resolve(response.data);
          updateLastSlide(slideIndex, slideName, slideIcon);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const updateLastSlide = async (slideIndex, slideName, slideIcon) => {
    let payload = {
      leadId: leadDetail?.leadData?.id,
      slideIndex,
      slideName,
      slideIcon: slideIcon || slideName,
      totalSlides: 3,
    };
    return new Promise((resolve, reject) => {
      YO_INDI_API.post("/api/v2/customer/updateJourneyLastVisitedSlide/", payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getPreApprovedLoans = async () => {
    let payload = {
      lead_id: leadDetail?.leadData?.id,
    };
    return new Promise((resolve, reject) => {
      YO_INDI_API.post("/api/v2/customer/getPreApprovedLoans", payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          console.log("Pre Approved Loans:", response.data);
          resolve(response.data?.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const realTimeLeadPush = async () => {
    let payload = {
      id: applicationDetail.appID,
    };
    return new Promise((resolve, reject) => {
      YO_INDI_API.post("/api/v2/bank/realTimeLead/push", payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          console.log("Leads", response.data);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const pullBureauData = async () => {
    let payload = {
      id: applicationDetail.appID,
    };
    return new Promise((resolve, reject) => {
      loanAPI
        .post("/customer/api/v2/bank/checkAutoBureauPull", payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log("Leads", response.data);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getStateCityUsingPincode = async (pincode) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          if (response && response.length > 0) {
            const pincodeData = response[0].PostOffice ? response[0].PostOffice[0] : null;
            resolve(pincodeData);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <PersonalLoanContext.Provider
      value={{
        currentStep,
        setApiKey,
        setSecretKey,
        sendOtp,
        onResendOTP,
        basicDetail,
        completedSteps,
        onVerifyOTP,
        onVerifyPAN,
        onAddCustomerData,
        setCurrentStep,
        setCompletedSteps,
        getPreApprovedLoans,
        realTimeLeadPush,
        pullBureauData,
        accessToken,
        loanData,
        getStateCityUsingPincode,
        setLoanData,
      }}
    >
      {children}
    </PersonalLoanContext.Provider>
  );
}

export const usePersonalLoan = () => useContext(PersonalLoanContext);
