import { SectionTitle, Text } from "@styles/styledComponent";
import styles from "./style.module.scss";
import Link from "next/link";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";

const ContactForm = () => {
  return (
    <div className={styles.contactFormBox}>
      <SectionTitle>Enquiry Form</SectionTitle>
      <form>
        <div className={styles.inputBlock}>
          <div>
            <input type="text" name="name" placeholder="Enter Name" />
          </div>
          <div>
            <input type="text" name="name" placeholder="Enter Email ID" />
          </div>
          <div className={styles.phoneNumberField}>
            <select>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
            </select>
            <input
              type="text"
              name="mobile_number"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <textarea name="name" placeholder="Enter Message" rows={5} />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className="primaryBtn">
            Send Message
          </button>
        </div>
      </form>
      <div className={styles.mobileContactInfo}>
        <ul>
          <li>
            <Link href="#">
              <GeoAlt />
              <div>
                <h3>Address</h3>
                <Text>
                  608, Avenue Street, Riordon Main Road, Streetlane, Bangalore -
                  560089
                </Text>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Envelope />
              <div>
                <h3>Email ID</h3>
                <Text>
                  <b>General:</b> kashtifinservices@gmail.com
                </Text>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Telephone />
              <div>
                <h3>Phone number</h3>
                <Text>+91-9876543210</Text>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
