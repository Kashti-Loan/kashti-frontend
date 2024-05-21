"use client";
import { Tooltip } from "react-tooltip";

const CommonTooltip = ({ id, content, place }) => {
  return (
    <>
      <div data-tooltip-id={id} style={{ display: "inline-block" }}>
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33301 4.16683H7.66634V5.50016H6.33301V4.16683ZM6.33301 6.8335H7.66634V10.8335H6.33301V6.8335ZM6.99967 0.833496C3.31967 0.833496 0.333008 3.82016 0.333008 7.50016C0.333008 11.1802 3.31967 14.1668 6.99967 14.1668C10.6797 14.1668 13.6663 11.1802 13.6663 7.50016C13.6663 3.82016 10.6797 0.833496 6.99967 0.833496ZM6.99967 12.8335C4.05967 12.8335 1.66634 10.4402 1.66634 7.50016C1.66634 4.56016 4.05967 2.16683 6.99967 2.16683C9.93967 2.16683 12.333 4.56016 12.333 7.50016C12.333 10.4402 9.93967 12.8335 6.99967 12.8335Z"
            fill="#2A3485"
          />
        </svg>
      </div>
      <Tooltip id={id} place={place || "top"} effect="solid">
        {content}
      </Tooltip>
    </>
  );
};

export default CommonTooltip;
