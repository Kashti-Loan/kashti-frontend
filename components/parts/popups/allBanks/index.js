import { Plus, Search } from "react-bootstrap-icons";
import styles from "./style.module.scss";
import { Input } from "@styles/styledComponent";
import CustomImage from "@components/ui/customImage";
import { allahabad_single, andra_single, axis_single, bmb_single, bob_single, boi_single, bom_single, canara_single, cb_single, cbi_single, fb_single, gscb_single, hdfcCredited, hsbcCredited } from "@public/assets";

const AllBanks = (props) => {
  return (
    <section className={styles.allBankSection}>
      <div className={styles.allBankHeader}>
        <Plus onClick={props.onClose}/>
        <h4>All Banks</h4>
      </div>
      <div className={styles.searchBank}>
        <Input type="text" placeholder="Search for banks" />
        <Search />
      </div>
      <ul className={styles.allBankList}>
        <li>
          <CustomImage src={allahabad_single} alt="All Banks" />
          <h5>Allahabad Bank</h5>
        </li>
        <li>
          <CustomImage src={andra_single} alt="All Banks" />
          <h5>Andra Bank</h5>
        </li>
        <li>
          <CustomImage src={axis_single} alt="All Banks" />
          <h5>Axis Bank</h5>
        </li>
        <li>
          <CustomImage src={bob_single} alt="All Banks" />
          <h5>Bank of Baroda</h5>
        </li>
        <li>
          <CustomImage src={boi_single} alt="All Banks" />
          <h5>Bank of India</h5>
        </li>
        <li>
          <CustomImage src={bom_single} alt="All Banks" />
          <h5>Bank of Maharashtra</h5>
        </li>
        <li>
          <CustomImage src={bmb_single} alt="All Banks" />
          <h5>Bharatiya Mahila Bank</h5>
        </li>
        <li>
          <CustomImage src={canara_single} alt="All Banks" />
          <h5>Canara Bank</h5>
        </li>
        <li>
          <CustomImage src={cbi_single} alt="All Banks" />
          <h5>Central Bank of India</h5>
        </li>
        <li>
          <CustomImage src={cb_single} alt="All Banks" />
          <h5>Corporation Bank</h5>
        </li>
        <li>
          <CustomImage src={fb_single} alt="All Banks" />
          <h5>Federal Bank</h5>
        </li>
        <li>
          <CustomImage src={gscb_single} alt="All Banks" />
          <h5>Gujarat state Co Op Bank</h5>
        </li>
        <li>
          <CustomImage src={hsbcCredited} alt="All Banks" />
          <h5>HSBC Bank</h5>
        </li>
        <li>
          <CustomImage src={hdfcCredited} alt="All Banks" />
          <h5>HDFC Bank</h5>
        </li>
        <li>
          <CustomImage src={allahabad_single} alt="All Banks" />
          <h5>Allahabad Bank</h5>
        </li>
        <li>
          <CustomImage src={andra_single} alt="All Banks" />
          <h5>Andra Bank</h5>
        </li>
        <li>
          <CustomImage src={axis_single} alt="All Banks" />
          <h5>Axis Bank</h5>
        </li>
        <li>
          <CustomImage src={bob_single} alt="All Banks" />
          <h5>Bank of Baroda</h5>
        </li>
        <li>
          <CustomImage src={boi_single} alt="All Banks" />
          <h5>Bank of India</h5>
        </li>
        <li>
          <CustomImage src={bom_single} alt="All Banks" />
          <h5>Bank of Maharashtra</h5>
        </li>
        <li>
          <CustomImage src={bmb_single} alt="All Banks" />
          <h5>Bharatiya Mahila Bank</h5>
        </li>
        <li>
          <CustomImage src={canara_single} alt="All Banks" />
          <h5>Canara Bank</h5>
        </li>
        <li>
          <CustomImage src={cbi_single} alt="All Banks" />
          <h5>Central Bank of India</h5>
        </li>
        <li>
          <CustomImage src={cb_single} alt="All Banks" />
          <h5>Corporation Bank</h5>
        </li>
        <li>
          <CustomImage src={fb_single} alt="All Banks" />
          <h5>Federal Bank</h5>
        </li>
        <li>
          <CustomImage src={gscb_single} alt="All Banks" />
          <h5>Gujarat state Co Op Bank</h5>
        </li>
        <li>
          <CustomImage src={hsbcCredited} alt="All Banks" />
          <h5>HSBC Bank</h5>
        </li>
        <li>
          <CustomImage src={hdfcCredited} alt="All Banks" />
          <h5>HDFC Bank</h5>
        </li>
      </ul>
    </section>
  );
};

export default AllBanks;
