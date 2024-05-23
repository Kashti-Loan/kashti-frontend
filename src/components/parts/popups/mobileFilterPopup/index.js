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
}) => {
  const [activeFilter, setActiveFilter] = useState("provider");
  const [totalFilter, setTotalFilter] = useState(0);
  const [filterData, setFilterData] = useState(filterSavedData);

  useEffect(() => {
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
            <li
              className={
                activeFilter === "annualIncome"
                  ? styles.activeFilter
                  : styles.notActiveFilter
              }
              onClick={() => setActiveFilter("annualIncome")}
            >
              Annual Income
            </li>
            <li
              className={
                activeFilter === "features"
                  ? styles.activeFilter
                  : styles.notActiveFilter
              }
              onClick={() => setActiveFilter("features")}
            >
              Features
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
                    value={item.id}
                    label={item.name}
                    onChange={providerHandler}
                    checked={filterData.provider.includes(item.id.toString())}
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
                    value={item.id}
                    label={item.name}
                    onChange={typeHandler}
                    checked={filterData.type.includes(item.id.toString())}
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
