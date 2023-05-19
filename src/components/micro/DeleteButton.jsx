import "./DeleteButton.css";
import deleteIcon from "../../img/deleteIcon.svg";

const DeleteButton = ({ onClick }) => {
  return (
    <div className="deleteButton" onClick={onClick}>
      <div></div>
      <img src={deleteIcon} alt="Del"/>
    </div>
  );
};

export default DeleteButton;
