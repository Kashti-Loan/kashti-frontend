"use client";
import { Col, Container, Row } from "react-bootstrap";
// import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import Link from "next/link";
import {
  BusinessLoanIcon,
  CompareBox,
  CreditCardBox,
  CreditCardDetailBox,
  CustomImage,
  EmiCalculator,
  FaqSection,
  FilterSidebar,
  GetCreditCard,
  GoldLoanIcon,
  GreenCheckIcon,
  MobileFilter,
  NormalImage,
  PopupPortal,
  SecureLoanToday,
} from "@components";
import {
  citi_color,
  yesBank_color,
  unionBank_color,
  icici_color,
  personalLoanBanner,
  personalLoanBenefits,
  age,
  salaried,
  creditScore,
  selfEmployed,
  workExperience,
  instantPersonalLoan,
  creditCardBanner,
  creditCardBenefits,
  secureCreditCard,
  selectArrow,
} from "@public/assets";
import TabSection from "@components/parts/section/personalLoanPage/tabSection";
import { creditCardTabData } from "@utils/constant";
import {
  allCreditCardData,
  creditCardProviderData,
  creditCardTypeData,
} from "@utils/data";
import { useEffect, useState } from "react";
import {
  creditCardFilterHandler,
  creditCardSortingHandler,
} from "@utils/helper";
import { Filter, Plus } from "react-bootstrap-icons";
import { routesConstant } from "@utils/routesConstant";

const Page = () => {
  const [active, setActive] = useState(2);
  const [filter, setFilter] = useState({
    provider: [],
    type: [],
    features: [],
    annualIncome: [],
  });
  const [activeFilterData, setActiveFilterData] = useState([]);
  const [removeFilter, setRemoveFilter] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [compareData, setCompareData] = useState([]);
  const [displayFilter, setDisplayFilter] = useState(false);

  useEffect(() => {
    const data = creditCardFilterHandler(allCreditCardData, filter);
    const providerFilterName = creditCardProviderData.filter((item) =>
      filter?.provider.includes(item.id.toString())
    );
    const typeFilterName = creditCardTypeData.filter((item) =>
      filter?.type.includes(item.id.toString())
    );
    setCardData(data);
    setActiveFilterData([...providerFilterName, ...typeFilterName]);
  }, [filter]);

  function onSortingChangeHandler(e) {
    const sortType = e.target.value;
    const data = [...cardData];
    if (sortType === "asc") {
      setCardData(data.sort((a, b) => a.annual_fee - b.annual_fee));
    } else if (sortType === "dsc") {
      setCardData(data.sort((a, b) => b.annual_fee - a.annual_fee));
    } else {
      setCardData(data);
    }
  }

  function addCompareHandler(val) {
    const index = compareData.findIndex(
      (obj) => obj.id === val.id && obj.name === val.name
    );

    if (index !== -1) {
      // If the object exists, remove it from the array
      const updatedArray = [...compareData];
      updatedArray.splice(index, 1);
      setCompareData(updatedArray);
    } else {
      // If the object does not exist, add it to the array
      setCompareData((prevArray) => [...prevArray, val]);
    }
  }

  console.log("final compare value", filter);
  return (
    <main className={styles.creditCardPage}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={7}>
              <PageTitle>Find Your Card in Just a Click</PageTitle>
              <Text>Compare the best offers and get instant approvals.</Text>
              <div className={styles.bannerImgBlock}>
                <div>
                  <CustomImage src={citi_color} alt="Bank Partners" />
                  <CustomImage src={unionBank_color} alt="Bank Partners" />
                  <CustomImage src={icici_color} alt="Bank Partners" />
                  <CustomImage src={yesBank_color} alt="Bank Partners" />
                  <CustomImage src={unionBank_color} alt="Bank Partners" />
                </div>
              </div>
              <div className={styles.bannerImg}>
                <CustomImage src={creditCardBanner} alt="Right Credit Card" />
              </div>
            </Col>
            <Col xs={12} md={12} lg={5}>
              <GetCreditCard />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mobile - Banner Section */}
      <section className={styles.mobileBannerContainer}>
        <Container>
          <Row>
            <Col xs={7}>
              <PageTitle>Find Your Card in Just a Click</PageTitle>
              <Text>Compare the best offers and get instant approvals.</Text>
            </Col>
            <Col xs={5}>
              <NormalImage
                src={creditCardBanner}
                alt="Credit card Banner"
                height={"116px"}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SecureLoanToday />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tab Section */}
      <TabSection
        data={creditCardTabData}
        color={"#EAEBF3"}
        applyLink={routesConstant.CREDIT_CARD_APPLICATION_FORM}
      />

      {/* Credit Card Section */}
      <section className={styles.creditCardSection} id="card_offers">
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <h4>Showing 1-9 of 80 results</h4>
            </Col>
            <Col md={12} lg={6}>
              <button
                className={styles.mobileFilterBtn}
                onClick={() => setDisplayFilter(true)}
              >
                <span>Filter</span>
                <Filter />
              </button>
              <Text>Sort By</Text>
              <select
                onChange={onSortingChangeHandler}
                defaultValue={"recommended"}
                style={{ backgroundImage: `url(${selectArrow.src})` }}
              >
                <option value={"recommended"}>Recommended</option>
                <option value="popularity">Popularity</option>
                <option value="asc">Low to High Fee</option>
                <option value="dsc">High to Low Fee</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className={styles.activeFilters}>
                {activeFilterData.map((item, i) => (
                  <span key={i}>
                    {item.name} <Plus onClick={() => setRemoveFilter(item)} />
                  </span>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={3}>
              <FilterSidebar
                filterValues={setFilter}
                removeFilter={removeFilter}
                resetRemoveFilter={setRemoveFilter}
              />
            </Col>
            <Col md={12} lg={9}>
              <ul>
                {cardData &&
                  cardData.map((item, i) => (
                    <CreditCardDetailBox
                      key={i}
                      id={item.id}
                      theme={item.theme_color}
                      currentQues={active === item.id ? true : false}
                      currentFaq={(val) => setActive(val)}
                      name={item.name}
                      type={item.type}
                      image={item.image}
                      cardType={item.card_type}
                      annualFee={item.annual_fee}
                      joiningFee={item.joining_fee}
                      creditScore={item.credit_score}
                      features={item.features}
                      welcomeBenefits={item.welcome_benefits}
                      onCompare={addCompareHandler}
                      isCompared={
                        compareData.findIndex(
                          (obj) => obj.id === item.id && obj.name === item.name
                        ) !== -1
                          ? true
                          : false
                      }
                    />
                  ))}
              </ul>
            </Col>
          </Row>
          <Row className={styles.creditCardBtnRow}>
            <Col lg={12}>
              <button className="secondaryBtn">View All</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits of Kashti’s Credit Cards  */}
      <section className={styles.keyBenefitsSection} id="key_features">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={7}>
              <SectionTitle>Exclusive Benefits with Kashti</SectionTitle>
              <ul>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Quick Processing:</b> Hassle-free application processing
                    in minutes.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Instant Approval:</b> Quick approval upon meeting the
                    criteria.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Effortless Comparison:</b> Easily compare offers and make
                    informed decisions.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Accurate Information:</b> Get reliable, frequently
                    updated data every time.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Transparent Disclosures:</b> Upfront details on fees and
                    charges to build confidence in applicants.
                  </span>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={5}>
              <CustomImage
                src={creditCardBenefits}
                alt="Key Benefits of Kashti’s Personal Loan "
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Eligibility Criteria for Personal Loan */}
      <section className={styles.eligibilityCriteriaSection} id="eligibility">
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Check Your Credit Card Eligibility</SectionTitle>
              <Text>
                Credit card eligibility varies by issuer and is set based on the
                card type, its benefits, and fee. Some important factors are:
              </Text>
              <div className={styles.eligibilitySteps}>
                <div className={styles.eligibilityBox}>
                  <Text>
                    <span>Age</span>
                    <span>18-60 Years</span>
                  </Text>
                  <CustomImage src={age} alt="Age" />
                </div>
                <div className={styles.eligibilityBox}>
                  <Text>
                    <span>Salaried</span>
                    <span>₹15,000/Month</span>
                  </Text>
                  <CustomImage src={salaried} alt="Salaried" />
                </div>
                <div className={styles.eligibilityBox}>
                  <Text>
                    <span>Credit Score</span>
                    <span>&gt;750</span>
                  </Text>
                  <CustomImage src={creditScore} alt="Credit score" />
                </div>
              </div>
              <Text className={styles.notes}>
                *The shown eligibility criteria can vary according to the type
                of credit card offered and differ from bank to bank.
              </Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Swift Credit Solutions: Get Your Card with these 5 Easy Steps  */}
      <section className={styles.instantPersonalLoanSection} id="how_to_apply">
        <Container>
          <Row>
            <SectionTitle>5 Steps to the Right Credit Card</SectionTitle>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <ul className={styles.instantPersonalLoanStepsList}>
                <li>
                  <h4>1</h4>
                  <div>
                    <h3>Explore the Options</h3>
                    <p>
                      Explore the options and choose your preferred credit card
                      to start the application process.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>2</h4>
                  <div>
                    <h3>Enter Mandatory Information</h3>
                    <p>
                      Enter the basic, mandatory personal and financial details
                      as requested.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>3</h4>
                  <div>
                    <h3>Check Your Eligibility</h3>
                    <p>
                      On meeting the eligibility criteria, provide remaining
                      details like employment and contact information.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>4</h4>
                  <div>
                    <h3>Submit the Application</h3>
                    <p>
                      Accept the Terms and Conditions, and use the One Time
                      Password (OTP) sent to your phone to complete the
                      application process.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>5</h4>
                  <div>
                    <h3>Receive Your Card</h3>
                    <p>
                      Receive your physical card via mail upon approval from the
                      issuer. Follow the instructions to activate it.
                    </p>
                  </div>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage
                src={secureCreditCard}
                alt="Swift Credit Solutions: Get Your Card with these 5 Easy Steps"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Frequently Asked Questions  */}
      <FaqSection activeColor={"#F8F9FF"} id="faqs" />

      {/* Add to Compare Box */}
      {compareData.length > 0 && (
        <CompareBox
          compareData={compareData}
          onRemoveAll={() => setCompareData([])}
          onRemoveCard={(val) =>
            setCompareData((prev) => prev.filter((item) => item.id !== val.id))
          }
          cardData={cardData}
        />
      )}
      {displayFilter && (
        <PopupPortal display={displayFilter}>
          <div className="popupBox">
            <MobileFilter
              filterValues={setFilter}
              removeFilter={removeFilter}
              resetRemoveFilter={setRemoveFilter}
              onClose={() => setDisplayFilter(false)}
              filterSavedData={filter}
            />
          </div>
        </PopupPortal>
      )}
    </main>
  );
};

export default Page;
