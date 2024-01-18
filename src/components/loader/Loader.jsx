import React from "react";
import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.scss";

function Loader() {
  return (
    <div className={s.loaderContainer}>
      <RotatingLines
        strokeColor="#EB5A1E"
        strokeWidth="5"
        animationDuration="2.0"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
