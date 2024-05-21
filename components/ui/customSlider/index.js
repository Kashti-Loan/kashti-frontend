'use client'
import Slider from "react-slick";

const CustomSlider = (props) => {
  return (
    <Slider {...props.settings} className={props.className}>
      {props.children.map((val) => val)}
    </Slider>
  );
};

export default CustomSlider;
