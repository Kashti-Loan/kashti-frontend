"use client";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { PageTitle, SectionTitle, Text } from "@styles/styledComponent";
import {
  address,
  demoBlogDetail,
  demoBlogOne,
  email,
  phone,
  whiteKashti,
} from "@public/assets";
import {
  BlogBox,
  CustomImage,
  FbIcon,
  InstaIcon,
  LinkedIcon,
  PressReleaseBox,
  XIcon,
  YtIcon,
} from "@components";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { blogsData, pressData } from "@utils/data";
import { ChevronRight, Search } from "react-bootstrap-icons";

const Page = () => {
  return (
    <main className={styles.blogDetailPage}>
      {/* Get in Touch */}
      <section className={styles.headerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Text className={styles.breadCrumbs}>
                <span>Resources</span>
                <ChevronRight />
                <span>Blogs</span>
              </Text>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.blogContent}>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <span className={styles.blogCategory}>Times of India</span>
              <PageTitle>
                Top 5 Features Every NBFC Software Solution Should Have in 2024
              </PageTitle>
              <div className={styles.singleImg}>
                <CustomImage src={demoBlogDetail} alt={"Blog"} />
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userImg}>
                  <CustomImage src={demoBlogOne} alt="Blog Author" />
                </div>
                <div className={styles.userName}>
                  <h5>Karthik Jain</h5>
                  <Text>12 Nov, 2023 | 5 Min Read</Text>
                </div>
              </div>
              <div className={styles.singleFullContent}>
                <h3>
                  Lorem ipsum dolor sit amet consectetur. Integer ut magna dui
                  in diam neque risus arcu. Tristique tincidunt tellus rutrum
                  posuere ornare vitae hac ac est. Amet mattis vel est etiam.
                  Iaculis ut est.
                </h3>
                <Text>
                  Lorem ipsum dolor sit amet consectetur. Eros dictum eget
                  faucibus dui. Molestie tristique dignissim sed tortor sapien
                  nunc eget eget. Pellentesque netus duis nisl non. Proin
                  laoreet et ultricies et. Suspendisse suspendisse euismod
                  aliquam netus sapien sem rhoncus. Penatibus facilisis senectus
                  semper viverra nulla lacus. Aenean est pretium gravida cursus
                  accumsan nunc ultrices orci. Dignissim ac nunc commodo.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur. Eros dictum eget
                  faucibus dui. Molestie tristique dignissim sed tortor sapien
                  nunc eget eget. Pellentesque netus duis nisl non. Proin
                  laoreet et ultricies et. Suspendisse suspendisse euismod
                  aliquam netus sapien sem rhoncus. Penatibus facilisis senectus
                  semper viverra nulla lacus. Aenean est pretium gravida cursus
                  accumsan nunc ultrices orci. Dignissim ac nunc commodo.
                </Text>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <Text>
                  Lorem ipsum dolor sit amet consectetur. Eros dictum eget
                  faucibus dui. Molestie tristique dignissim sed tortor sapien
                  nunc eget eget. Pellentesque netus duis nisl non. Proin
                  laoreet et ultricies et. Suspendisse suspendisse euismod
                  aliquam netus sapien sem rhoncus. Penatibus facilisis senectus
                  semper viverra nulla lacus. Aenean est pretium gravida cursus
                  accumsan nunc ultrices orci. Dignissim ac nunc commodo.
                </Text>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <Text>
                  Lorem ipsum dolor sit amet consectetur. Eros dictum eget
                  faucibus dui. Molestie tristique dignissim sed tortor sapien
                  nunc eget eget. Pellentesque netus duis nisl non. Proin
                  laoreet et ultricies et. Suspendisse suspendisse euismod
                  aliquam netus sapien sem rhoncus. Penatibus facilisis senectus
                  semper viverra nulla lacus. Aenean est pretium gravida cursus
                  accumsan nunc ultrices orci. Dignissim ac nunc commodo.
                </Text>
              </div>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <h3>Read On Similar Topics</h3>
              <div className={styles.similarTopicSection}>
                {blogsData.map(
                  (item, i) =>
                    i <= 2 && (
                      <Link
                        href="/press-release/press-release-detail"
                        className={styles.pressBox}
                        key={i}
                      >
                        <div className={styles.pressImg}>
                          <CustomImage
                            src={item.featured_image}
                            alt={item.name}
                          />
                        </div>
                        <div className={styles.pressInfo}>
                          <div className={styles.pressName}>
                            <h4>{item.news}</h4>
                            <Text>{item.created_date}</Text>
                          </div>
                          <h3>{item.name}</h3>
                          <div className={styles.userInfo}>
                            <div className={styles.userImg}>
                              <CustomImage
                                src={item.created_user.image}
                                alt={item.created_user.name}
                              />
                            </div>
                            <div className={styles.userName}>
                              <h5>{item.created_user.name}</h5>
                              <Text>5 Min Read</Text>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                )}
              </div>
              <div className={styles.shareSection}>
                <h4>Share this Blog</h4>
                <ul className={styles.shareSocialList}>
                  <li>
                    <Link href={"#"}>
                      <FbIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <XIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <InstaIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <YtIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <LinkedIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Page;
