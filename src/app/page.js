// 'use client'

// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./home.module.scss";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import Link from "next/link";
import {
  BusinessLoanIcon,
  CashbackIcon,
  CreditCardIcon,
  CustomImage,
  CustomSlider,
  DineInIcon,
  EmiCalculator,
  ExploreIcon,
  FaqBox,
  FaqSection,
  GoldLoanIcon,
  GreenCheckIcon,
  GuardIcon,
  InstantLoanIcon,
  MobileStepSection,
  MovieIcon,
  PersonalLoanIcon,
  ProductCard,
  SafeguardSection,
  ShoppingIcon,
  SiteIcon,
  StudentIcon,
  TravelIcon,
  BusinessLoanOrangeIcon,
  GoldLoanWhiteIcon,
  InstantPersonalLoanWhiteIcon,
  CreditCardWhiteIcon,
  BasicIcon,
  AlgorithmIcon,
  BestIcon,
  FbBlackIcon,
  XBlackIcon,
  InstaBlackIcon,
  YtBlackIcon,
  LinkedInBlackIcon,
  GaugeChart,
  PopularProductSection,
} from "@components";
import {
  appStore,
  bestTab,
  blog_1,
  blog_2,
  blog_3,
  bob,
  citi,
  citibank,
  downloadApp,
  gPlay,
  hdfc,
  howItWorks,
  hsbc,
  icicibank,
  induslnd,
  kotak,
  lock,
  mahindra,
  muthoot,
  offerTab,
  popularShopping,
  productTab,
  rbl,
  religare,
  rightCreditCard,
  safeguard,
  saveTime,
  scoreMeter,
  security,
  securityTab,
  southIndian,
  step_1,
  step_2,
  step_3,
  step_4,
  timeTab,
  unionbank,
  whyDisbursal,
  whyDiverse,
  whyPaperless,
  whySupport,
  whysafe,
  yesbank,
} from "@public/assets";
import { homeBannerSliderSettings, logoSliderSettings } from "@utils/constant";
import { homeProductData } from "@utils/data";
import { routesConstant } from "@utils/routesConstant";

const Home = () => {
  const gaugeData = [{ value: 75 }];
  const homeBannerSlides = [
    <div>
      <Container className={styles.bannerSlide}>
        <Row>
          <Col xs={12} md={7} lg={7}>
            <PageTitle>
              Your Complete Credit Score, Absolutely <b>Free</b>!
            </PageTitle>
            <Text>
              Securing a loan or credit card requires strong financial health.
              Check your credit score today and uncover opportunities for
              success.
            </Text>
            <Link
              href={routesConstant.CREDIT_SCORE_REPORT}
              className="primaryBtn"
            >
              Check Free Credit Score
            </Link>
          </Col>
          <Col xs={12} md={5} lg={5}>
            <GaugeChart value={650} />
          </Col>
        </Row>
      </Container>
    </div>,
    <div>
      <Container className={styles.bannerSlide}>
        <Row>
          <Col xs={12} md={7} lg={7}>
            <PageTitle>
              Your Complete Credit Score, Absolutely <b>Free</b>!
            </PageTitle>
            <Text>
              Securing a loan or credit card requires strong financial health.
              Check your credit score today and uncover opportunities for
              success.
            </Text>
            <Link
              href={routesConstant.CREDIT_SCORE_REPORT}
              className="primaryBtn"
            >
              Check Free Credit Score
            </Link>
          </Col>
          <Col xs={12} md={5} lg={5}>
            <GaugeChart value={650} />
          </Col>
        </Row>
      </Container>
    </div>,
    <div>
      <Container className={styles.bannerSlide}>
        <Row>
          <Col xs={12} md={7} lg={7}>
            <PageTitle>
              Your Complete Credit Score, Absolutely <b>Free</b>!
            </PageTitle>
            <Text>
              Securing a loan or credit card requires strong financial health.
              Check your credit score today and uncover opportunities for
              success.
            </Text>
            <Link
              href={routesConstant.CREDIT_SCORE_REPORT}
              className="primaryBtn"
            >
              Check Free Credit Score
            </Link>
          </Col>
          <Col xs={12} md={5} lg={5}>
            <GaugeChart value={650} />
          </Col>
        </Row>
      </Container>
    </div>,
  ];

  const popularProductSlides = [
    <div className={styles.popularyProductBox}>
      <CustomImage src={popularShopping} alt="Shopping" />
      <h3>Shopping</h3>
      <Text>
        Experience the joy of maximizing every rupee spent with the Best
        Shopping Credit Cards. Unlock exclusive perks and deals to elevate your
        shopping journey. Apply now for a world of privileges at your
        fingertips!
      </Text>
      <Link href={"#"} className="primaryBtn">
        Apply Now
      </Link>
    </div>,
    <div className={styles.popularyProductBox}>
      <CustomImage src={popularShopping} alt="Shopping" />
      <h3>Cashback</h3>
      <Text>
        Experience the joy of maximizing every rupee spent with the Best
        Shopping Credit Cards. Unlock exclusive perks and deals to elevate your
        shopping journey. Apply now for a world of privileges at your
        fingertips!
      </Text>
      <Link href={"#"} className="primaryBtn">
        Apply Now
      </Link>
    </div>,
    <div className={styles.popularyProductBox}>
      <CustomImage src={popularShopping} alt="Shopping" />
      <h3>Dine-In</h3>
      <Text>
        Experience the joy of maximizing every rupee spent with the Best
        Shopping Credit Cards. Unlock exclusive perks and deals to elevate your
        shopping journey. Apply now for a world of privileges at your
        fingertips!
      </Text>
      <Link href={"#"} className="primaryBtn">
        Apply Now
      </Link>
    </div>,
    <div className={styles.popularyProductBox}>
      <CustomImage src={popularShopping} alt="Shopping" />
      <h3>Student</h3>
      <Text>
        Experience the joy of maximizing every rupee spent with the Best
        Shopping Credit Cards. Unlock exclusive perks and deals to elevate your
        shopping journey. Apply now for a world of privileges at your
        fingertips!
      </Text>
      <Link href={"#"} className="primaryBtn">
        Apply Now
      </Link>
    </div>,
    <div className={styles.popularyProductBox}>
      <CustomImage src={popularShopping} alt="Shopping" />
      <h3>Travel</h3>
      <Text>
        Experience the joy of maximizing every rupee spent with the Best
        Shopping Credit Cards. Unlock exclusive perks and deals to elevate your
        shopping journey. Apply now for a world of privileges at your
        fingertips!
      </Text>
      <Link href={"#"} className="primaryBtn">
        Apply Now
      </Link>
    </div>,
    <div className={styles.popularyProductBox}>
      <CustomImage src={popularShopping} alt="Shopping" />
      <h3>Movie</h3>
      <Text>
        Experience the joy of maximizing every rupee spent with the Best
        Shopping Credit Cards. Unlock exclusive perks and deals to elevate your
        shopping journey. Apply now for a world of privileges at your
        fingertips!
      </Text>
      <Link href={"#"} className="primaryBtn">
        Apply Now
      </Link>
    </div>,
  ];

  const mobileHomeBannerSlides = [
    <Container>
      <Row>
        <Col xs={12}>
          <PageTitle>
            <span style={{ fontWeight: "500" }}>
              Your Complete Credit Score, Absolutely
            </span>{" "}
            Free <span style={{ fontWeight: "500" }}>!</span>
          </PageTitle>
          <Link
            href={routesConstant.CREDIT_SCORE_REPORT}
            className="primaryBtn"
          >
            Check Now
          </Link>
        </Col>
        <Col xs={12}>
          <GaugeChart value={650} />
        </Col>
      </Row>
    </Container>,
    <Container>
      <Row>
        <Col xs={12}>
          <PageTitle>
            <span style={{ fontWeight: "500" }}>
              Check Your Credit Score for
            </span>{" "}
            Free
          </PageTitle>
          <Link
            href={routesConstant.CREDIT_SCORE_REPORT}
            className="primaryBtn"
          >
            Check Now
          </Link>
        </Col>
        <Col xs={12}>
          <GaugeChart value={650} />
        </Col>
      </Row>
    </Container>,
    <Container>
      <Row>
        <Col xs={12}>
          <PageTitle>
            <span style={{ fontWeight: "500" }}>
              Check Your Credit Score for
            </span>{" "}
            Free
          </PageTitle>
          <Link
            href={routesConstant.CREDIT_SCORE_REPORT}
            className="primaryBtn"
          >
            Check Now
          </Link>
        </Col>
        <Col xs={12}>
          <GaugeChart value={650} />
        </Col>
      </Row>
    </Container>,
  ];

  return (
    <main className={styles.homePage}>
      <div className={styles.homePageUpperBlock}>
        {/* Banner Section */}
        <section className={styles.bannerSection}>
          <CustomSlider
            settings={homeBannerSliderSettings}
            children={homeBannerSlides}
            className={"bannerSliderContainer"}
          />
        </section>

        {/* Page Nav Tab */}
        <section className={styles.pageNavTabContainer}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className={styles.navList}>
                  <Link href="#product">
                    <CustomImage src={offerTab} alt="Exclusive Offers" />
                    <span>Exclusive Offers</span>
                  </Link>
                  <Link href="#product">
                    <CustomImage src={productTab} alt="Exclusive Offers" />
                    <span>Find Right Product</span>
                  </Link>
                  <Link href="#product">
                    <CustomImage src={timeTab} alt="Exclusive Offers" />
                    <span>Save Time</span>
                  </Link>
                  <Link href="#product">
                    <CustomImage src={bestTab} alt="Exclusive Offers" />
                    <span>Pick the Best</span>
                  </Link>
                  <Link href="#product">
                    <CustomImage src={securityTab} alt="Exclusive Offers" />
                    <span>100% Security</span>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Our Products */}
        <section className={styles.ourProductSection}>
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitle>Our Products</SectionTitle>
              </Col>
            </Row>
            <Row>
              {homeProductData.map((item, i) => (
                <Col xs={12} md={6} lg={3} key={i}>
                  <ProductCard
                    title={item.title}
                    description={item.description}
                    range={item.range}
                    cta_data={item.cta_data}
                    icon={
                      item.title === "Credit Cards" ? (
                        <>
                          <CreditCardIcon /> <CreditCardWhiteIcon />
                        </>
                      ) : item.title === "Instant Personal Loan" ? (
                        <>
                          <InstantLoanIcon /> <InstantPersonalLoanWhiteIcon />
                        </>
                      ) : item.title === "Business Loan" ? (
                        <>
                          <BusinessLoanIcon /> <BusinessLoanOrangeIcon />
                        </>
                      ) : item.title === "Gold Loan" ? (
                        <>
                          <GoldLoanIcon /> <GoldLoanWhiteIcon />
                        </>
                      ) : null
                    }
                  />
                </Col>
              ))}
              {/* <Col xs={12} md={3} lg={3}>
                <ProductCard title=""/>
              </Col>
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col>
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col>
              <Col xs={12} md={3} lg={3}>
                <ProductCard />
              </Col> */}
            </Row>
          </Container>
        </section>
      </div>
      {/* Mobile Banner Section */}
      <section className={styles.mobileHomeBannerSection}>
        <CustomSlider
          settings={homeBannerSliderSettings}
          children={mobileHomeBannerSlides}
          className={"bannerSliderContainer"}
        />
      </section>

      {/* Page Nav Tab */}
      <section className={styles.mobilePageNavTabContainer}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.navList}>
                <Link href="#product">
                  <CustomImage src={offerTab} alt="Exclusive Offers" />
                  <span>Exclusive Offers</span>
                </Link>
                <Link href="#product">
                  <CustomImage src={productTab} alt="Exclusive Offers" />
                  <span>Find Right Product</span>
                </Link>
                <Link href="#product">
                  <CustomImage src={timeTab} alt="Exclusive Offers" />
                  <span>Save Time</span>
                </Link>
                <Link href="#product">
                  <CustomImage src={bestTab} alt="Exclusive Offers" />
                  <span>Pick the Best</span>
                </Link>
                <Link href="#product">
                  <CustomImage src={securityTab} alt="Exclusive Offers" />
                  <span>100% Security</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mobile Our Product Section */}
      <section className={styles.mobileOurProductSection}>
        <Container>
          <Row>
            <Col>
              <SectionTitle>Our Products</SectionTitle>
              <div className={styles.mobileOurProductBlock}>
                <Link
                  href={routesConstant.CREDIT_CARD_QUESTIONAIRRE}
                  className={styles.mobileOurProductBox}
                >
                  <CreditCardIcon />
                  <h4>Credit Cards</h4>
                </Link>
                <Link
                  href={routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}
                  className={styles.mobileOurProductBox}
                >
                  <PersonalLoanIcon />
                  <h4>Personal Loan</h4>
                </Link>
                <Link
                  href={routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}
                  className={styles.mobileOurProductBox}
                >
                  <BusinessLoanIcon />
                  <h4>Business Loan</h4>
                </Link>
                <Link
                  href={routesConstant.PERSONAL_LOAN_QUESTIONAIRRE}
                  className={styles.mobileOurProductBox}
                >
                  <GoldLoanIcon />
                  <h4>Gold Loan</h4>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What Makes Kashti Stand Out from Others */}
      {/* <section className={styles.pointerSection}>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={5}>
              <SectionTitle>
                What Makes Kashti Stand Out from Others
              </SectionTitle>
              <Text>
                Kashti is an all-in-one platform that provides simple,
                affordable, and accessible financial products and services
                designed to help you achieve your financial goals.
              </Text>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <CustomImage
                src={lock}
                alt="What Makes Kashti Stand Out from Others"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <CustomImage src={rightCreditCard} alt="Right Credit Card" />
              <h3>Right Credit Card</h3>
              <Text>
                Count on us to help you find the right Credit Card Offers from a
                list of 50+ Cards which suits your lifestyle and needs.
              </Text>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <CustomImage src={saveTime} alt="Save Time" />
              <h3>Save Time</h3>
              <Text>
                Apply your loan Online and get your loan approved Instantly
                within 10 minutes without Stepping the Banks and NBFC’s.
              </Text>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <CustomImage src={security} alt="Trust and Security" />
              <h3>Trust and Security</h3>
              <Text>
                Your security is our highest priority. We will not share any
                personal information without your consent.
              </Text>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Why Kashti */}
      <section className={styles.whyKashtiSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Why Kashti</SectionTitle>
              <Text>
                Quick, simple, and completely digital. India's favourite loan
                marketplace.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.whyKashtiBox}>
                <CustomImage src={whyPaperless} alt="Safe & secure" />
                <h3>100% Paperless</h3>
                <Text>
                  100% paperless loan processing for hassle-free borrowing for
                  even the smallest amount.
                </Text>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.whyKashtiBox}>
                <CustomImage src={whysafe} alt="Safe & secure" />
                <h3>Safe & secure</h3>
                <Text>
                  Safe and worry-free with comprehensive loan disclosures and
                  secure data collection.
                </Text>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.whyKashtiBox}>
                <CustomImage src={whyDiverse} alt="Diverse Options" />
                <h3>Diverse Options</h3>
                <Text>
                  Explore diverse loan options for every need. Compare and
                  choose from the best banks and NBFCs.
                </Text>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.whyKashtiBox}>
                <CustomImage src={whyDisbursal} alt="Quick Disbursal" />
                <h3>Quick Disbursal</h3>
                <Text>
                  Quickest loan disbursals, ensuring swift access to funds for
                  immediate financial relief.
                </Text>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className={styles.whyKashtiBox}>
                <CustomImage src={whySupport} alt="Anytime Support" />
                <h3>Anytime Support</h3>
                <Text>
                  Instant support, providing the best assistance for a seamless
                  experience.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Mobile - What Makes Kashti Stand Out from Others */}
      <section className={styles.mobilePointerSection}>
        <Container>
          <Row>
            <Col>
              <SectionTitle>Why Kashti</SectionTitle>
              <Text>
                Quick, simple, and completely digital. India's favourite loan
                marketplace.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <ul>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3135_8249)">
                      <path
                        d="M12 23.8125C18.5239 23.8125 23.8125 18.5239 23.8125 12C23.8125 5.47614 18.5239 0.1875 12 0.1875C5.47614 0.1875 0.1875 5.47614 0.1875 12C0.1875 18.5239 5.47614 23.8125 12 23.8125Z"
                        fill="#E1EBF4"
                      />
                      <path
                        d="M17.768 19.3575H17.7642C15.5011 18.9356 14.3742 19.875 11.7024 19.9013C9.0286 19.9275 10.6261 21.3431 8.43798 18.5006C6.24985 15.6563 5.71923 11.0944 5.50923 8.59313C5.46957 8.09459 5.46832 7.59373 5.50548 7.095L17.0367 18.6263L17.4192 19.0106L17.768 19.3575ZM15.9249 14.3325L6.19735 4.60688L6.10548 4.515L6.00048 4.41C6.12423 3.99563 6.21985 3.75 6.21985 3.75C9.1261 5.87438 12.8124 5.31188 14.0949 5.31188C15.3755 5.31188 14.8449 6.06188 14.8449 9.23813C14.8449 10.5469 15.3399 12.495 15.9249 14.3325Z"
                        fill="#FBCAA4"
                      />
                      <path
                        d="M6.10682 4.51446C6.11507 4.46628 6.12369 4.4164 6.13194 4.37065C6.13981 4.32268 6.15956 4.27743 6.1894 4.23905C6.21923 4.20066 6.2582 4.17036 6.30276 4.1509C6.34805 4.13055 6.39768 4.12173 6.44722 4.12523C6.49675 4.12873 6.54465 4.14444 6.58663 4.17096C8.85734 5.55378 11.5362 6.10932 14.1695 5.74353C14.2132 5.73736 14.2578 5.7412 14.2998 5.75474C14.3418 5.76828 14.3802 5.79118 14.4121 5.82171C14.4451 5.85273 14.4707 5.89079 14.4869 5.93306C14.5031 5.97533 14.5096 6.02072 14.5059 6.06584C14.2531 9.19522 14.6375 11.7171 15.3196 13.7275L16.6933 15.1009C15.6566 12.9777 14.9358 10.0566 15.2533 6.1264C15.2664 5.96925 15.2439 5.81115 15.1874 5.66391C15.1309 5.51668 15.0419 5.3841 14.927 5.27609C14.8136 5.16807 14.6771 5.08717 14.5279 5.0395C14.3787 4.99182 14.2207 4.9786 14.0656 5.00084C11.6045 5.34279 9.10085 4.82375 6.97851 3.53159C6.83254 3.44173 6.66687 3.38878 6.49584 3.37735C6.32481 3.36592 6.15357 3.39633 5.99694 3.46597C5.78959 3.55924 5.6184 3.71772 5.50944 3.91728L6.10682 4.51446ZM17.4206 19.0099C14.4286 18.8946 11.3467 19.5619 10.1204 19.8658C10.0644 19.8792 10.0058 19.876 9.95155 19.8567C9.89731 19.8374 9.84982 19.8028 9.81482 19.7571C6.35994 15.4405 5.72338 10.6999 5.81863 7.40815L5.10088 6.69021C4.89238 10.1125 5.38138 15.4178 9.22907 20.2257C9.32801 20.3496 9.4535 20.4497 9.59629 20.5186C9.73907 20.5875 9.89552 20.6235 10.0541 20.6239C10.1373 20.624 10.2202 20.6139 10.301 20.5939C11.5535 20.2832 14.7939 19.5814 17.8139 19.7807C17.9293 19.7879 18.0451 19.7762 18.1567 19.746L17.4206 19.0099Z"
                        fill="#1C245F"
                      />
                      <path
                        d="M20.4852 3.51469C18.807 1.83647 16.6688 0.693591 14.3411 0.230576C12.0133 -0.23244 9.60049 0.00520527 7.40778 0.913459C5.21507 1.82171 3.34093 3.35978 2.02236 5.33317C0.703786 7.30656 0 9.62663 0 12C0 14.3734 0.703786 16.6935 2.02236 18.6668C3.34093 20.6402 5.21507 22.1783 7.40778 23.0866C9.60049 23.9948 12.0133 24.2325 14.3411 23.7694C16.6688 23.3064 18.807 22.1635 20.4852 20.4853C21.604 19.3735 22.4919 18.0515 23.0978 16.5952C23.7037 15.139 24.0156 13.5773 24.0156 12C24.0156 10.4227 23.7037 8.86104 23.0978 7.40479C22.4919 5.94854 21.604 4.62648 20.4852 3.51469ZM19.9548 4.04513C22.019 6.10852 23.2001 8.89366 23.2483 11.8119C23.2966 14.7301 22.2084 17.5528 20.2136 19.6834L4.31656 3.78638C6.44711 1.79158 9.2698 0.703311 12.188 0.751596C15.1063 0.799881 17.8914 1.98093 19.9548 4.04513ZM4.04506 19.9549C1.98086 17.8915 0.799814 15.1064 0.751529 12.1881C0.703243 9.26987 1.79151 6.44718 3.78631 4.31663L19.6833 20.2136C17.5528 22.2084 14.7301 23.2967 11.8118 23.2484C8.89359 23.2001 6.10845 22.0191 4.04506 19.9549Z"
                        fill="#1C245F"
                      />
                      <path
                        opacity="0.5"
                        d="M14.5055 6.06564C14.498 6.14814 14.4923 6.23251 14.4886 6.31314C14.4727 6.26878 14.4463 6.2289 14.4117 6.19689C14.3796 6.16684 14.3413 6.14422 14.2995 6.13061C14.2577 6.117 14.2135 6.11274 14.1698 6.11814C11.5362 6.48505 8.85662 5.92993 6.58547 4.54689C6.54369 4.52023 6.49594 4.50439 6.44651 4.50079C6.39709 4.49719 6.34754 4.50594 6.30234 4.52626C6.26123 4.54407 6.22516 4.57177 6.19734 4.60689L6.10547 4.51501C6.11484 4.46626 6.12234 4.41751 6.13172 4.37064C6.13981 4.32282 6.15964 4.27775 6.18941 4.23947C6.21919 4.20119 6.25799 4.17088 6.30234 4.15126C6.34754 4.13094 6.39709 4.12219 6.44651 4.12579C6.49594 4.12939 6.54369 4.14523 6.58547 4.17189C8.85662 5.55493 11.5362 6.11005 14.1698 5.74314C14.2141 5.73766 14.259 5.74211 14.3013 5.75619C14.3436 5.77026 14.3823 5.7936 14.4144 5.82449C14.4466 5.85539 14.4714 5.89306 14.4872 5.93478C14.5029 5.9765 14.5092 6.0212 14.5055 6.06564Z"
                        fill="#F9EDD2"
                      />
                      <path
                        opacity="0.45"
                        d="M17.0371 18.6263L17.4196 19.0107C14.4289 18.8945 11.3464 19.562 10.1202 19.8657C10.0642 19.8792 10.0055 19.876 9.95121 19.8567C9.89694 19.8374 9.84947 19.8028 9.81455 19.757C6.50518 15.6207 5.78143 11.0963 5.81143 7.83008C5.83955 11.0626 6.6308 15.4013 9.81455 19.382C9.84947 19.4278 9.89694 19.4624 9.95121 19.4817C10.0055 19.501 10.0642 19.5042 10.1202 19.4907C11.2939 19.2001 14.1683 18.5757 17.0371 18.6263Z"
                        fill="#AD9359"
                      />
                      <path
                        opacity="0.3"
                        d="M17.7687 19.3586H17.7649L17.4199 19.0117L17.7687 19.3586Z"
                        fill="#175729"
                      />
                      <path
                        opacity="0.5"
                        d="M19.6838 20.2145C18.0825 21.7132 16.0781 22.711 13.9172 23.0853C11.7562 23.4595 9.53302 23.1939 7.52109 22.321C5.50916 21.4481 3.79629 20.0061 2.59327 18.1724C1.39024 16.3387 0.749541 14.1933 0.75 12.0002C0.75 11.9383 0.75 11.8783 0.751875 11.8164C0.788322 13.9703 1.44247 16.0685 2.63656 17.8615C3.83065 19.6545 5.51446 21.0669 7.48784 21.9308C9.46122 22.7948 11.6412 23.074 13.7686 22.7351C15.896 22.3963 17.8814 21.4538 19.4888 20.0195L19.6838 20.2145Z"
                        fill="#9FA5AA"
                      />
                      <path
                        opacity="0.5"
                        d="M23.2502 12.0001C23.2502 12.062 23.2502 12.122 23.2483 12.1839C23.2118 10.0299 22.5577 7.9318 21.3636 6.1388C20.1695 4.34581 18.4857 2.93339 16.5123 2.06943C14.5389 1.20547 12.359 0.926309 10.2316 1.26513C8.10416 1.60395 6.11877 2.54649 4.51141 3.98074L4.31641 3.78574C5.91761 2.2871 7.92201 1.28925 10.083 0.914994C12.2439 0.540735 14.4671 0.806386 16.4791 1.67926C18.491 2.55213 20.2039 3.99415 21.4069 5.82786C22.6099 7.66158 23.2506 9.80699 23.2502 12.0001Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3135_8249">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>100% Paperless</span>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7992 10.8008H15.9192V7.60078C15.9192 5.44078 14.1592 3.68078 11.9992 3.68078C9.83922 3.68078 8.07922 5.44078 8.07922 7.60078V10.8008H5.19922V7.60078C5.19922 3.84078 8.23922 0.800781 11.9992 0.800781C15.7592 0.800781 18.7992 3.84078 18.7992 7.60078V10.8008Z"
                      fill="#FBCAA4"
                    />
                    <path
                      d="M2.55859 12.6408V21.3608C2.55859 22.4008 3.35859 23.2008 4.39859 23.2008H19.6786C20.7186 23.2008 21.5186 22.4008 21.5186 21.3608V12.6408C21.5186 11.6008 20.7186 10.8008 19.6786 10.8008H4.39859C3.35859 10.8008 2.55859 11.6808 2.55859 12.6408Z"
                      fill="#535D9F"
                    />
                    <path
                      d="M10.2392 1.92188C8.07922 1.92188 6.31922 3.68188 6.31922 5.84188V9.04187H5.19922V10.8019H8.07922V7.60187C8.07922 5.44187 9.83922 3.68187 11.9992 3.68187C12.6392 3.68187 13.1992 3.84187 13.7592 4.08187C13.1192 2.80187 11.7592 1.92188 10.2392 1.92188ZM15.8392 2.00187C16.5592 3.12187 17.0392 4.40188 17.0392 5.84188V9.04187H15.9192V10.8019H18.7992V7.60187C18.7992 5.28187 17.5992 3.20187 15.8392 2.00187Z"
                      fill="#FBCAA4"
                    />
                    <path
                      d="M19.6786 10.8008C19.6786 10.8808 19.6786 10.8808 19.6786 10.8008V19.6008C19.6786 20.6408 18.8786 21.4408 17.8386 21.4408H2.55859C2.55859 22.4008 3.35859 23.2008 4.39859 23.2008H19.6786C20.7186 23.2008 21.5186 22.4008 21.5186 21.3608V12.6408C21.4386 11.6808 20.6386 10.8808 19.6786 10.8008Z"
                      fill="#6F77AF"
                    />
                    <path
                      d="M13.9997 15.9195C13.9997 14.6395 12.7996 13.6795 11.5196 13.9995C10.8796 14.1595 10.3197 14.7195 10.1597 15.4395C9.91965 16.3995 10.3997 17.2795 11.1997 17.6795V19.1995C11.1997 19.6795 11.5997 20.0795 12.0797 20.0795C12.5597 20.0795 12.9597 19.6795 12.9597 19.1995V17.6795C13.5197 17.3595 13.9997 16.7195 13.9997 15.9195Z"
                      fill="#2B8E44"
                    />
                    <path
                      d="M12.7211 14.0781C12.8011 14.3181 12.8811 14.5581 12.8811 14.7981C12.8811 15.5981 12.4011 16.2381 11.7611 16.5581V18.0781C11.7611 18.4781 11.5211 18.7981 11.1211 18.8781V19.1981C11.1211 19.6781 11.5211 20.0781 12.0011 20.0781C12.4811 20.0781 12.8811 19.6781 12.8811 19.1981V17.6781C13.5211 17.3581 14.0011 16.7181 14.0011 15.9181C14.0011 15.1181 13.4411 14.3981 12.7211 14.0781Z"
                      fill="#4BA264"
                    />
                    <path
                      d="M12 0.238281C7.92 0.238281 4.64 3.51828 4.64 7.59828V10.2383H4.4C3.04 10.2383 2 11.3583 2 12.6383V21.3583C2 22.7183 3.12 23.7583 4.4 23.7583H19.68C21.04 23.7583 22.08 22.6383 22.08 21.3583V12.6383C22.08 11.2783 20.96 10.2383 19.68 10.2383H19.44V7.59828C19.36 3.51828 16.08 0.238281 12 0.238281ZM5.84 7.59828C5.84 4.15828 8.64 1.43828 12 1.43828C15.44 1.43828 18.16 4.23828 18.16 7.59828V10.2383H16.48V7.59828C16.48 5.11828 14.48 3.03828 11.92 3.03828C9.36 3.03828 7.44 5.11828 7.44 7.59828V10.2383H5.84V7.59828ZM8.64 10.2383V7.59828C8.64 5.75828 10.16 4.23828 12 4.23828C13.84 4.23828 15.36 5.75828 15.36 7.59828V10.2383H8.64ZM20.88 12.6383V21.3583C20.88 21.9983 20.32 22.5583 19.68 22.5583H4.4C3.76 22.5583 3.2 21.9983 3.2 21.3583V12.6383C3.2 11.9983 3.76 11.4383 4.4 11.4383H19.68C20.32 11.4383 20.88 11.9983 20.88 12.6383Z"
                      fill="#3C3B41"
                    />
                    <path
                      d="M13.5984 13.9189C12.9584 13.4389 12.1584 13.2789 11.3584 13.4389C10.4784 13.6789 9.75839 14.3989 9.51839 15.2789C9.27839 16.3189 9.67839 17.3589 10.4784 17.9989V19.1989C10.4784 19.9989 11.1184 20.7189 11.9984 20.7189C12.8784 20.7189 13.5184 20.0789 13.5184 19.1989V17.9989C14.2384 17.5189 14.6384 16.7189 14.6384 15.9189C14.5584 15.1189 14.2384 14.3989 13.5984 13.9189ZM12.6384 17.1189C12.3984 17.1989 12.3184 17.4389 12.3184 17.6789V19.1989C12.3184 19.3589 12.1584 19.5189 11.9984 19.5189C11.8384 19.5189 11.6784 19.3589 11.6784 19.1989V17.6789C11.6784 17.4389 11.5184 17.2789 11.3584 17.1189C10.8784 16.8789 10.4784 16.3189 10.6384 15.5989C10.7184 15.1189 11.1184 14.7189 11.5984 14.6389C11.7584 14.6389 11.8384 14.5589 11.9984 14.5589C12.3184 14.5589 12.5584 14.6389 12.7984 14.8789C13.1184 15.1189 13.3584 15.5189 13.3584 15.9989C13.3584 16.3989 13.0384 16.8789 12.6384 17.1189Z"
                      fill="#3C3B41"
                    />
                  </svg>

                  <span>Safe & secure</span>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16.5595" cy="7.44031" r="3.12" fill="#A9A6C1" />
                    <circle cx="7.44031" cy="7.44031" r="3.12" fill="#AACAA7" />
                    <circle cx="7.44031" cy="16.5595" r="3.12" fill="#A9A6C1" />
                    <circle cx="16.5595" cy="16.5595" r="3.12" fill="#FAC399" />
                    <path
                      d="M10.5348 6.19986C10.4828 6.21299 10.434 6.23631 10.391 6.26846C10.3481 6.30061 10.312 6.34095 10.2848 6.38716C10.2575 6.43336 10.2397 6.4845 10.2324 6.53763C10.2251 6.59075 10.2283 6.6448 10.242 6.69666C10.3017 6.93204 10.3323 7.17384 10.3332 7.41666C10.3337 8.06896 10.1159 8.70268 9.71465 9.21695C9.31336 9.73122 8.7516 10.0965 8.11875 10.2546C7.4859 10.4128 6.81834 10.3547 6.22231 10.0897C5.62627 9.82464 5.13601 9.36786 4.82954 8.79202C4.52308 8.21619 4.41802 7.55439 4.53109 6.91196C4.64416 6.26953 4.96886 5.68337 5.45351 5.24677C5.93816 4.81017 6.55492 4.54823 7.20563 4.50261C7.85634 4.457 8.50362 4.63034 9.04444 4.99506C9.13391 5.05115 9.24164 5.07037 9.34498 5.04868C9.44832 5.02698 9.53923 4.96607 9.59859 4.87873C9.65796 4.7914 9.68115 4.68446 9.66329 4.58038C9.64543 4.4763 9.58792 4.38321 9.50284 4.32066C8.77893 3.83365 7.90719 3.61584 7.03929 3.70514C6.17139 3.79444 5.36227 4.18518 4.75269 4.80939C4.14311 5.43361 3.77167 6.25177 3.70299 7.12155C3.6343 7.99132 3.87272 8.85765 4.37677 9.5698C4.88081 10.282 5.61858 10.7949 6.46171 11.0193C7.30483 11.2437 8.19995 11.1654 8.99133 10.7981C9.78271 10.4307 10.4202 9.79753 10.793 9.0087C11.1658 8.21987 11.2502 7.32531 11.0316 6.48066C11.0025 6.37785 10.934 6.29069 10.841 6.23811C10.748 6.18553 10.6379 6.17178 10.5348 6.19986Z"
                      fill="black"
                    />
                    <path
                      d="M16.5884 11.1639C17.328 11.1644 18.0512 10.9455 18.6664 10.5349C19.2816 10.1244 19.7613 9.54055 20.0446 8.85734C20.328 8.17413 20.4024 7.42223 20.2584 6.69674C20.1144 5.97125 19.7585 5.30476 19.2356 4.78158C18.7128 4.25841 18.0465 3.90204 17.3211 3.75757C16.5957 3.6131 15.8438 3.68701 15.1604 3.96995C14.477 4.25289 13.8929 4.73215 13.4819 5.34711C13.0709 5.96207 12.8516 6.6851 12.8516 7.42475C12.8528 8.41564 13.2469 9.36562 13.9473 10.0665C14.6477 10.7674 15.5975 11.162 16.5884 11.1639ZM16.5884 4.50395C17.1672 4.5011 17.7339 4.67017 18.2166 4.98975C18.6992 5.30932 19.0761 5.765 19.2995 6.29903C19.5229 6.83306 19.5827 7.42138 19.4714 7.98944C19.36 8.5575 19.0825 9.0797 18.674 9.48987C18.2655 9.90003 17.7445 10.1797 17.1769 10.2934C16.6093 10.4071 16.0207 10.3497 15.4858 10.1285C14.9508 9.90731 14.4936 9.53227 14.1721 9.05093C13.8505 8.56959 13.6791 8.00362 13.6796 7.42475C13.6808 6.65256 13.9873 5.91219 14.5322 5.36505C15.0771 4.81791 15.8162 4.50838 16.5884 4.50395Z"
                      fill="black"
                    />
                    <path
                      d="M7.41152 12.8359C6.67188 12.8355 5.94871 13.0544 5.33348 13.4649C4.71826 13.8755 4.23862 14.4593 3.95524 15.1425C3.67186 15.8258 3.59747 16.5777 3.74148 17.3031C3.88549 18.0286 4.24142 18.6951 4.76426 19.2183C5.2871 19.7415 5.95336 20.0978 6.67876 20.2423C7.40416 20.3868 8.15611 20.3129 8.8395 20.0299C9.52289 19.747 10.107 19.2677 10.518 18.6528C10.929 18.0378 11.1483 17.3148 11.1483 16.5751C11.1471 15.5842 10.753 14.6343 10.0526 13.9334C9.35214 13.2325 8.40241 12.8378 7.41152 12.8359ZM7.41152 19.4959C6.83316 19.4964 6.26766 19.3253 5.78658 19.0043C5.30549 18.6833 4.93045 18.2268 4.7089 17.6925C4.48735 17.1583 4.42926 16.5703 4.54198 16.003C4.65469 15.4358 4.93315 14.9147 5.34211 14.5057C5.75107 14.0968 6.27216 13.8183 6.83942 13.7056C7.40669 13.5929 7.99465 13.651 8.52889 13.8725C9.06314 14.0941 9.51965 14.4691 9.84068 14.9502C10.1617 15.4313 10.3328 15.9968 10.3323 16.5751C10.3311 17.3494 10.0229 18.0916 9.47544 18.6391C8.92796 19.1865 8.18578 19.4947 7.41152 19.4959Z"
                      fill="black"
                    />
                    <path
                      d="M16.5888 12.8359C15.8493 12.8359 15.1263 13.0552 14.5114 13.4661C13.8965 13.877 13.4173 14.461 13.1342 15.1442C12.8512 15.8275 12.7772 16.5793 12.9215 17.3046C13.0657 18.03 13.4219 18.6962 13.9448 19.2192C14.4677 19.7421 15.134 20.0982 15.8593 20.2425C16.5847 20.3868 17.3365 20.3127 18.0197 20.0297C18.703 19.7467 19.287 19.2674 19.6978 18.6525C20.1087 18.0376 20.328 17.3147 20.328 16.5751C20.3267 15.5838 19.9324 14.6335 19.2314 13.9325C18.5305 13.2316 17.5801 12.8372 16.5888 12.8359ZM16.5888 19.4959C16.0106 19.4959 15.4453 19.3244 14.9645 19.0031C14.4837 18.6818 14.1091 18.2251 13.8879 17.6908C13.6667 17.1566 13.609 16.5687 13.722 16.0016C13.8349 15.4345 14.1136 14.9136 14.5226 14.5049C14.9317 14.0962 15.4528 13.8179 16.02 13.7054C16.5872 13.5929 17.175 13.6511 17.7091 13.8727C18.2432 14.0944 18.6996 14.4694 19.0205 14.9504C19.3414 15.4315 19.5125 15.9969 19.512 16.5751C19.5114 17.35 19.2031 18.0929 18.655 18.6406C18.1068 19.1883 17.3637 19.4959 16.5888 19.4959Z"
                      fill="black"
                    />
                    <path
                      d="M7.27016 7.81143L6.27176 6.81063L5.69336 7.38903L7.27016 8.96583L11.703 4.53303L11.1246 3.95703L7.27016 7.81143Z"
                      fill="black"
                    />
                  </svg>

                  <span>Diverse Options</span>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.22429 2.55469H17.9861L13.2387 11.3672H17.9861L6.37337 21.5121L9.78937 11.3672H6.32031L9.22429 2.55469Z"
                      fill="#2B8E44"
                    />
                    <path
                      d="M9.22586 3.20935C10.0748 3.20935 10.9237 3.20935 11.7727 3.20935C13.2607 3.20935 14.7488 3.20935 16.237 3.20935C16.8205 3.20935 17.4041 3.20935 17.9877 3.20935C17.7988 2.88019 17.6099 2.55103 17.421 2.22188C17.055 2.90177 16.6889 3.58165 16.3229 4.26155C15.6094 5.58694 14.8958 6.91235 14.1823 8.23774C13.698 9.13727 13.2137 10.0368 12.7294 10.9363C12.7108 10.9709 12.6922 11.0054 12.6737 11.0399C12.4401 11.4737 12.7297 12.0274 13.2403 12.0274C14.3939 12.0274 15.5474 12.0274 16.701 12.0274C17.1299 12.0274 17.5588 12.0274 17.9876 12.0274C17.833 11.654 17.6783 11.2805 17.5236 10.9071C17.1112 11.2674 16.6988 11.6277 16.2864 11.988C15.3068 12.8437 14.3272 13.6995 13.3477 14.5553C12.1874 15.5689 11.0271 16.5825 9.86688 17.5961C8.91241 18.4299 7.95796 19.2637 7.00352 20.0975C6.63932 20.4157 6.27513 20.7338 5.91093 21.052C6.27656 21.2649 6.64216 21.4777 7.00778 21.6905C7.24169 20.9958 7.47562 20.3011 7.70953 19.6064C8.18554 18.1927 8.66158 16.779 9.1376 15.3653C9.51712 14.2382 9.89664 13.1111 10.2761 11.9839C10.3253 11.8378 10.3745 11.6917 10.4238 11.5456C10.5613 11.1371 10.1994 10.7149 9.79094 10.7149C8.66896 10.7149 7.54696 10.7149 6.42499 10.7149C6.39063 10.7149 6.35624 10.7149 6.32189 10.7149C6.53282 10.9918 6.74376 11.2687 6.9547 11.5456C7.20928 10.7726 7.46385 9.99949 7.71843 9.22643C8.1881 7.80033 8.65774 6.37423 9.12738 4.94813C9.37113 4.20792 9.6149 3.46774 9.85867 2.72754C9.97059 2.3877 9.73221 2.01157 9.40031 1.92028C9.04251 1.82187 8.70485 2.03918 8.59305 2.37865C8.33847 3.15169 8.08389 3.92475 7.82931 4.69781C7.35967 6.12392 6.89001 7.55002 6.42037 8.97612C6.17662 9.71632 5.93285 10.4565 5.68907 11.1967C5.5544 11.6056 5.91126 12.0274 6.32189 12.0274C7.44386 12.0274 8.56586 12.0274 9.68784 12.0274C9.7222 12.0274 9.75658 12.0274 9.79094 12.0274C9.58 11.7505 9.36906 11.4736 9.15813 11.1967C8.92422 11.8914 8.69029 12.5861 8.45639 13.2808C7.98037 14.6945 7.50433 16.1082 7.02831 17.5219C6.64879 18.6491 6.26927 19.7762 5.88977 20.9033C5.84057 21.0494 5.79138 21.1955 5.74216 21.3416C5.6489 21.6185 5.80071 21.9404 6.04375 22.0827C6.31134 22.2395 6.61506 22.1758 6.83901 21.9801C7.25142 21.6198 7.66382 21.2595 8.07625 20.8993C9.05582 20.0435 10.0354 19.1877 11.015 18.332C12.1752 17.3184 13.3355 16.3048 14.4958 15.2912C15.4502 14.4574 16.4047 13.6235 17.3591 12.7897C17.7233 12.4715 18.0875 12.1534 18.4517 11.8352C18.6246 11.6842 18.6793 11.4107 18.6205 11.1967C18.543 10.9152 18.2795 10.7149 17.9877 10.7149C16.8341 10.7149 15.6805 10.7149 14.527 10.7149C14.0981 10.7149 13.6692 10.7149 13.2403 10.7149C13.4292 11.0441 13.6181 11.3732 13.807 11.7024C14.173 11.0225 14.539 10.3426 14.9051 9.6627C15.6186 8.33731 16.3322 7.01189 17.0458 5.6865C17.53 4.78697 18.0143 3.88746 18.4986 2.98793C18.5172 2.95338 18.5358 2.91886 18.5543 2.88431C18.7879 2.45056 18.4984 1.89685 17.9877 1.89685C17.1388 1.89685 16.2899 1.89685 15.4409 1.89685C13.9528 1.89685 12.4647 1.89685 10.9766 1.89685C10.393 1.89685 9.80946 1.89685 9.22589 1.89685C8.86816 1.89685 8.56964 2.19537 8.56964 2.5531C8.56964 2.91082 8.86811 3.20935 9.22586 3.20935Z"
                      fill="#2B8E44"
                    />
                  </svg>

                  <span>Quick Disbursal</span>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.9999 5.67761C2.94975 5.63647 2.91797 5.5771 2.91154 5.51254C2.90511 5.44799 2.92456 5.38352 2.96562 5.33329C3.26984 4.96123 3.59944 4.61068 3.95207 4.28414C3.9757 4.26227 4.00342 4.24528 4.03363 4.23412C4.06383 4.22296 4.09594 4.21786 4.12812 4.21911C4.1603 4.22036 4.19192 4.22794 4.22117 4.24141C4.25042 4.25488 4.27673 4.27398 4.2986 4.29761C4.32047 4.32125 4.33747 4.34897 4.34862 4.37917C4.35978 4.40938 4.36488 4.44149 4.36363 4.47367C4.36238 4.50585 4.3548 4.53746 4.34133 4.56671C4.32787 4.59596 4.30877 4.62227 4.28513 4.64414C3.94962 4.9537 3.6337 5.29019 3.34472 5.64333C3.32434 5.66823 3.29925 5.68888 3.27089 5.70408C3.24252 5.71929 3.21144 5.72875 3.17942 5.73194C3.14739 5.73512 3.11506 5.73196 3.08425 5.72264C3.05345 5.71332 3.02479 5.69802 2.9999 5.67761ZM1.5648 8.02472C1.50607 7.99719 1.46065 7.94749 1.43852 7.88651C1.41639 7.82554 1.41935 7.75828 1.44676 7.69949C1.6581 7.24839 1.90423 6.81443 2.18292 6.40153C2.21917 6.34762 2.27534 6.31032 2.33909 6.29783C2.40283 6.28533 2.46893 6.29868 2.52284 6.33492C2.57675 6.37116 2.61406 6.42734 2.62655 6.49108C2.63904 6.55483 2.6257 6.62093 2.58945 6.67484C2.32466 7.06649 2.09081 7.47818 1.89003 7.90618C1.86259 7.96501 1.81292 8.01053 1.75194 8.03276C1.69096 8.05498 1.62365 8.05209 1.5648 8.02472ZM4.90129 3.77035C4.86258 3.7183 4.8461 3.65302 4.85546 3.58883C4.86483 3.52465 4.89928 3.4668 4.95125 3.42798C5.34241 3.13605 5.75136 2.86876 6.17574 2.62765C6.20372 2.61177 6.23455 2.60155 6.26648 2.59758C6.29841 2.59361 6.33081 2.59596 6.36183 2.60451C6.39285 2.61306 6.42188 2.62764 6.44727 2.64741C6.47265 2.66718 6.49389 2.69176 6.50978 2.71974C6.52567 2.74772 6.53589 2.77855 6.53986 2.81048C6.54383 2.84241 6.54147 2.87481 6.53292 2.90583C6.52437 2.93685 6.5098 2.96588 6.49003 2.99126C6.47026 3.01665 6.44568 3.03789 6.4177 3.05378C6.01115 3.28496 5.61923 3.54095 5.24415 3.82031C5.21836 3.83955 5.18903 3.85353 5.15784 3.86143C5.12665 3.86934 5.09421 3.87102 5.06237 3.86638C5.03053 3.86174 4.99991 3.85087 4.97227 3.83439C4.94463 3.81791 4.92052 3.79615 4.90129 3.77035ZM16.8401 18.977C16.8197 18.9521 16.8045 18.9234 16.7952 18.8925C16.786 18.8617 16.7829 18.8293 16.7862 18.7973C16.7895 18.7653 16.799 18.7342 16.8143 18.7059C16.8296 18.6776 16.8504 18.6525 16.8753 18.6322C17.2253 18.3444 17.5473 18.0243 17.8373 17.6761C17.8575 17.6501 17.8828 17.6284 17.9116 17.6124C17.9405 17.5964 17.9722 17.5863 18.005 17.5829C18.0378 17.5794 18.071 17.5826 18.1025 17.5923C18.134 17.602 18.1633 17.6179 18.1885 17.6392C18.2137 17.6604 18.2344 17.6866 18.2492 17.716C18.2641 17.7454 18.2729 17.7776 18.275 17.8105C18.2772 17.8434 18.2726 17.8764 18.2617 17.9075C18.2508 17.9386 18.2337 17.9672 18.2115 17.9916C17.902 18.363 17.5582 18.7046 17.1849 19.0118C17.16 19.0322 17.1313 19.0475 17.1005 19.0568C17.0697 19.0662 17.0374 19.0693 17.0054 19.0661C16.9733 19.063 16.9423 19.0535 16.9139 19.0383C16.8855 19.0231 16.8604 19.0019 16.8401 18.977ZM14.3798 20.2917C14.369 20.2613 14.3643 20.2291 14.366 20.1969C14.3677 20.1648 14.3757 20.1332 14.3896 20.1042C14.4034 20.0751 14.4229 20.049 14.4469 20.0275C14.4708 20.006 14.4988 19.9894 14.5292 19.9787C14.9847 19.818 15.4236 19.6138 15.8399 19.3689C15.8956 19.339 15.9608 19.3319 16.0217 19.3489C16.0826 19.366 16.1345 19.406 16.1666 19.4605C16.1987 19.515 16.2084 19.5798 16.1938 19.6413C16.1792 19.7028 16.1414 19.7563 16.0882 19.7906C15.6448 20.0514 15.1773 20.269 14.6923 20.4405C14.6311 20.4622 14.5638 20.4587 14.5053 20.4308C14.4467 20.4029 14.4015 20.3528 14.3798 20.2917ZM18.6533 16.9797C18.5975 16.9466 18.5571 16.8928 18.5409 16.83C18.5248 16.7672 18.5342 16.7005 18.5671 16.6446C18.8051 16.241 19.0108 15.8007 19.1779 15.3344C19.2029 15.2776 19.2485 15.2323 19.3055 15.2078C19.3625 15.1832 19.4268 15.1812 19.4852 15.2022C19.5437 15.2231 19.592 15.2654 19.6205 15.3206C19.649 15.3758 19.6555 15.4397 19.6388 15.4995C19.4663 15.9833 19.2487 16.4499 18.9888 16.893C18.9725 16.9207 18.9508 16.9449 18.9251 16.9643C18.8994 16.9837 18.8702 16.9978 18.839 17.0058C18.8079 17.0139 18.7754 17.0157 18.7435 17.0112C18.7117 17.0067 18.681 16.996 18.6533 16.9797Z"
                      fill="#F47D20"
                    />
                    <path
                      d="M21.5907 17.5206C19.7638 21.2725 16.1785 23.5108 12.0005 23.5108C4.21473 23.5108 -1.1309 15.3694 2.41522 8.08715C4.20788 4.40879 7.68543 2.18022 11.7556 2.09695V0.735318C11.7556 0.637358 11.8144 0.549195 11.9075 0.510012C12.0005 0.470828 12.1034 0.49042 12.1769 0.563889L14.572 2.95899C14.6699 3.05695 14.6699 3.20879 14.572 3.30675L12.1769 5.70675C12.1034 5.77532 12.0005 5.79981 11.9075 5.76062C11.8633 5.74147 11.8255 5.71008 11.7986 5.67016C11.7717 5.63024 11.7568 5.58345 11.7556 5.53532V4.17858C7.11237 4.31083 3.37522 8.13124 3.37522 12.8039C3.37522 17.5476 7.2162 21.4341 12.0005 21.4341C16.7613 21.4341 20.6307 17.5647 20.6307 12.8039C20.6307 10.928 20.0381 9.14511 18.9164 7.64634C18.8811 7.59968 18.8637 7.54193 18.8673 7.48353C18.8709 7.42513 18.8953 7.36995 18.936 7.32797L20.0724 6.19164C20.1213 6.14266 20.185 6.11328 20.2585 6.11818C20.3271 6.12307 20.3956 6.15736 20.4348 6.21124C22.972 9.44389 23.4128 13.7786 21.5907 17.5206Z"
                      fill="#535D9F"
                    />
                    <path
                      d="M6.81606 12.391C6.81606 11.1151 7.74912 11.0049 8.09736 11.0049C8.84871 11.0049 9.44479 11.4462 9.44479 12.2416C9.44479 12.9156 9.00887 13.2579 8.62732 13.518C8.10814 13.8824 7.83777 14.0587 7.74912 14.2409H9.45067V14.9262H6.77148C6.7994 14.4677 6.83222 13.9872 7.68299 13.3686C8.38977 12.8548 8.67189 12.656 8.67189 12.2142C8.67189 11.9546 8.50585 11.6558 8.13018 11.6558C7.58895 11.6558 7.5723 12.104 7.56691 12.3905L6.81606 12.391ZM12.605 14.0587H12.169V14.9257H11.3952V14.0587H9.84985V13.3907L11.2908 11.0049H12.169V13.4573H12.6054L12.605 14.0587ZM11.3952 13.4573C11.3952 12.5071 11.4118 11.8938 11.4118 11.7724H11.401L10.418 13.4573H11.3956H11.3952ZM13.2358 15.0305H12.5893L13.8432 10.8555H14.4897L13.2358 15.0305ZM17.2242 11.6671C16.8485 12.076 15.8871 13.2359 15.7935 14.9262H14.9976C15.0809 13.3578 16.0634 12.1093 16.395 11.7557H14.4456L14.4618 11.071H17.2237L17.2242 11.6671Z"
                      fill="#2B8E44"
                    />
                  </svg>

                  <span>Anytime Support</span>
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              <CustomImage
                src={lock}
                alt="What Makes Kashti Stand Out from Others"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mobile - How it Works */}
      <MobileStepSection />

      {/* How it Works */}
      <section className={styles.howItWorkSection}>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <CustomImage src={howItWorks} />
              <SectionTitle>How it Works</SectionTitle>
              <Text>
                Discover top financial products effortlessly with Kashti. Apply
                for loans, credit cards, and other offerings on India's
                favourite credit marketplace.
              </Text>
              <Link href={"#"} className="primaryBtn">
                Get Started
              </Link>
            </Col>
            <div className={styles.stepsBlock}>
              <div className={styles.stepsBox}>
                <div className={styles.stepsHeader}>
                  <ExploreIcon />
                  <CustomImage src={step_1} alt="How it works step one" />
                </div>
                <div className={styles.stepsInfo}>
                  <h3>Browse Our Products</h3>
                  <Text>
                    Explore our diverse offerings for your first step to
                    financial freedom.
                  </Text>
                </div>
              </div>
              <div className={styles.stepsBox}>
                <div className={styles.stepsHeader}>
                  <BasicIcon />
                  <CustomImage src={step_2} alt="How it works step one" />
                </div>
                <div className={styles.stepsInfo}>
                  <h3>Enter Basic Information</h3>
                  <Text>
                    Get started with Kashti by just entering your basic,
                    mandatory details.
                  </Text>
                </div>
              </div>
              <div className={styles.stepsBox}>
                <div className={styles.stepsHeader}>
                  <AlgorithmIcon />
                  <CustomImage src={step_3} alt="How it works step one" />
                </div>
                <div className={styles.stepsInfo}>
                  <h3>Compare Our Offers</h3>
                  <Text>
                    Compare customized offers in seconds with our powerful
                    algorithm.
                  </Text>
                </div>
              </div>
              <div className={styles.stepsBox}>
                <div className={styles.stepsHeader}>
                  <BestIcon />
                  <CustomImage src={step_4} alt="How it works step one" />
                </div>
                <div className={styles.stepsInfo}>
                  <h3>Select The Best</h3>
                  <Text>
                    Select the perfect match for your requirements and proceed
                    effortlessly.
                  </Text>
                </div>
              </div>
              <div className={styles.siteLogo}>
                <SiteIcon />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      {/* EMI Calculator For Personal Loan */}
      <EmiCalculator color={"var(--primaryColor)"} />

      {/* Discover Our Most Popular Products */}
      <section className={styles.discoverProductSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Discover Our Most Popular Products</SectionTitle>
              <div className={styles.productTabBlock}>
                <div className={styles.productTabHeader}>
                  <span>
                    <button className={styles.active}>Credit Cards</button>
                    <button>Personal Loans</button>
                  </span>
                </div>
                <div className={styles.productTabContent}>
                  <div className={styles.productBox}>
                    <ShoppingIcon /> <h4>Shopping</h4>
                  </div>
                  <div className={styles.productBox}>
                    <CashbackIcon /> <h4>Cashback</h4>
                  </div>
                  <div className={styles.productBox}>
                    <DineInIcon /> <h4>Dine-In</h4>
                  </div>
                  <div className={styles.productBox}>
                    <StudentIcon /> <h4>Student</h4>
                  </div>
                  <div className={styles.productBox}>
                    <TravelIcon /> <h4>Travel</h4>
                  </div>
                  <div className={styles.productBox}>
                    <MovieIcon /> <h4>Movie</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <PopularProductSection />
        </Container>
      </section>

      {/* Safeguarding Your Data, Always! */}
      <SafeguardSection />

      {/* Kashti Knowledge Base  */}
      <section className={styles.knowledgeSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Kashti Knowledge Base </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Link href="#">
                <CustomImage src={blog_1} alt="Blog" />
                <h4>
                  DeFi Startup Orion Protocol Raises $3.45m in the World's First
                  Dynamic Coin Offering (DYCO)
                </h4>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="#">
                <CustomImage src={blog_2} alt="Blog" />
                <h4>
                  DeFi Startup Orion Protocol Raises $3.45m in the World's First
                  Dynamic Coin Offering (DYCO)
                </h4>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Link href="#">
                <CustomImage src={blog_3} alt="Blog" />
                <h4>
                  DeFi Startup Orion Protocol Raises $3.45m in the World's First
                  Dynamic Coin Offering (DYCO)
                </h4>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Link href={routesConstant.BLOGS} className="secondaryBtn">
                View All Blogs
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Download the Kashti Mobile App */}
      <section className={styles.downloadSection}>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <CustomImage
                src={downloadApp}
                alt="Download the Kashti Mobile App"
              />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <SectionTitle>Download the Kashti Mobile App</SectionTitle>
              <ul>
                <li>
                  <GreenCheckIcon />
                  <span>Great listings for any requirement</span>
                </li>
                <li>
                  <GreenCheckIcon />
                  <span>Unbelievable primings </span>
                </li>
                <li>
                  <GreenCheckIcon />
                  <span>Talk to Expert at your fingertips</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Banking Partners and NBFCs */}
      <section className={styles.partnersSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Our Banking Partners and NBFCs</SectionTitle>
              <Text>
                We're here to connect you to your ideal financial partner. Our
                customised solutions, through strong partnerships with renowned
                banks and NBFCs, ensure you always receive the most relevant
                products at the most competitive prices.
              </Text>
            </Col>
          </Row>
        </Container>
        <div className={styles.partnersLogo}>
          <CustomSlider
            settings={logoSliderSettings}
            children={[
              <div className={styles.logoSlide}>
                <CustomImage src={icicibank} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={yesbank} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={citi} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={unionbank} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={muthoot} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={citibank} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={mahindra} alt="Bank Partners" />
              </div>,
            ]}
          />
          <CustomSlider
            settings={logoSliderSettings}
            children={[
              <div className={styles.logoSlide}>
                <CustomImage src={rbl} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={induslnd} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={bob} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={hdfc} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={hsbc} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={southIndian} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={kotak} alt="Bank Partners" />
              </div>,
              <div className={styles.logoSlide}>
                <CustomImage src={religare} alt="Bank Partners" />
              </div>,
            ]}
          />
        </div>
      </section>

      {/* Frequently Asked Questions  */}
      <FaqSection className={styles.homeFaqSection} activeColor={"#F8F9FF"} />

      {/* Mobile - Download Section */}
      <section className={styles.mobileDownloadSection}>
        <SectionTitle>Find us on</SectionTitle>
        <ul className={styles.footerSocialList}>
          <li>
            <Link href={"#"}>
              <FbBlackIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <XBlackIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <InstaBlackIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <YtBlackIcon />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <LinkedInBlackIcon />
            </Link>
          </li>
        </ul>
        <SectionTitle>Download the App</SectionTitle>
        <div className={styles.downloadStore}>
          <Link href="#">
            <CustomImage src={gPlay} alt="Google Play Store" />
          </Link>
          <Link href="#">
            <CustomImage src={appStore} alt="Apple Store" />
          </Link>
        </div>
      </section>
      <div></div>
    </main>
  );
};

export default Home;
