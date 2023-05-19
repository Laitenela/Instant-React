import "./SideItem.css";
import deleteIcon from "../img/deleteIcon.svg";

const SideItem = ({ item, onClick, deleteItem, index, activeElement }) => {
  console.log(index, activeElement);
  return (
    <li>
      <input
        type="radio"
        name="sideItem"
        id={item.name}
        enabled
        onChange={onClick}
        checked={activeElement === index}
      />
      <label className="rectangle" for={item.name}>
        <p>{item.name}</p>
        <img src={deleteIcon} onClick={() => deleteItem(index)} alt="Del" />
      </label>
    </li>
  );
};

export default SideItem;
