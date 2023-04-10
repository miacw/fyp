import "./SystemFeedbacl.css";

function ConfirmModal({ message, onDialog }) {
  return (
    <div className="modal">
      <div className="text">
        <h3>{message}</h3>
        <div className="modalButtons">
          <button onClick={() => onDialog(false)} className="cancelBtn">
            Cancel
          </button>
          <button onClick={() => onDialog(true)} className="confirmBtn">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
