import * as React from 'react';
import './SecondBlob.css';

const SvgSecondBlob = (props) => (
  <svg
    className="SecondBlob"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="secondBlob_svg__a" x1={0} x2={1} y1={1} y2={0}>
        <stop stopColor="rgba(78, 205, 196, 1)" offset="0%" />
        <stop stopColor="rgba(78, 205, 196, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#secondBlob_svg__a)"
      d="M20.4 11.8C15.1 21-8.4 19.7-14.8 9.9-21.3 0-10.6-18.4 1.1-17.8c11.8.7 24.6 20.4 19.3 29.6Z"
      transform="translate(90 90)"
      style={{
        transition: 'all .3s ease 0s',
      }}
    />
  </svg>
);

export default SvgSecondBlob;
