"use client";
import { PageTitle, SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { useSearchParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { Checkbox, ComparisonCardBox } from "@components";

const Page = () => {
  const router = useSearchParams();
  const data = JSON.parse(router.get("data"));
  // console.log("search para", data);
  return (
    <main className={styles.comparisonPage}>
      <Container>
        <Row className={styles.pageHeader}>
          <Col lg={12}>
            <SectionTitle>Credit Card Comparison Details</SectionTitle>
          </Col>
        </Row>
        <Row className={styles.cardContainer}>
          <Col lg={3}>
            <div className={styles.compareCardList}>
              <div>
                <h3>Compare {data && `(${data.length})`}</h3>
                <ol>
                  {data && data.map((item, i) => <li key={i}>{item.name}</li>)}
                </ol>
              </div>
              <div>
                <Checkbox label="Show only differences" />
              </div>
            </div>
          </Col>
          <Col lg={9}>
            {data &&
              data.map((item, i) => (
                <ComparisonCardBox
                  key={i}
                  image={item.image}
                  theme={item.theme_color}
                  name={item.name}
                  creditScore={item.credit_score}
                />
              ))}
          </Col>
        </Row>
        <Row className={styles.featuresContainer}>
          <Col>
            <table>
              <thead>
                <tr>
                  <th colSpan={data.length + 1}>Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual Charges</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Monthly Interest Rate</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Rewards</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Rewards Expiry</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Interest on ATM Cash Withdrawal</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.annual_fee}</td>)}
                </tr>
                <tr>
                  <td>Credit Score</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Great for</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Bonus Offer</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Pros</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
                <tr>
                  <td>Cons</td>
                  {data &&
                    data.map((item, i) => <td key={i}>{item.credit_score}</td>)}
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Page;
