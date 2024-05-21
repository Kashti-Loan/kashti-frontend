import Image from "next/image";

const NormalImage = ({ src, alt, height, width, className }) => {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "100%",
        position: "relative",
      }}
      className={className ? className : "customImageContainer"}
    >
      <Image src={src} alt={alt} fill={true} sizes="responsive" />
    </div>
  );
};

export default NormalImage;
