import React from "react";

const MoneyLoadingSpinner = () => {
  return (
    <div className="money-loader">
      <svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        fill="none"
        stroke= "#0741e1"
        strokeWidth="6"
        xmlns="http://www.w3.org/2000/svg"
      >

        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ffffff"
          strokeWidth="6"
          strokeDasharray="382"
          strokeDashoffset="382"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="282; 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

    
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#0741e1"
          strokeWidth="4"
          strokeDasharray="320"
          strokeDashoffset="320"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="420; 0"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>

     
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize="60"
          fill="#00A86B"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          $
        </text>

   
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1.5s"
          repeatCount="indefinite"
          
        />
      </svg>
    </div>
  );
};

export default MoneyLoadingSpinner;
