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
  hdfc,
  creditCardBannerImg,
  ccKeyBenefits,
  ccEasySteps,
  ccMobileBanner,
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
              <PageTitle>
                Find the Right <span>Credit Card</span>
              </PageTitle>
              <Text>
                Explore and compare India’s top credit cards in one place, then
                apply for the one that suits your needs best
              </Text>
              <div className={styles.bannerImgBlock}>
                <div>
                  <CustomImage src={citi_color} alt="Bank Partners" />
                  <CustomImage src={unionBank_color} alt="Bank Partners" />
                  <CustomImage src={icici_color} alt="Bank Partners" />
                  <CustomImage src={yesBank_color} alt="Bank Partners" />
                  <CustomImage src={hdfc} alt="Bank Partners" />
                </div>
              </div>
              <CustomImage src={creditCardBannerImg} alt="Right Credit Card" />
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
              <PageTitle>
                Find the Right <span>Credit Card</span>{" "}
              </PageTitle>
              <Text>Apply for the card that fits your needs the most.</Text>
            </Col>
            <Col xs={5}>
              <CustomImage src={ccMobileBanner} alt="Credit card Banner" />
            </Col>
          </Row>
          <Row>
            <Col>
              <GetCreditCard />
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
            <Col xs={12} md={6} lg={8}>
              <SectionTitle>Key Benefits of Kashti’s Credit Cards</SectionTitle>
              <ul>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Swift Application Process:</b> Apply in minutes for a
                    quick and convenient experience.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Instant Approval Possibility:</b> Meeting criteria may
                    lead to instant approval.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Effective Comparison Tools:</b> Easy comparison of offers
                    for informed choices.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Reliable Information:</b> Trustworthy, regularly updated
                    data available.
                  </span>
                </li>
                <li>
                  <GreenCheckIcon />{" "}
                  <span>
                    <b>Transparent Fee Disclosure:</b> Clear information
                    regarding fees and charges builds trust and confidence in
                    potential applicants.
                  </span>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <CustomImage
                src={ccKeyBenefits}
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
              <SectionTitle>Eligibility Criteria for Credit Cards</SectionTitle>
              <Text>
                Credit card eligibility varies across issuers and card types.
                While certain fundamental requirements like age, residence,
                income source, and credit score remain constant, the key
                difference lies in the minimum income criterion. Issuers set
                these criteria based on the card's type, perks, and annual fees.
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
                    <span>₹2 Lakh p.a.</span>
                  </Text>
                  <CustomImage src={salaried} alt="Salaried" />
                </div>
                <div className={styles.eligibilityBox}>
                  <Text>
                    <span>Credit Score</span>
                    <span>&gt;650</span>
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
            <SectionTitle>
              Swift Credit Solutions: Get Your Card with these 5 Easy Steps
            </SectionTitle>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <ul className={styles.instantPersonalLoanStepsList}>
                <li>
                  <h4>1</h4>
                  <div>
                    <h3>Explore the Options</h3>
                    <p>
                      Browse available credit cards, compare offers and choose
                      one matching your needs.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>2</h4>
                  <div>
                    <h3>Complete Application</h3>
                    <p>
                      Fill out the online form with accurate personal and
                      financial details.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>3</h4>
                  <div>
                    <h3>Review Terms</h3>
                    <p>
                      Carefully read and understand the card's terms and
                      conditions.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>4</h4>
                  <div>
                    <h3>Submit Application</h3>
                    <p>
                      Double-check the information and submit the completed
                      application.
                    </p>
                  </div>
                </li>
                <li>
                  <h4>5</h4>
                  <div>
                    <h3>Wait for Approval</h3>
                    <p>
                      Await the issuer's decision. Upon approval, receive the
                      card by mail and follow instructions to activate it.
                    </p>
                  </div>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage
                src={ccEasySteps}
                alt="Swift Credit Solutions: Get Your Card with these 5 Easy Steps"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Frequently Asked Questions  */}
      <FaqSection
        activeColor={"#F8F9FF"}
        id="faqs"
        className={styles.faqSection}
      />
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
