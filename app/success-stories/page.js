import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import Link from "next/link";
import {
  CustomImage,
  CustomSlider,
  ReviewBox,
  ReviewCustomerBox,
  StoryBox,
} from "@components";
import { demoBlogOne, demoSuccess, successStoryBanner } from "@public/assets";
import { ChevronRight } from "react-bootstrap-icons";
import {
  reviewCustomerSliderSettings,
  reviewSliderSettings,
  storySliderSettings,
} from "@utils/constant";

const Page = () => {
  return (
    <main className={styles.successStoryPage}>
      <div className={styles.pageUpperBlock}>
        <section className={styles.headerSection}>
          <Container>
            <Row>
              <Col lg={12}>
                <Text className={styles.breadCrumbs}>
                  <span>Resources</span>
                  <ChevronRight />
                  <span>Success Stories</span>
                </Text>
              </Col>
            </Row>
          </Container>
        </section>

        {/* We have Stories to Impress You */}
        <section className={styles.storiesImpressSection}>
          <Container>
            <Row>
              <Col xs={12} md={5} lg={5}>
                <PageTitle>
                  We have Stories to
                  <br />
                  Impress You
                </PageTitle>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </Text>
                <Link href={"#"} className="primaryBtn">
                  Read All Stories
                </Link>
              </Col>
              <Col xs={12} md={7} lg={7}>
                <CustomImage
                  src={successStoryBanner}
                  alt="We have Stories to Impress You"
                />
                <div className={styles.userInfo}>
                  <div className={styles.userImg}>
                    <CustomImage src={demoBlogOne} alt="Blog Author" />
                  </div>
                  <div className={styles.userName}>
                    <h5>Karthik Jain</h5>
                    <Text>12 Nov, 2023 | 5 Min Read</Text>
                  </div>
                </div>
                <Link href={"#"} className="primaryBtn">
                  Read All Stories
                </Link>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className={styles.statBlock}>
                  <div>
                    <SectionTitle>40+</SectionTitle>
                    <Text>Lorem ipsum dolor sit</Text>
                  </div>
                  <div>
                    <SectionTitle>60%</SectionTitle>
                    <Text>Lorem ipsum dolor sit</Text>
                  </div>
                  <div>
                    <SectionTitle>10k</SectionTitle>
                    <Text>Lorem ipsum dolor sit</Text>
                  </div>
                  <div>
                    <SectionTitle>200+</SectionTitle>
                    <Text>Lorem ipsum dolor sit</Text>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <CustomImage src={demoSuccess} alt="Demo Success" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* User Success Stories */}
      <section className={styles.successStorySection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>User Success Stories</SectionTitle>
              <CustomSlider
                settings={storySliderSettings}
                className={`${styles.storySliderContainer} storySlider`}
                children={[
                  <StoryBox
                    featuredImage={demoBlogOne}
                    name="Debt borrowed by others"
                    excerpt="Lorem ipsum dolor sit amet, dolor adipiscing adipiscing elitconsectetur adipiscing elit. Vestibulum id."
                  />,
                  <StoryBox
                    featuredImage={demoBlogOne}
                    name="Debt borrowed by others"
                    excerpt="Lorem ipsum dolor sit amet, dolor adipiscing adipiscing elitconsectetur adipiscing elit. Vestibulum id."
                  />,
                  <StoryBox
                    featuredImage={demoBlogOne}
                    name="Debt borrowed by others"
                    excerpt="Lorem ipsum dolor sit amet, dolor adipiscing adipiscing elitconsectetur adipiscing elit. Vestibulum id."
                  />,
                  <StoryBox
                    featuredImage={demoBlogOne}
                    name="Debt borrowed by others"
                    excerpt="Lorem ipsum dolor sit amet, dolor adipiscing adipiscing elitconsectetur adipiscing elit. Vestibulum id."
                  />,
                ]}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* What our customer are saying */}
      <section className={styles.reviewSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>What our customer are saying</SectionTitle>
              <CustomSlider
                settings={reviewSliderSettings}
                className={`${styles.reviewSliderContainer} sliderFor`}
                children={[
                  <div>
                    <ReviewBox />
                  </div>,
                  <div>
                    <ReviewBox />
                  </div>,
                  <div>
                    <ReviewBox />
                  </div>,
                  <div>
                    <ReviewBox />
                  </div>,
                  <div>
                    <ReviewBox />
                  </div>,
                ]}
              />
              <CustomSlider
                settings={reviewCustomerSliderSettings}
                className={`${styles.reviewSliderContainer} sliderNav`}
                children={[
                  <div>
                    <ReviewCustomerBox />
                  </div>,
                  <div>
                    <ReviewCustomerBox />
                  </div>,
                  <div>
                    <ReviewCustomerBox />
                  </div>,
                  <div>
                    <ReviewCustomerBox />
                  </div>,
                  <div>
                    <ReviewCustomerBox />
                  </div>,
                ]}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
