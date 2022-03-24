import * as React from 'react';
import './FirstBlob.css';
const SvgBlob = (props) => (
  <svg
    className="FirstBlob"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="blob_svg__a" x1={0} x2={1} y1={1} y2={0}>
        <stop stopColor="rgba(255, 107, 107, 1)" offset="0%" />
        <stop stopColor="rgba(255, 107, 107, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#blob_svg__a)"
      d="M18.9 11.4c-6.5 10.7-32.2 10.9-38.5.3C-26 1.1-13-20.3-.1-20.4c12.8 0 25.5 21.2 19 31.8Z"
      transform="translate(60 100)"
      style={{
        transition: 'all .3s ease 0s',
      }}
    />
  </svg>
);

export default SvgBlob;
