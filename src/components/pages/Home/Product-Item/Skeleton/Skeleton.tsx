import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      className="sushi-block"
      speed={2}
      width={290}
      height={460}
      viewBox="0 0 290 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="16" y="25" rx="19" ry="19" width="260" height="260" />
      <rect x="42" y="290" rx="19" ry="19" width="208" height="30" />
      <rect x="7" y="325" rx="14" ry="14" width="280" height="90" />
      <rect x="10" y="426" rx="5" ry="5" width="65" height="30" />
      <rect x="134" y="419" rx="5" ry="5" width="155" height="45" />
    </ContentLoader>
  );
};

export default Skeleton;
