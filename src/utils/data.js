import {
  axis_card,
  bajaj_finserv,
  bikeLoanEmi,
  bob_card,
  carLoanEmi,
  citi_loan,
  compoundInterest,
  creditCardImg,
  creditCardLoan,
  demoBlogOne,
  demoBlogThree,
  demoBlogTwo,
  demoUserOne,
  demoUserThree,
  demoUserTwo,
  homeLoanEmi,
  hsbc_card,
  idfc_b,
  idfc_card,
  incred,
  indus_bank,
  kotak_loan,
  kreditBee,
  kredit_bee,
  muthoot_fin,
  personalLoanEmi,
  piramal,
  poonawal,
  simpleInterest,
  tata_capital,
} from "@public/assets";
import { routesConstant } from "./routesConstant";

export const interestRateData = [
  {
    image: tata_capital,
    title: "Tata Capital",
    score: ">750",
    interest: "10.99% - 35%",
    loan: "Up to ₹75L",
    tenure: "Upto 6 Years",
    fee: "Upto 2%",
    themeColor: "#E9F4EC",
    description:
      "Tata Capital offers personal loan interest rates beginning at 10.99% p.a. for amounts up to Rs 75 lakh, with a maximum tenure of 6 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Tata Capital's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: poonawal,
    title: "Poonawalla Fincorp",
    score: ">650",
    interest: "11% to 24%",
    loan: "Up to ₹25L",
    tenure: "Upto 5 Years",
    fee: "Upto 2%",
    themeColor: "#FEF2E9",
    description:
      "Poonawalla Fincorp offers personal loan interest rates beginning at 11% p.a. for amounts up to Rs 25 lakh, with a maximum tenure of 5 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Poonawalla Fincorp's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: indus_bank,
    title: "Induslnd",
    score: ">700",
    interest: "10.49% - 26%",
    loan: "Up to ₹50L",
    tenure: "1-5 Years",
    fee: "Upto 4%",
    themeColor: "#EAEBF3",
    description:
      "Induslnd offers personal loan interest rates beginning at 10.49% p.a. for amounts up to Rs 50 lakh, with a maximum tenure of 5 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows IndusInd's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: idfc_b,
    title: "IDFC",
    score: ">700",
    interest: "10.99% - 23.99%",
    loan: "Up to ₹1Cr",
    tenure: "Upto 5 Years",
    fee: "Upto 2%",
    themeColor: "#EAEBF3",
    description:
      "IDFC Bank offers personal loan interest rates beginning at 10.99% p.a. for amounts up to Rs 1Cr, with a maximum tenure of 5 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows IDFC Bank's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: kredit_bee,
    title: "Kreditbee",
    score: ">600",
    interest: "16% - 29.95%",
    loan: "Up to ₹2L",
    tenure: "4 to 36 months.",
    fee: "₹150 to ₹13,750",
    themeColor: "#EAEBF3",
    description:
      "Kreditbee offers personal loan interest rates beginning at 16% p.a. for amounts up to Rs 2 lakh, with a maximum tenure of 3 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Kreditbee's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: piramal,
    title: "Piramal",
    score: ">650",
    interest: "12% to 26%",
    loan: "Up to ₹5L",
    tenure: "Upto 5 Years",
    fee: "Upto 4%",
    themeColor: "#EAEBF3",
    description:
      "Piramal offers personal loan interest rates beginning at 12% p.a. for amounts up to Rs 5 lakh, with a maximum tenure of 5 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Piramal's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: bajaj_finserv,
    title: "Bajaj Finserv",
    score: ">750",
    interest: "11% - 25%",
    loan: "Up to ₹40L",
    tenure: "Upto 8 Years",
    fee: "Upto 4%",
    themeColor: "#EAEBF3",
    description:
      "Bajaj Finserv offers personal loan interest rates beginning at 11% p.a. for amounts up to Rs 40 lakh, with a maximum tenure of 8 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Bajaj Finserv's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: muthoot_fin,
    title: "Muthoot",
    score: ">650",
    interest: "12% to 28%",
    loan: "Up to ₹25L",
    tenure: "Upto 5 Years",
    fee: "Upto 2%",
    themeColor: "#EAEBF3",
    description:
      "Muthoot offers personal loan interest rates beginning at 12% p.a. for amounts up to Rs 25 lakh, with a maximum tenure of 5 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Muthoot's existing customers to check their eligibility for this pre-approved loan offer.",
  },
  {
    image: incred,
    title: "Incred",
    score: ">650",
    interest: "11% to 24%",
    loan: "Up to ₹20L",
    tenure: "Upto 5 Years",
    fee: "Upto 2%",
    themeColor: "#EAEBF3",
    description:
      "Incred offers personal loan interest rates beginning at 11% p.a. for amounts up to Rs 20 lakh, with a maximum tenure of 5 years. Additionally, by applying now, you can take advantage of a variety of loan products made for your financial needs. Clicking here allows Incred's existing customers to check their eligibility for this pre-approved loan offer.",
  },
];

export const calculatorData = [
  {
    image: personalLoanEmi,
    title: "Personal Loan EMI",
    description:
      "Know your Personal Loan EMI right away using our quick calculator",
    hoverColor: "linear-gradient(180deg, #EAF4EC 0%, #BDDCC5 100%)",
  },
  {
    image: homeLoanEmi,
    title: "Home Loan EMI",
    description: "Calculate Home Loan EMIs instantly with our EMI calculator.",
    hoverColor: "linear-gradient(180deg, #FEF2E9 0%, #FCD7BA 100%)",
  },
  {
    image: simpleInterest,
    title: "Simple Interest",
    description:
      "Calculate Simple Interest on investments and loans instantly.",
    hoverColor: "linear-gradient(180deg, #EAEBF3 0%, #BCC0DA 100%)",
  },
  {
    image: carLoanEmi,
    title: "Car Loan EMI",
    description: "Know your Car Loan EMI right away using our swift calculator",
    hoverColor: "linear-gradient(180deg, #EAEBF3 0%, #BCC0DA 100%)",
  },
  {
    image: bikeLoanEmi,
    title: "Bike Loan EMI",
    description:
      "Know your Bike Loan EMI right away using our swift calculator",
    hoverColor: "linear-gradient(180deg, #EAF4EC 0%, #BDDCC5 100%)",
  },
  {
    image: creditCardLoan,
    title: "Credit Card Loan",
    description:
      "Know your Personal Loan EMI right away using our quick calculator",
    hoverColor: "linear-gradient(180deg, #FEF2E9 0%, #FCD7BA 100%)",
  },
  {
    image: compoundInterest,
    title: "Compound Interest",
    description:
      "Calculate Compound Interest on investments and loans instantly.",
    hoverColor: "linear-gradient(180deg, #FEF2E9 0%, #FCD7BA 100%)",
  },
];

export const genderData = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Prefer Not To Say",
  },
];

export const sortByData = [
  {
    id: 1,
    name: "Recommended",
    value: "recommended",
  },
  {
    id: 2,
    name: "Popularity",
    value: "popularity",
  },
  {
    id: 3,
    name: "Low to High Fee",
    value: "asc",
  },
  {
    id: 3,
    name: "High to Low Fee",
    value: "dsc",
  },
];

export const langData = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "Hindi",
  },
  {
    id: 3,
    name: "French",
  },
];

export const residentialData = [
  {
    id: 1,
    name: "Owned by Self/Spouse",
  },
  {
    id: 2,
    name: "Rental",
  },
  {
    id: 3,
    name: "Owned by Self/Spouse",
  },
];

export const primaryBankData = [
  {
    id: 1,
    name: "Canara Bank",
  },
  {
    id: 2,
    name: "HDFC Bank",
  },
  {
    id: 3,
    name: "SBI Bank",
  },
];

export const yearlyIncomeData = [
  {
    id: 1,
    name: "1,00,000 - 3,00,000",
  },
  {
    id: 2,
    name: "4,00,000 - 6,00,000",
  },
  {
    id: 3,
    name: "6,00,000 - 9,00,000",
  },
];

export const faqData = [
  {
    id: 1,
    title: "What is a secured credit card?",
    description:
      "A debit card allows you to withdraw money directly from your bank account deposits. A credit card, on the other hand, is similar to a short-term loan from the card issuer that allows you to make payments or withdraw cash. Rather than repaying this short-term loan on a per-use basis, all of your credit card spending are combined into a single bill at the end of the billing cycle.",
  },
  {
    id: 2,
    title: "What is the difference between a credit card and a debit card?",
    description:
      "A debit card allows you to withdraw money directly from your bank account deposits. A credit card, on the other hand, is similar to a short-term loan from the card issuer that allows you to make payments or withdraw cash. Rather than repaying this short-term loan on a per-use basis, all of your credit card spending are combined into a single bill at the end of the billing cycle.",
  },
  {
    id: 3,
    title: "What are the different types of credit cards?",
    description:
      "A debit card allows you to withdraw money directly from your bank account deposits. A credit card, on the other hand, is similar to a short-term loan from the card issuer that allows you to make payments or withdraw cash. Rather than repaying this short-term loan on a per-use basis, all of your credit card spending are combined into a single bill at the end of the billing cycle.",
  },
  {
    id: 4,
    title: "How long does it take to apply for and receive a Credit Card?",
    description:
      "A debit card allows you to withdraw money directly from your bank account deposits. A credit card, on the other hand, is similar to a short-term loan from the card issuer that allows you to make payments or withdraw cash. Rather than repaying this short-term loan on a per-use basis, all of your credit card spending are combined into a single bill at the end of the billing cycle.",
  },
  {
    id: 5,
    title: "How to know if I am eligible for a credit card?",
    description:
      "A debit card allows you to withdraw money directly from your bank account deposits. A credit card, on the other hand, is similar to a short-term loan from the card issuer that allows you to make payments or withdraw cash. Rather than repaying this short-term loan on a per-use basis, all of your credit card spending are combined into a single bill at the end of the billing cycle.",
  },
];

export const homeFaq = [
  {
    id: 1,
    title: "What is Kashti?",
    description:
      "Kashti is a lendingtech marketplace. It is a digital platform that connects borrowers with lenders, facilitating the process of borrowing and lending money.",
  },
  {
    id: 2,
    title: "How does Kashti work?",
    description:
      "Lendingtech marketplaces typically operate by collecting information from borrowers through an online application process. This information is then used to assess the borrower's creditworthiness and match them with potential lenders. Once a match is made, the borrower can review loan offers and choose the one that best fits their needs.",
  },
  {
    id: 3,
    title: "What types of Loans are availaible on Kashti Platform?",
    description:
      "Kashti provides you with Personal Loans, Credit Cards, Gold Loan and Business Loan",
  },
  {
    id: 4,
    title: "Who does Kashti Help you obtain Loan from?",
    description:
      "Kashti has multiple RBI approved lenders such as banks and NBFCs who provide the loans",
  },
  {
    id: 5,
    title: "What are the requirements to Borrow through Kashti platform?",
    description:
      "Borrowers typically need to meet certain eligibility criteria, such as minimum credit score and income requirements. The specific requirements may vary depending on the lender and the type of loan being sought.",
  },
];

export const personalLoanFaq = [
  {
    id: 1,
    title: "What is a Personal Loan?",
    description:
      "A personal loan is a type of unsecured loan that you can use for various personal expenses, such as debt consolidation, home improvements, medical bills, or unexpected expenses. Unlike secured loans, personal loans don't require collateral.",
  },
  {
    id: 2,
    title: "How do I apply for a personal loan through Kashti Platform?",
    description:
      "Applying for a personal loan on our platform is simple. Just fill out our online application form and provide your basic personal and financial information. Once submitted, we'll review your application and match you with potential lenders.",
  },
  {
    id: 3,
    title: "What are the eligibility criteria for a personal loan?",
    description:
      "Eligibility criteria may vary depending on the lender, but common requirements include a minimum age (usually 18 or 21), a steady source of income, and a good credit score. Some lenders may also consider factors like your debt-to-income ratio and employment history.",
  },
  {
    id: 4,
    title: "How long does it take for loan approval?",
    description:
      "On the Kashti platform, it takes a few minutes to submit your basic details, check mandatory requirements, and choose you lender.",
  },
  {
    id: 5,
    title: "What loan terms are available for personal loans?",
    description:
      "Loan terms, including the loan amount, interest rate, and repayment period vary depending on the lender and your individual financial profile. Our platform works with a network of lenders offering a range of loan options to suit different needs and circumstances.",
  },
  {
    id: 6,
    title: "What interest rates can I expect for a personal loan?",
    description:
      "Interest rates for personal loans vary based on factors such as your creditworthiness, income, loan amount, and loan term. Our platform helps you compare offers from multiple lenders, allowing you to choose the one with the most competitive rate for your situation.",
  },
  {
    id: 7,
    title:
      "Is my information secure when applying for a personal loan through your platform?",
    description:
      "Yes, we take the security and privacy of your personal information seriously. Our platform uses encryption and other security measures to protect your data and ensure confidentiality throughout the loan application process.",
  },
];

export const safeguardData = [
  {
    id: 1,
    title: "Data Security Assurance",
    description:
      "The security of your data is our top priority. We implement the most stringent safety protocols to protect your information and privacy.",
  },
  {
    id: 2,
    title: "Encrypted Transmission",
    description:
      "Every interaction on our platform is encrypted using industry-standard protocols, ensuring your information remains confidential during transmission and safeguarding it from unauthorized access.",
  },
  {
    id: 3,
    title: "Secure Storage",
    description:
      "Purchase with confidence on Kashti. With our secured data storage using the best solutions, we ensure that your data is handled with the utmost care and protection.",
  },
  {
    id: 4,
    title: "Transparent Practices",
    description:
      "We value your trust. Make confident, informed financial decisions every time with our clear and honest practices.",
  },
];

export const homeProductData = [
  {
    title: "Credit Cards",
    description:
      "Shop, dine, or travel - compare and choose from 50+ credit cards.",
    range: "50+ Cards",
    cta_data: {
      name: "Get Best Offers",
      link: "/personal-loan-questionairre/e0c1293d84d27d47619259ff8f0f74b35fa0fdf8cd022268238992959ddcbdcc/28b59cecaa349138a793e5a843c9fd2de0059893c2cbd8a4d7ddbb3c4b047a0b",
    },
    bgColor: "#EAEBF3",
    rangeBg: "#BCC0DA",
    rangeColor: "#475467",
  },
  {
    title: "Instant Personal Loan",
    description: "Low rate. Paperless. Quick. Compare and get the best deal.",
    range: "From ₹1000 to ₹50L",
    cta_data: {
      name: "Check Eligibility",
      link: "/personal-loan-questionairre/c9075a3a6da665e2548bc14d43c1d0f964d5265cdb8ec0d8cba8976fcfd7b178/465e05022896bb294fde175befa11b70838bc06f06ea5383eb1af216341435f1",
    },
    bgColor: "#EAF4EC",
    rangeBg: "#4BA264",
    rangeColor: "var(--globalWhite)",
  },
  {
    title: "Business Loan",
    description: "Lowest rates with minimum documentation for maximum growth.",
    range: "From ₹1000 to ₹50L",
    cta_data: {
      name: "Check Eligibility",
      link: "/personal-loan-questionairre/447ed34df5a76493a346dd7b7b596b5ec53db68cd79ade110cfac262331f0843/bb56a2590b125c6d9724a2463ae3f3e5368f65eccdd416fde5b3cb4b78e6e8f8",
    },
    bgColor: "#FEF2E9",
    rangeBg: "#F9B47E",
    rangeColor: "#475467",
  },
  {
    title: "Gold Loan",
    description:
      "Turn gold into instant cash at the best rates and lowest interest.",
    range: "From ₹1000 to ₹50L",
    cta_data: {
      name: "Check Eligibility",
      link: "/personal-loan-questionairre/85be6be79b45f1ae8f867fa638a233e51e6d854423f74b30c8036f7317292558/cdf4e72123326b03210d9b77e7e47702d1aefc298b68a8c72736bec5e95a2d4e",
    },
    bgColor: "#FFFAEA",
    rangeBg: "F8BE324D",
    rangeColor: "#475467",
  },
];

export const webHomeProductData = [
  {
    title: "Credit Cards",
    description:
      "Shop, dine, or travel - compare and choose from 50+ credit cards.",
    range: "50+ Cards",
    cta_data: {
      name: "Get Best Offers",
      link: routesConstant.CREDIT_CARD_QUESTIONAIRRE,
    },
    bgColor: "#EAEBF3",
    rangeBg: "#BCC0DA",
    rangeColor: "#475467",
  },
  {
    title: "Instant Personal Loan",
    description: "Low rate. Paperless. Quick. Compare and get the best deal.",
    range: "From ₹1000 to ₹50L",
    cta_data: {
      name: "Check Eligibility",
      link: "/personal-loan/a256d56e931ebe284d95e928cfa70a93895ca1c905c4c8acc0d758ebdfc26520/9e91b21917cf0629151a46e114f38977cb1535afc1b798482d65202f53c4a97a",
    },
    bgColor: "#EAF4EC",
    rangeBg: "#4BA264",
    rangeColor: "var(--globalWhite)",
  },
  {
    title: "Business Loan",
    description: "Lowest rates with minimum documentation for maximum growth.",
    range: "From ₹1000 to ₹50L",
    cta_data: {
      name: "Check Eligibility",
      link: routesConstant.BUSINESS_LOAN_QUESTIONAIRRE,
    },
    bgColor: "#FEF2E9",
    rangeBg: "#F9B47E",
    rangeColor: "#475467",
  },
  {
    title: "Gold Loan",
    description:
      "Turn gold into instant cash at the best rates and lowest interest.",
    range: "From ₹1000 to ₹50L",
    cta_data: {
      name: "Check Eligibility",
      link: routesConstant.GOLD_LOAN_QUESTIONAIRRE,
    },
    bgColor: "#FFFAEA",
    rangeBg: "F8BE324D",
    rangeColor: "#475467",
  },
];

export const allCreditCardData = [
  {
    id: 1,
    name: "SBI Credit Card",
    type: [
      {
        id: 1,
        name: "Travel",
      },
      {
        id: 2,
        name: "Student",
      },
    ],
    provider: {
      id: 5,
      name: "SBI Bank",
    },
    image: creditCardImg,
    card_type: "Premium",
    annual_fee: 12500,
    joining_fee: "12,500",
    credit_score: ">750",
    features: [
      {
        name: "Unlimited Lounge Access",
        description: "Domestic and international.",
      },
      {
        name: "BookMyShow Discount",
        description: "Up to Rs.500 off on the second ticket, 5 times/month.",
      },
      {
        name: "Reward Points",
        description: " Earn 35 EDGE points per Rs. 200 & 5X on travel spends.",
      },
    ],
    welcome_benefits: [
      {
        name: "Annual Fee Waiver",
        description: "Spend Rs.25 Lakhs+ to waive Rs.12,500 + Taxes fee.",
      },
      {
        name: "Welcome Benefit",
        description: "Choose flight tickets, gift cards",
      },
      {
        name: "Concierge Services",
        description: "8 complimentary airport services",
      },
    ],
    theme_color: "#EAEBF3",
  },
  {
    id: 2,
    name: "BoB Eterna Card",
    type: [
      {
        id: 1,
        name: "Travel",
      },
      {
        id: 4,
        name: "Rewards",
      },
    ],
    provider: {
      id: 1,
      name: "HDFC",
    },
    image: bob_card,
    card_type: "Premium",
    annual_fee: 13500,
    joining_fee: "4,500",
    credit_score: ">750",
    features: [
      {
        name: "Unlimited Lounge Access",
        description: "Domestic and international.",
      },
      {
        name: "BookMyShow Discount",
        description: "Up to Rs.500 off on the second ticket, 5 times/month.",
      },
      {
        name: "Reward Points",
        description: " Earn 35 EDGE points per Rs. 200 & 5X on travel spends.",
      },
    ],
    welcome_benefits: [
      {
        name: "Annual Fee Waiver",
        description: "Spend Rs.25 Lakhs+ to waive Rs.12,500 + Taxes fee.",
      },
      {
        name: "Welcome Benefit",
        description: "Choose flight tickets, gift cards",
      },
      {
        name: "Concierge Services",
        description: "8 complimentary airport services",
      },
    ],
    theme_color: "#E9F4EC",
  },
  {
    id: 3,
    name: "IDFC First Millennia",
    type: [
      {
        id: 1,
        name: "Travel",
      },
      {
        id: 3,
        name: "Standard",
      },
    ],
    provider: {
      id: 1,
      name: "HDFC",
    },
    image: idfc_card,
    card_type: "Premium",
    annual_fee: 11000,
    joining_fee: "12,500",
    credit_score: ">750",
    features: [
      {
        name: "Unlimited Lounge Access",
        description: "Domestic and international.",
      },
      {
        name: "BookMyShow Discount",
        description: "Up to Rs.500 off on the second ticket, 5 times/month.",
      },
      {
        name: "Reward Points",
        description: " Earn 35 EDGE points per Rs. 200 & 5X on travel spends.",
      },
    ],
    welcome_benefits: [
      {
        name: "Annual Fee Waiver",
        description: "Spend Rs.25 Lakhs+ to waive Rs.12,500 + Taxes fee.",
      },
      {
        name: "Welcome Benefit",
        description: "Choose flight tickets, gift cards",
      },
      {
        name: "Concierge Services",
        description: "8 complimentary airport services",
      },
    ],
    theme_color: "#FEF2E9",
  },
  {
    id: 4,
    name: "Axis Miles & More",
    type: [
      {
        id: 4,
        name: "Rewards",
      },
      {
        id: 2,
        name: "Student",
      },
    ],
    provider: {
      id: 4,
      name: "Axis Bank",
    },
    image: axis_card,
    card_type: "Sponsored",
    annual_fee: 9000,
    joining_fee: "12,500",
    credit_score: ">750",
    features: [
      {
        name: "Unlimited Lounge Access",
        description: "Domestic and international.",
      },
      {
        name: "BookMyShow Discount",
        description: "Up to Rs.500 off on the second ticket, 5 times/month.",
      },
      {
        name: "Reward Points",
        description: " Earn 35 EDGE points per Rs. 200 & 5X on travel spends.",
      },
    ],
    welcome_benefits: [
      {
        name: "Annual Fee Waiver",
        description: "Spend Rs.25 Lakhs+ to waive Rs.12,500 + Taxes fee.",
      },
      {
        name: "Welcome Benefit",
        description: "Choose flight tickets, gift cards",
      },
      {
        name: "Concierge Services",
        description: "8 complimentary airport services",
      },
    ],
    theme_color: "#EAEBF3",
  },
  {
    id: 5,
    name: "HSBC Platinum",
    type: [
      {
        id: 5,
        name: "Cashback",
      },
      {
        id: 3,
        name: "Standard",
      },
    ],
    provider: {
      id: 6,
      name: "HSBC",
    },
    image: hsbc_card,
    card_type: "Sponsored",
    annual_fee: 5000,
    joining_fee: "12,500",
    credit_score: ">750",
    features: [
      {
        name: "Unlimited Lounge Access",
        description: "Domestic and international.",
      },
      {
        name: "BookMyShow Discount",
        description: "Up to Rs.500 off on the second ticket, 5 times/month.",
      },
      {
        name: "Reward Points",
        description: " Earn 35 EDGE points per Rs. 200 & 5X on travel spends.",
      },
    ],
    welcome_benefits: [
      {
        name: "Annual Fee Waiver",
        description: "Spend Rs.25 Lakhs+ to waive Rs.12,500 + Taxes fee.",
      },
      {
        name: "Welcome Benefit",
        description: "Choose flight tickets, gift cards",
      },
      {
        name: "Concierge Services",
        description: "8 complimentary airport services",
      },
    ],
    theme_color: "#EAEBF3",
  },
];

export const creditCardProviderData = [
  {
    id: 1,
    name: "HDFC",
    parent: "provider",
  },
  {
    id: 2,
    name: "IDFC First Bank",
    parent: "provider",
  },
  {
    id: 3,
    name: "Canara Bank",
    parent: "provider",
  },
  {
    id: 4,
    name: "Axis Bank",
    parent: "provider",
  },
  {
    id: 5,
    name: "SBI Bank",
    parent: "provider",
  },
  {
    id: 6,
    name: "HSBC",
    parent: "provider",
  },
  {
    id: 7,
    name: "IDFC First Bank",
    parent: "provider",
  },
  {
    id: 8,
    name: "Canara Bank",
    parent: "provider",
  },
  {
    id: 9,
    name: "Axis Bank",
    parent: "provider",
  },
  {
    id: 10,
    name: "SBI Bank",
    parent: "provider",
  },
];

export const creditCardTypeData = [
  {
    id: 1,
    name: "Travel",
    parent: "type",
  },
  {
    id: 2,
    name: "Student",
    parent: "type",
  },
  {
    id: 3,
    name: "Standard",
    parent: "type",
  },
  {
    id: 4,
    name: "Rewards",
    parent: "type",
  },
  {
    id: 5,
    name: "Cashback",
    parent: "type",
  },
];

export const blogsData = [
  {
    id: 1,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
  },
  {
    id: 2,
    name: "The Role of an Online EMI Calculator in Financial Planning",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogTwo,
    created_user: {
      name: "Rupal Thakur",
      image: demoUserTwo,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Debt",
  },
  {
    id: 3,
    name: "How To Track LoanTap Personal Loan Application Status",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogThree,
    created_user: {
      name: "Raveena Joesph",
      image: demoUserOne,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Finance",
  },
  {
    id: 4,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
  },
  {
    id: 5,
    name: "The Role of an Online EMI Calculator in Financial Planning",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogTwo,
    created_user: {
      name: "Rupal Thakur",
      image: demoUserTwo,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Debt",
  },
  {
    id: 6,
    name: "How To Track LoanTap Personal Loan Application Status",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogThree,
    created_user: {
      name: "Raveena Joesph",
      image: demoUserOne,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Finance",
  },
  {
    id: 7,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
  },
  {
    id: 8,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
  },
  {
    id: 9,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
  },
];

export const pressData = [
  {
    id: 1,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
    news: "Hindustan Times",
  },
  {
    id: 2,
    name: "The Role of an Online EMI Calculator in Financial Planning",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogTwo,
    created_user: {
      name: "Rupal Thakur",
      image: demoUserTwo,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Debt",
    news: "Times of India",
  },
  {
    id: 3,
    name: "How To Track LoanTap Personal Loan Application Status",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogThree,
    created_user: {
      name: "Raveena Joesph",
      image: demoUserOne,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Finance",
    news: "Deccan Chronicle",
  },
  {
    id: 4,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
    news: "Deccan Herald",
  },
  {
    id: 5,
    name: "The Role of an Online EMI Calculator in Financial Planning",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogTwo,
    created_user: {
      name: "Rupal Thakur",
      image: demoUserTwo,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Debt",
    news: "Deccan Herald",
  },
  {
    id: 6,
    name: "How To Track LoanTap Personal Loan Application Status",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogThree,
    created_user: {
      name: "Raveena Joesph",
      image: demoUserOne,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Finance",
    news: "Deccan Herald",
  },
  {
    id: 7,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
    news: "Deccan Herald",
  },
  {
    id: 8,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
    news: "Deccan Herald",
  },
  {
    id: 9,
    name: "Demystifying Collateral Management Systems: A Comprehensive Guide",
    created_date: "22 Jan, 2023",
    featured_image: demoBlogOne,
    created_user: {
      name: "Manoj Shet",
      image: demoUserThree,
    },
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Nulla integer velit rutrum convallis integer",
    category: "Loan",
    news: "Deccan Herald",
  },
];

export const personalLoanData = [
  {
    id: 1,
    name: "KreditBee",
    image: kreditBee,
    description: "One of the best personal Loan offer for you",
    features: {
      rate: "20.00%",
      emi: "₹2,484",
      maxLoanAmount: "₹3 Lacs",
      term: "Upto 3 Years",
      approval: "Excellent",
    },
    others: [
      "No Documentation",
      "Get Instant Dispursal",
      "Pending Interest Charges Applicable",
    ],
    themeColor: "#EAEBF3",
  },
  {
    id: 2,
    name: "Citi Bank",
    image: citi_loan,
    description: "One of the best personal Loan offer for you",
    features: {
      rate: "20.00%",
      emi: "₹2,484",
      maxLoanAmount: "₹3 Lacs",
      term: "Upto 3 Years",
      approval: "Excellent",
    },
    others: [
      "No Documentation",
      "Get Instant Dispursal",
      "Pending Interest Charges Applicable",
    ],
    themeColor: "#FEF2E9",
  },
  {
    id: 3,
    name: "Kotak Mahindra Bank",
    image: kotak_loan,
    description: "One of the best personal Loan offer for you",
    features: {
      rate: "20.00%",
      emi: "₹2,484",
      maxLoanAmount: "₹3 Lacs",
      term: "Upto 3 Years",
      approval: "Excellent",
    },
    others: [
      "No Documentation",
      "Get Instant Dispursal",
      "Pending Interest Charges Applicable",
    ],
    themeColor: "#E9F4EC",
  },
];
