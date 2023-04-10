import { useEffect, useState } from "react";
import "./SystemFeedbacl.css";

function ConfirmToast({ message, handleDialog, folder }) {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      handleDialog("", "", false);
    }, 2000);
  });
  return (
    <div
      className={`toast ${isShown ? "toast-shown" : "toast-hidden"}`}
      //   onTransitionEnd={useEffect(() => {
      //     handleDialog("", "", false);
      //   }, [handleDialog])}
    >
      <h3>{message + folder + "."}</h3>
    </div>
  );
}

export default ConfirmToast;
