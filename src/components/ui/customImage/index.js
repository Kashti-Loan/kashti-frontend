import Image from "next/image";

const CustomImage = (props) => {
  const src = props.src;

  return <Image src={props.src} alt={props.alt} width={src.width} height={src.height} className={props.className || "kashtiImg"}/>;
};

export default CustomImage;
