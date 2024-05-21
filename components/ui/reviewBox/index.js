import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";

const ReviewBox = () => {
  return (
    <div className={styles.reviewBox}>
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.584 1.04891L23.008 5.15291C21.856 5.05691 20.92 5.24891 20.2 5.72891C19.48 6.18492 18.976 6.85691 18.688 7.74491C18.424 8.60891 18.376 9.61691 18.544 10.7689H23.584V20.5609H13.792V10.7689C13.792 7.31291 14.596 4.69692 16.204 2.92092C17.812 1.12091 20.272 0.496914 23.584 1.04891ZM10.552 1.04891L9.976 5.15291C8.824 5.05691 7.888 5.24891 7.168 5.72891C6.448 6.18492 5.944 6.85691 5.656 7.74491C5.392 8.60891 5.344 9.61691 5.512 10.7689H10.552V20.5609H0.76V10.7689C0.76 7.31291 1.564 4.69692 3.172 2.92092C4.78 1.12091 7.24 0.496914 10.552 1.04891Z"
          fill="#283487"
        />
      </svg>

      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley .
      </Text>
    </div>
  );
};

export default ReviewBox;
