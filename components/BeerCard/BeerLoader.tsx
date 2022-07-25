import React from "react";
import ContentLoader from "react-content-loader";

const BeerLoader = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={300}
    viewBox="0 0 216 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="86" y="143" rx="0" ry="0" width="0" height="33" />
    <rect x="0" y="0" rx="6" ry="6" width="216" height="200" />
    <rect x="-1" y="210" rx="6" ry="6" width="216" height="32" />
    <rect x="3" y="253" rx="6" ry="6" width="221" height="24" />
    <rect x="3" y="288" rx="0" ry="0" width="216" height="39" />
  </ContentLoader>
);

export default BeerLoader;