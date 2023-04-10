import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonPage = () => {
  return (
    <section>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <h2 className="section-title">
          <Skeleton duration={1} height={30} width={300} />
        </h2>
        <ul className="Main">
          {Array(5)
            .fill()
            .map((item, index) => (
              <li className="note" key={index}>
                <Skeleton height={100} />
                <h4 className="note-title">
                  <Skeleton height={36} width={"80%"} />
                </h4>
                <p className="list-channel">
                  <Skeleton width={"60%"} />
                </p>
              </li>
            ))}
        </ul>
      </SkeletonTheme>
    </section>
  );
};

export default SkeletonPage;
