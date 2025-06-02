import { on } from "events";
import React from "react";

const Loader = ({ onClick }: { onClick?: () => void }) => {
  return (
    <svg
      onClick={() => onClick && onClick?.()}
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ffffff"
    >
      <g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.2"
          />
          <path
            d="M12 22C8.68629 22 6 17.5228 6 12C6 6.47715 8.68629 2 12 2"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Loader;
