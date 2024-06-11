"use client";
import { useEffect, useState } from "react";
import { SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { ChevronDown, ChevronUp, Search } from "react-bootstrap-icons";
import Checkbox from "@components/ui/checkbox";
import { creditCardProviderData, creditCardTypeData } from "@utils/data";

const FilterSidebar = ({ filterValues, removeFilter, resetRemoveFilter }) => {
  const [filterData, setFilterData] = useState({
    provider: [],
    type: [],
    features: [],
    annualIncome: [],
  });
  const [totalFilter, setTotalFilter] = useState(0);
  // console.log("filter data", filterData);

  useEffect(() => {
    filterValues(filterData);
    setTotalFilter(filterData.provider.length + filterData.type.length);
  }, [filterData]);

  useEffect(() => {
    if (removeFilter) {
      if (removeFilter.parent === "provider") {
        setFilterData((prev) => ({
          ...prev,
          provider: prev.provider.filter(
            (val) => val !== removeFilter.id.toString()
          ),
        }));
      } else if (removeFilter.parent === "type") {
        setFilterData((prev) => ({
          ...prev,
          type: prev.type.filter((val) => val !== removeFilter.id.toString()),
        }));
      }
      resetRemoveFilter(null);
    }
  }, [removeFilter]);

  const providerHandler = (e) => {
    if (filterData.provider.indexOf(e.target.value) !== -1) {
      setFilterData((prev) => ({
        ...prev,
        provider: prev.provider.filter((val) => val !== e.target.value),
      }));
    } else {
      setFilterData((prev) => ({
        ...prev,
        provider: [...prev.provider, e.target.value],
      }));
    }
  };

  const typeHandler = (e) => {
    if (filterData.type.indexOf(e.target.value) !== -1) {
      setFilterData((prev) => ({
        ...prev,
        type: prev.type.filter((val) => val !== e.target.value),
      }));
    } else {
      setFilterData((prev) => ({
        ...prev,
        type: [...prev.type, e.target.value],
      }));
    }
  };

  return (
    <aside className={styles.filterSidebar}>
      <div className={styles.filterHeader}>
        <SectionTitle>
          Filter {totalFilter !== 0 && `(${totalFilter})`}
        </SectionTitle>
        <button
          onClick={() =>
            setFilterData({
              provider: [],
              type: [],
              features: [],
              annualIncome: [],
            })
          }
        >
          Clear All
        </button>
      </div>
      <div className={styles.filterBlock}>
        <div>
          <h3>Provider</h3>
          <div>
            <Search />
            <ChevronUp />
          </div>
        </div>
        <div>
          <ul className={styles.filterList}>
            {creditCardProviderData.map((item, i) => (
              <li key={i}>
                <Checkbox
                  name={item.name}
                  value={item.id}
                  label={item.name}
                  onChange={providerHandler}
                  checked={filterData.provider.includes(item.id.toString())}
                />
              </li>
            ))}
          </ul>
          {/* <button className={styles.filterViewMoreBtn}>View more</button> */}
        </div>
      </div>
      <div className={styles.filterBlock}>
        <div>
          <h3>Type</h3>
          <div>
            <Search />
            <ChevronUp />
          </div>
        </div>
        <div>
          <ul className={styles.filterList}>
            {creditCardTypeData.map((item, i) => (
              <li key={i}>
                <Checkbox
                  name={item.name}
                  value={item.id}
                  label={item.name}
                  onChange={typeHandler}
                  checked={filterData.type.includes(item.id.toString())}
                />
              </li>
            ))}
          </ul>
          {/* <button className={styles.filterViewMoreBtn}>View more</button> */}
        </div>
      </div>
      <div className={styles.filterBlock}>
        <div>
          <h3>Features</h3>
          <div>
            {/* <Search /> */}
            <ChevronDown />
          </div>
        </div>
        {/* <div>
          <ul className={styles.filterList}>
            {creditCardProviderData.map((item, i) => (
              <li key={i}>
                <Checkbox
                  name={item.name}
                  value={item.name}
                  label={item.name}
                />
              </li>
            ))}
          </ul>
          <button className={styles.filterViewMoreBtn}>View more</button>
        </div> */}
      </div>
      <div className={styles.filterBlock}>
        <div>
          <h3>Annual Income</h3>
          <div>
            {/* <Search /> */}
            <ChevronDown />
          </div>
        </div>
        {/* <div>
          <ul className={styles.filterList}>
            {creditCardProviderData.map((item, i) => (
              <li key={i}>
                <Checkbox
                  name={item.name}
                  value={item.name}
                  label={item.name}
                />
              </li>
            ))}
          </ul>
          <button className={styles.filterViewMoreBtn}>View more</button>
        </div> */}
      </div>
    </aside>
  );
};

export default FilterSidebar;
