import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import { CustomImage, CustomSlider, GreenCheckIcon } from "@components";
import {
  citi,
  citibank,
  icicibank,
  mahindra,
  missionImg,
  muthoot,
  teamOne,
  teamThree,
  teamTwo,
  unionbank,
  visionImg,
  yesbank,
} from "@public/assets";
import { bankingSliderSettings, logoSliderSettings } from "@utils/constant";

const Page = () => {
  return (
    <main className={styles.aboutUsPage}>
      <section className={styles.aboutUpperBlock}>
        {/* About the Company */}
        <section className={styles.aboutCompanySection}>
          <Container>
            <Row>
              <Col lg={12}>
                <PageTitle>About the Company</PageTitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur. Venenatis placerat
                  egestas morbi cursus in auctor consectetur diam mattis. Arcu
                  commodo nunc massa diam enim. Vitae quis cras nibh hendrerit
                  ac. Quis eu sagittis in non augue quam in donec. Ac vitae
                  iaculis pellentesque sagittis turpis est sit. Cras faucibus
                  nec at morbi. Viverra ac elit pellentesque ultrices a
                  vulputate accumsan. Pulvinar urna consectetur interdum elit.
                  Libero non massa diam sit eu id fermentum vel proin.
                </Text>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Our Mission & Our Vision */}
        <section className={styles.missionVisionSection}>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <SectionTitle>Our Mission</SectionTitle>
                <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                <CustomImage src={missionImg} alt="Our Mission" />
                <ul>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.
                    </span>
                  </li>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.{" "}
                    </span>
                  </li>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.
                    </span>
                  </li>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={12} lg={5}>
                <CustomImage src={missionImg} alt="Our Mission" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <SectionTitle>Our Vision</SectionTitle>
                <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                <CustomImage src={visionImg} alt="Our Vision" />
                <ul>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.
                    </span>
                  </li>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.{" "}
                    </span>
                  </li>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.
                    </span>
                  </li>
                  <li>
                    <GreenCheckIcon />
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Erat a in ornare
                      ultrices elit platea interdum.
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={12} lg={5}>
                <CustomImage src={visionImg} alt="Our Vision" />
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      {/* Kashti Stats */}
      <section className={styles.statSection}>
        <Container>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <div>
                <h3>50k+</h3>
                <Text>Applications</Text>
              </div>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <div>
                <h3>50+</h3>
                <Text>Partners</Text>
              </div>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <div>
                <h3>50k+</h3>
                <Text>Pincodes recovered</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team Members */}
      <section className={styles.ourTeamMembers}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Our Team Members</SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={4}>
              <CustomImage src={teamOne} alt={"Team Member"} />
              <h3>Team Member 1</h3>
              <Text>Designation</Text>
            </Col>
            <Col xs={6} md={4} lg={4}>
              <CustomImage src={teamTwo} alt={"Team Member"} />
              <h3>Team Member 1</h3>
              <Text>Designation</Text>
            </Col>
            <Col xs={6} md={4} lg={4}>
              <CustomImage src={teamThree} alt={"Team Member"} />
              <h3>Team Member 1</h3>
              <Text>Designation</Text>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Banking Partners and NBFCs */}
      <section className={styles.bankingPartners}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>Our Banking Partners and NBFCs</SectionTitle>
              <Text>
                Our mission is to connect you with your ideal financial partner
                to help you access the best financial services tailored to your
                needs. We collaborate with the top-tier giants in the banking
                and financial sector to offer you relevant products at
                competitive rates
              </Text>
            </Col>
          </Row>
        </Container>
        <CustomSlider
          settings={bankingSliderSettings}
          className={`bankLogoSlider ${styles.bankSliderContainer}`}
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
      </section>

      {/* This is Our Journey */}
      <section className={styles.journeySection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>This is Our Journey</SectionTitle>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Rhoncus tortor risus
                vestibulum pulvinar convallis{" "}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <h3>2019</h3>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper eu nulla at
                velit vitae eget vulputate.
              </Text>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <h3>2020</h3>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper eu nulla at
                velit vitae eget vulputate.
              </Text>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <h3>2021</h3>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper eu nulla at
                velit vitae eget vulputate.
              </Text>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <h3>2022 </h3>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper eu nulla at
                velit vitae eget vulputate.
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
