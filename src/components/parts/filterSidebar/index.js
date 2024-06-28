"use client";
import { useEffect, useState } from "react";
import { SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { ChevronDown, ChevronUp, Search } from "react-bootstrap-icons";
import Checkbox from "@components/ui/checkbox";
import { creditCardProviderData, creditCardTypeData } from "@utils/data";

const FilterSidebar = ({
  filterValues,
  setFilterValues,
  removeFilter,
  resetRemoveFilter,
}) => {
  const [totalFilter, setTotalFilter] = useState(0);
  // console.log("filter data", filterValues);

  useEffect(() => {
    setFilterValues(filterValues);
    setTotalFilter(filterValues.provider.length + filterValues.type.length);
  }, [filterValues]);

  useEffect(() => {
    if (removeFilter) {
      if (removeFilter.parent === "Provider") {
        setFilterValues((prev) => ({
          ...prev,
          provider: prev.provider.filter(
            (val) => val !== removeFilter.name.toString()
          ),
        }));
      } else if (removeFilter.parent === "type") {
        setFilterValues((prev) => ({
          ...prev,
          type: prev.type.filter((val) => val !== removeFilter.name.toString()),
        }));
      }
      resetRemoveFilter(null);
    }
  }, [removeFilter]);

  const providerHandler = (e) => {
    if (filterValues.provider.indexOf(e.target.value) !== -1) {
      setFilterValues((prev) => ({
        ...prev,
        provider: prev.provider.filter((val) => val !== e.target.value),
      }));
    } else {
      setFilterValues((prev) => ({
        ...prev,
        provider: [...prev.provider, e.target.value],
      }));
    }
  };

  const typeHandler = (e) => {
    if (filterValues.type.indexOf(e.target.value) !== -1) {
      setFilterValues((prev) => ({
        ...prev,
        type: prev.type.filter((val) => val !== e.target.value),
      }));
    } else {
      setFilterValues((prev) => ({
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
            setFilterValues({
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
                  value={item.name}
                  label={item.name}
                  onChange={providerHandler}
                  checked={filterValues.provider.includes(item.name.toString())}
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
                  value={item.name}
                  label={item.name}
                  onChange={typeHandler}
                  checked={filterValues.type.includes(item.name.toString())}
                />
              </li>
            ))}
          </ul>
          {/* <button className={styles.filterViewMoreBtn}>View more</button> */}
        </div>
      </div>
      {/* <div className={styles.filterBlock}>
        <div>
          <h3>Features</h3>
          <div>
            <Search />
            <ChevronDown />
          </div>
        </div>
        <div>
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
        </div>
      </div>
      <div className={styles.filterBlock}>
        <div>
          <h3>Annual Income</h3>
          <div>
            <Search />
            <ChevronDown />
          </div>
        </div>
        <div>
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
        </div>
      </div> */}
    </aside>
  );
};

export default FilterSidebar;
