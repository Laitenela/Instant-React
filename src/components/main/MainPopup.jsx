import "./MainPopup.css";
import AddButton from "../micro/AddButton";
import BackButton from "../micro/backButton";

const MainPopup = ({ popupIs, popupClose, addItem }) => {
  return (
    <div id="mainPopup" className={popupIs}>
      <h1>Create Instant</h1>
      <input type="text" id="name" name="name" maxLength="7"></input>
      <textarea id="description"></textarea>
      <AddButton onClick={addItem} />
      <BackButton onClick={popupClose} />
    </div>
  );
};

export default MainPopup;
