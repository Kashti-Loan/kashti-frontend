import { Text } from "@styles/styledComponent";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import Link from "next/link";

const PressReleaseBox = (props) => {
  return (
    <Link
      href="/press-release/press-release-detail"
      className={styles.pressBox}
    >
      <div className={styles.pressImg}>
        <CustomImage src={props.featuredImage} alt={props.name} />
      </div>
      <div className={styles.pressInfo}>
        <div className={styles.pressName}>
          <h4>{props.pressName}</h4>
          <Text>{props.createdDate}</Text>
        </div>
        <h3>{props.name}</h3>
        <div className={styles.userInfo}>
          <div className={styles.userImg}>
            <CustomImage
              src={props.createdUser.image}
              alt={props.createdUser.name}
            />
          </div>
          <div className={styles.userName}>
            <h5>{props.createdUser.name}</h5>
            <Text>5 Min Read</Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PressReleaseBox;
