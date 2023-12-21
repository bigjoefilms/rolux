import * as React from 'react';

const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: 'auto',

      display: 'block',
      shapeRendering: 'auto',
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={35}
      fill="none"
      stroke="#7b61ff"
      strokeDasharray="164.93361431346415 56.97787143782138"
      strokeWidth={10}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);
export default SvgComponent;
