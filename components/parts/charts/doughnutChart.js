"use client";
import { SquareFill } from "react-bootstrap-icons";
import { PieChart, Pie, Legend, Label, ResponsiveContainer } from "recharts";
import "./style.scss";
import { fCurrency } from "@utils/helper";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];

const DoughnutChart = ({ data }) => {
  const chartData = [
    {
      name: "Principal Amount",
      value: data.principleAmount,
      fill: "var(--secondaryColor)",
    },
    {
      name: "Interest Payable",
      value: data.interestPayable,
      fill: "#AC5816",
    },
  ];

  const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text x={cx - 60} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 400,
              fontSize: "14px",
              fill: "#1D2939",
              fontFamily: "Inter",
            }}
          >
            Total Amount Paid
          </tspan>
        </text>
        <text x={cx - 75} y={cy + 30}>
          <tspan
            style={{
              fontWeight: 600,
              fontSize: "24px",
              fill: "#1D2939",
              fontFamily: "Inter",
            }}
          >
            {noOfBubbleTeaSold}
          </tspan>
        </text>
      </>
    );
  };
  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={chartData} innerRadius={100} dataKey="value">
            <Label
              content={
                <CustomLabel
                  noOfBubbleTeaSold={fCurrency(data.totalAmountPaid)}
                />
              }
              position="center"
            />
          </Pie>
          <Legend
            content={(props) => {
              const { payload } = props;
              return (
                <ul className="customPieLegend">
                  {payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                      <SquareFill color={entry.color} />
                      <p>
                        <span>{entry.value}</span>
                        <span>
                          {entry.value === "Principal Amount"
                            ? `₹${data.principleAmount.toLocaleString("en-IN")}`
                            : `₹${data.interestPayable.toLocaleString(
                                "en-IN"
                              )}`}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              );
            }}
            verticalAlign="bottom"
            align="center"
            height={36}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
