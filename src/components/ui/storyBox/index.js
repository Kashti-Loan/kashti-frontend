import { Text } from "@styles/styledComponent";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import Link from "next/link";

const StoryBox = (props) => {
  return (
    <Link href="/success-stories/disclaimer" className={styles.storyBox}>
      <div className={styles.storyImg}>
        <CustomImage src={props.featuredImage} alt={props.name} />
      </div>
      <div className={styles.storyInfo}>
        <h3>{props.name}</h3>
        {props.excerpt && <Text>{props.excerpt}</Text>}
        <div className={styles.readMoreBtn}>
          <Link href={"/success-stories/disclaimer"} className="secondaryBtn">
            Read More
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default StoryBox;
