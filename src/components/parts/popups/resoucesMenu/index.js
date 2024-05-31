"use client";
import { useState } from "react";
import { SectionTitle, Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import Link from "next/link";
import { routesConstant } from "@utils/routesConstant";
import { blogsData, faqData, pressData } from "@utils/data";
import CustomImage from "@components/ui/customImage";
import { demoSuccess, successImg } from "@public/assets";
import FaqBox from "@components/parts/accordians/faqBox";

const ResourcesMenu = (props) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.resourcesMenu}>
      <div className={styles.menuHeader}>
        <SectionTitle>Resources</SectionTitle>
      </div>
      <div className={styles.menuList}>
        {/* <div className={styles.menuBlock}>
          <div className={styles.menuTitle}>
            <h4>Press Release</h4>
            <Link
              href={routesConstant.PRESS_RELEASE}
              className={"secondaryBtn"}
              onClick={props.onClick}
            >
              View All
            </Link>
          </div>
          <div className={styles.pressReleaseContent}>
            {pressData.map(
              (item, i) =>
                i <= 1 && (
                  <Link
                    href={"/press-release/press-release-detail"}
                    className={styles.contentBox}
                    key={i}
                    onClick={props.onClick}
                  >
                    <div className={styles.contentImg}>
                      <CustomImage src={item.featured_image} alt={item.name} />
                    </div>
                    <div className={styles.contentInfo}>
                      <h5>{item.news}</h5>
                      <h4>{item.name}</h4>
                      <Text>{item.created_date}</Text>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div> */}
        <div className={styles.menuBlock}>
          <div className={styles.menuTitle}>
            <h4>Blogs</h4>
            <Link
              href={routesConstant.BLOGS}
              className={"secondaryBtn"}
              onClick={props.onClick}
            >
              View All
            </Link>
          </div>
          <div className={styles.pressReleaseContent}>
            {blogsData.map(
              (item, i) =>
                i <= 1 && (
                  <Link
                    href={"/press-release/press-release-detail"}
                    className={styles.contentBox}
                    key={i}
                    onClick={props.onClick}
                  >
                    <div className={styles.contentImg}>
                      <CustomImage src={item.featured_image} alt={item.name} />
                    </div>
                    <div className={styles.contentInfo}>
                      <h4>{item.name}</h4>
                      <Text>5 Min. Read</Text>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
        <div className={styles.menuBlock}>
          <div className={styles.menuTitle}>
            <h4>Success Stories</h4>
            <Link
              href={routesConstant.SUCCESS_STORIES}
              className={"secondaryBtn"}
              onClick={props.onClick}
            >
              View All
            </Link>
          </div>
          <div className={styles.successStoryVideo}>
            <CustomImage src={demoSuccess} alt="Success Story" />
          </div>
        </div>
        <div className={styles.menuBlock}>
          <div className={styles.menuTitle}>
            <h4>Frequently Asked Questions </h4>
            <Link
              href={routesConstant.FAQ}
              className={"secondaryBtn"}
              onClick={props.onClick}
            >
              View All
            </Link>
          </div>
          <ul className={styles.faqList}>
            {faqData.map((data, i) => (
              <FaqBox
                title={data.title}
                description={data.description}
                id={data.id}
                key={i}
                currentQues={active === data.id ? true : false}
                currentFaq={(val) => setActive(val)}
                activeColor={"#F8F9FF"}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenu;
