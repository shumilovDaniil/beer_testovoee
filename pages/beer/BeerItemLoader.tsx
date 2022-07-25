import React from "react";
import ContentLoader from "react-content-loader";

const BeerItemLoader = () => (
  <ContentLoader
    speed={2}
    width={1270}
    height={720}
    viewBox="0 0 1270 720"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="86" y="143" rx="0" ry="0" width="0" height="33" />
    <rect x="1" y="32" rx="0" ry="0" width="187" height="394" />
    <rect x="250" y="30" rx="0" ry="0" width="292" height="33" />
    <rect x="250" y="70" rx="0" ry="0" width="97" height="25" />
    <rect x="250" y="103" rx="0" ry="0" width="290" height="90" />
    <rect x="250" y="203" rx="0" ry="0" width="246" height="115" />
  </ContentLoader>
);

export default BeerItemLoader;