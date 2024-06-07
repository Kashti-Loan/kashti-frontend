import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { routesConstant } from "./routesConstant";
import { InstantLoanIcon } from "@components";

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
    path: routesConstant.CREDIT_CARDS,
  },
  {
    name: "Instant Personal Loan",
    path: routesConstant.PERSONAL_LOAN,
  },
  {
    name: "Business Loan",
    path: routesConstant.PERSONAL_LOAN,
  },
  {
    name: "Gold Loan",
    path: routesConstant.PERSONAL_LOAN,
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
