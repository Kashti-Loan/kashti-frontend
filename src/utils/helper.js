import numeral from "numeral";

export function getEmiAmount(loanAmount, interestRate, tenure) {
  const p = loanAmount;
  const r = ((interestRate / 100) * loanAmount).toFixed(2);
  const n = tenure;
  const amount = p / n + r / n;
  return parseFloat(amount.toFixed(2));
}

export const creditCardFilterHandler = (data, filterArray) => {
  // console.log("Before Filtered Data", { filterArray, data });
  let filteredData = [];
  if (filterArray?.provider.length === 0 && filterArray?.type.length === 0) {
    filteredData = data;
  } else if (
    filterArray?.provider.length > 0 &&
    filterArray?.type.length === 0
  ) {
    filteredData = data.filter((item) =>
      filterArray?.provider.includes(item.provider)
    );
  } else if (
    filterArray?.provider.length === 0 &&
    filterArray?.type.length > 0
  ) {
    filteredData = data.filter((item) =>
      filterArray.type.every((filterTag) =>
        item.type.map((tag) => tag).includes(filterTag)
      )
    );
  } else {
    filteredData = data.filter(
      (item) =>
        filterArray?.provider.includes(item.provider.id.toString()) &&
        filterArray.type.every((filterTag) =>
          item.type.map((tag) => tag).includes(filterTag)
        )
    );
  }

  return filteredData;
};

export const creditCardSortingHandler = (data, type) => {
  console.log("chala", { data, type });
  let sortingData = data;
  if (type === "asc") {
    return sortingData.sort((a, b) => a.annual_fee - b.annual_fee);
  } else if (type === "dsc") {
    return sortingData.sort((a, b) => b.annual_fee - a.annual_fee);
  } else {
    return sortingData;
  }
};

export function fCurrency(number) {
  return number.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
}
