import Image from "next/image";

const CustomImage = (props) => {
  const src = props.src;

  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props?.width || "100%"}
      height={props?.height || "100%"}
      className={props.className || "kashtiImg"}
    />
  );
};

export default CustomImage;
