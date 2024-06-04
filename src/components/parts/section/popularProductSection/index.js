"use client";
import { useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import ShoppingIcon from "@components/ui/svg/shoppingIcon";
import CashbackIcon from "@components/ui/svg/cashbackIcon";
import DineInIcon from "@components/ui/svg/dineInIcon";
import CustomSlider from "@components/ui/customSlider";
import { homeBannerSliderSettings } from "@utils/constant";
import StudentIcon from "@components/ui/svg/studentIcon";
import TravelIcon from "@components/ui/svg/travelIcon";
import MovieIcon from "@components/ui/svg/movieIcon";
import { popularShopping } from "@public/assets";
import CustomImage from "@components/ui/customImage";
import { Text } from "@styles/styledComponent";
import Link from "next/link";
import Slider, { slickGoTo } from "react-slick";

const PopularProductSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (index) => setCurrentSlide(index),
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

  return (
    <Row className={styles.popularProductRow}>
      <Col xs={12} md={3} lg={4}>
        <div
          className={`${styles.productBox} ${
            currentSlide === 0 ? styles.activeProduct : styles.notActiveProduct
          }`}
          onClick={() => {
            goToSlide(0);
            sliderRef.current.slickGoTo(0);
          }}
        >
          <ShoppingIcon /> <h4>Shopping</h4>
        </div>
        <div
          className={`${styles.productBox} ${
            currentSlide === 1 ? styles.activeProduct : styles.notActiveProduct
          }`}
          onClick={() => {
            goToSlide(1);
            sliderRef.current.slickGoTo(1);
          }}
        >
          <CashbackIcon /> <h4>Cashback</h4>
        </div>
        <div
          className={`${styles.productBox} ${
            currentSlide === 2 ? styles.activeProduct : styles.notActiveProduct
          }`}
          onClick={() => {
            goToSlide(2);
            sliderRef.current.slickGoTo(2);
          }}
        >
          <DineInIcon /> <h4>Dine-In</h4>
        </div>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <div className={styles.popularProductSlider}>
          <Slider
            {...settings}
            className={"popularProductSlider"}
            ref={sliderRef}
          >
            {popularProductSlides.map((val) => val)}
          </Slider>
        </div>
      </Col>
      <Col xs={12} md={3} lg={4}>
        <div
          className={`${styles.productBox} ${
            currentSlide === 3 ? styles.activeProduct : styles.notActiveProduct
          }`}
          onClick={() => {
            goToSlide(3);
            sliderRef.current.slickGoTo(3);
          }}
        >
          <StudentIcon /> <h4>Student</h4>
        </div>
        <div
          className={`${styles.productBox} ${
            currentSlide === 4 ? styles.activeProduct : styles.notActiveProduct
          }`}
          onClick={() => {
            goToSlide(4);
            sliderRef.current.slickGoTo(4);
          }}
        >
          <TravelIcon /> <h4>Travel</h4>
        </div>
        <div
          className={`${styles.productBox} ${
            currentSlide === 5 ? styles.activeProduct : styles.notActiveProduct
          }`}
          onClick={() => {
            goToSlide(2);
            sliderRef.current.slickGoTo(5);
          }}
        >
          <MovieIcon /> <h4>Movie</h4>
        </div>
      </Col>
    </Row>
  );
};

export default PopularProductSection;
