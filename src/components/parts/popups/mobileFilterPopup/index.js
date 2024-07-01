"use client";
import { useState, useEffect } from "react";
import { SectionTitle } from "@styles/styledComponent";
import styles from "./style.module.scss";
import { Plus } from "react-bootstrap-icons";
import { creditCardProviderData, creditCardTypeData } from "@utils/data";
import Checkbox from "@components/ui/checkbox";

const MobileFilter = ({
  filterValues,
  removeFilter,
  resetRemoveFilter,
  onClose,
  filterSavedData,
  setFilterValues,
}) => {
  const [activeFilter, setActiveFilter] = useState("provider");
  const [totalFilter, setTotalFilter] = useState(0);
  const [filterData, setFilterData] = useState(filterSavedData);

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

  console.log("selected filters", filterData);

  return (
    <div className={styles.mobileFilterContainer}>
      <div className={styles.filterHeader}>
        <SectionTitle>
          Filter {totalFilter !== 0 && `(${totalFilter})`}
        </SectionTitle>
        <Plus onClick={() => onClose()} />
      </div>
      <div className={styles.filterList}>
        <div>
          <ul className={styles.filterParentList}>
            <li
              className={
                activeFilter === "provider"
                  ? styles.activeFilter
                  : styles.notActiveFilter
              }
              onClick={() => setActiveFilter("provider")}
            >
              Provider{" "}
              {filterData.provider.length > 0 &&
                `(${filterData.provider.length})`}
            </li>
            <li
              className={
                activeFilter === "type"
                  ? styles.activeFilter
                  : styles.notActiveFilter
              }
              onClick={() => setActiveFilter("type")}
            >
              Type {filterData.type.length > 0 && `(${filterData.type.length})`}
            </li>
          </ul>
        </div>
        <div>
          {activeFilter === "provider" && (
            <ul className={styles.filterChildList}>
              {creditCardProviderData.map((item, i) => (
                <li key={i}>
                  <Checkbox
                    name={item.name}
                    value={item.name}
                    label={item.name}
                    onChange={providerHandler}
                    checked={filterValues.provider.includes(
                      item.name.toString()
                    )}
                  />
                </li>
              ))}
            </ul>
          )}
          {activeFilter === "type" && (
            <ul className={styles.filterChildList}>
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
          )}
        </div>
      </div>
      <div className={styles.filterButtons}>
        <button
          className="secondaryBtn"
          onClick={() => {
            filterValues({
              provider: [],
              type: [],
              features: [],
              annualIncome: [],
            });
            onClose();
          }}
        >
          Clear All
        </button>
        <button
          className="primaryBtn"
          onClick={() => {
            filterValues(filterData);
            onClose();
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default MobileFilter;
