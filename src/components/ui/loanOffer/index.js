import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import CustomImage from "../customImage";
import { kreditBeeOffer } from "@public/assets";
import { CheckCircle } from "react-bootstrap-icons";
import Link from "next/link";
import { indianRupeeConvert } from "@utils/constant";

const LoanOffer = ({ item, currentQues, key }) => {
  return (
    <div className={styles.loanOffer}>
      <div className={styles.offerImg}>
        <CustomImage src={item?.image} alt={item?.bank_image_name} />
        <h4>
          <span>{item?.bank_name}</span> <CheckCircle />
        </h4>
      </div>
      <div>
        <Text>
          Loan Amount -{" "}
          <b>
            ₹ {item?.loan_amount ? indianRupeeConvert(item?.loan_amount) : "-"}
          </b>
        </Text>
      </div>
      <div>
        {/* <button className="primaryBtn">Complete KYC</button> */}
        <div>
          <Link
            href={item?.apply_link ? item?.apply_link : "#"}
            className="primaryBtn"
            target="_blank"
          >
            Complete KYC
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanOffer;
