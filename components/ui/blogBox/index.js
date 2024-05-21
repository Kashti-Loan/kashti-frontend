import { Text } from "@styles/styledComponent";
import CustomImage from "../customImage";
import styles from "./style.module.scss";
import Link from "next/link";

const BlogBox = (props) => {
  return (
    <Link href="/blogs/blog-detail" className={styles.blogBox}>
      <div className={styles.blogImg}>
        <CustomImage src={props.featuredImage} alt={props.name} />
      </div>
      <div className={styles.blogInfo}>
        <h3>{props.name}</h3>
        {
          props.excerpt && <Text>{props.excerpt}</Text>
        }
        <div className={styles.userInfo}>
          <div className={styles.userImg}>
            <CustomImage
              src={props.createdUser.image}
              alt={props.createdUser.name}
            />
          </div>
          <div className={styles.userName}>
            <h5>{props.createdUser.name}</h5>
            <Text>{props.createdDate} | 5 Min Read</Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogBox;
