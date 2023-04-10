import React, { useState, useEffect } from "react";
import "./SystemFeedbacl.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
