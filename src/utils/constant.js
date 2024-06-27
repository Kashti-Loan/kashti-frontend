import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { routesConstant } from "./routesConstant";
import { InstantLoanIcon } from "@components";
import {
  FibeOffer,
  LoanTap,
  LoanTapOffer,
  PaysenseOffer,
  Upward,
  UpwardOffer,
  Zype,
  ZypeOffer,
  fibe,
  paysense,
} from "@public/assets";

export const navMenuItems = [
  {
    name: "credit cards",
    path: routesConstant.CREDIT_CARDS,
  },
  {
    name: "loans",
    path: routesConstant.LOANS,
    children: [
      {
        id: 1,
        name: "Instant Personal Loan",
        description: "Apply for an Instant Personal Loan",
        link: routesConstant.PERSONAL_LOAN,
      },
      {
        id: 2,
        name: "Business Loan",
        description: "Finance Your Business Needs at Low Interest Rates",
        link: routesConstant.PERSONAL_LOAN,
      },
      {
        id: 3,
        name: "Gold Loan",
        description: "Get easy loans with minimal documentation",
        link: routesConstant.PERSONAL_LOAN,
      },
      // {
      //   id: 4,
      //   name: "Home Loan",
      //   description: "Get easy loans with minimal documentation ",
      //   link: routesConstant.PERSONAL_LOAN,
      // },
    ],
  },
  {
    name: "resources",
    path: routesConstant.RESOURCES,
    children: [
      // {
      //   id: 1,
      //   name: "Press Releases",
      //   description: "Apply for an Instant Personal Loan",
      //   link: routesConstant.PRESS_RELEASE,
      // },
      {
        id: 2,
        name: "Blogs",
        description: "Finance Your Business Needs at Low Interest Rates",
        link: routesConstant.BLOGS,
      },
      {
        id: 3,
        name: "Success Stories",
        description: "Get easy loans with minimal documentation",
        link: routesConstant.SUCCESS_STORIES,
      },
      {
        id: 4,
        name: "FAQ",
        description: "Get easy loans with minimal documentation ",
        link: routesConstant.FAQ,
      },
    ],
  },
  {
    name: "about us",
    path: routesConstant.ABOUT_US,
  },
  {
    name: "contact us",
    path: routesConstant.CONTACT_US,
  },
];

export const loanMenuItems = [
  {
    name: "Credit Cards",
    path: "/personal-loan-questionairre/08909c58d762e3a984c9d05675b8f235a8ebc207e5eecb4219ff23b7afc5f053/f822448ac0e60dbf9741da8901e7db096b28321f998db7e667c50e576eaa47c6",
  },
  {
    name: "Instant Personal Loan",
    path: "/personal-loan/863131ef159837db79425bfeabe800606906b4398e4ea358e84b189eed501b50/cc583c38b06216d6caba779ab19db00df0bc359a3eef725122453fa49b7a6c31",
  },
  {
    name: "Business Loan",
    path: "/personal-loan-questionairre/08909c58d762e3a984c9d05675b8f235a8ebc207e5eecb4219ff23b7afc5f053/f822448ac0e60dbf9741da8901e7db096b28321f998db7e667c50e576eaa47c6",
  },
  {
    name: "Gold Loan",
    path: "/personal-loan-questionairre/08909c58d762e3a984c9d05675b8f235a8ebc207e5eecb4219ff23b7afc5f053/f822448ac0e60dbf9741da8901e7db096b28321f998db7e667c50e576eaa47c6",
  },
];

export const resourcesMenuItems = [
  {
    name: "Press Releases",
    path: routesConstant.PRESS_RELEASE,
  },
  {
    name: "Blogs",
    path: routesConstant.BLOGS,
  },
  {
    name: "Success Stories",
    path: routesConstant.SUCCESS_STORIES,
  },
  {
    name: "FAQs",
    path: routesConstant.FAQ,
  },
];

export const aboutMenuItems = [
  {
    name: "About us",
    path: routesConstant.ABOUT_US,
  },
  {
    name: "Contact us",
    path: routesConstant.CONTACT_US,
  },
];

export const personalLoanTabData = [
  {
    id: 1,
    name: "Overview",
    link: "#overview",
  },
  {
    id: 2,
    name: "Key Features",
    link: "#key_features",
  },
  {
    id: 3,
    name: "Interest Rates",
    link: "#interest_rates",
  },
  {
    id: 4,
    name: "EMI Calculator",
    link: "#emi_calculator",
  },
  {
    id: 5,
    name: "Eligibility",
    link: "#eligibility",
  },
  {
    id: 6,
    name: "FAQs",
    link: "#faqs",
  },
];

export const creditCardTabData = [
  {
    id: 1,
    name: "Overview",
    link: "#",
  },
  {
    id: 2,
    name: "Card Offers",
    link: "#card_offers",
  },
  {
    id: 3,
    name: "Key Features",
    link: "#key_features",
  },
  {
    id: 4,
    name: "Eligibility",
    link: "#eligibility",
  },
  {
    id: 5,
    name: "How to Apply",
    link: "#how_to_apply",
  },
  {
    id: 6,
    name: "FAQs",
    link: "#faqs",
  },
];

export const homeBannerSliderSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
};

export const logoSliderSettings = {
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

export const bankingSliderSettings = {
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 10,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 990,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
  ],
};

export const storySliderSettings = {
  slidesToShow: 4,
  arrows: true,
  nextArrow: (
    <button>
      <ChevronRight />
    </button>
  ),
  prevArrow: (
    <button>
      <ChevronLeft />
    </button>
  ),
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
};

export const reviewSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".sliderNav",
};

export const reviewCustomerSliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".sliderFor",
  dots: true,
  centerMode: true,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "60px",
};

export const bankLogoSliderSettings = {
  infinite: true,
  autoplay: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const EMAIL_REGX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const LIST_BANK_PROVIDERS_URL = {
  LoanTap: {
    url: "https://bit.ly/3XyEQNY",
    logo: LoanTapOffer,
  },
  EarlySalary: {
    url: "https://bit.ly/45Ivgda",
    logo: FibeOffer,
  },
  Upwards: {
    url: "https://bit.ly/4eCLs3Y",
    logo: UpwardOffer,
  },
  Paysense: {
    url: "https://bit.ly/3xv2znF",
    logo: PaysenseOffer,
  },
  Zype: {
    url: "https://bit.ly/3xv2259",
    logo: ZypeOffer,
  },
};

export const capitalize = (s) => {
  return `${s}`.toLowerCase().replace(/\b./g, function (a) {
    return a.toUpperCase();
  });
};

export const indianRupeeConvert = (x) => {
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
};

export const getBankURLLogo = (bankName) => {};
