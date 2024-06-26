import { Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import CustomImage from "../customImage";
import { kreditBeeOffer } from "@public/assets";
import { CheckCircle } from "react-bootstrap-icons";
import Link from "next/link";
import { LIST_BANK_PROVIDERS_URL, indianRupeeConvert } from "@utils/constant";

const LoanOffer = ({ item, currentQues, key }) => {
  return (
    <div className={styles.loanOffer}>
      <div className={styles.offerImg}>
        <CustomImage
          src={LIST_BANK_PROVIDERS_URL[item?.bank_name].logo}
          alt={item?.bank_image_name}
        />
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
            href={LIST_BANK_PROVIDERS_URL[item?.bank_name].url}
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
