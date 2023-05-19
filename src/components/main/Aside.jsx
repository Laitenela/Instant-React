import { useState } from "react";
import "./Aside.css";
import EllipseContainer from "../micro/EllipseContainer";
import SideItem from "../SideItem";
import AddButton from "../micro/AddButton";
import Timer from "../micro/Timer";

function Aside({
  itemList,
  popupOpen,
  deleteItem,
  changeActive,
  activeElement,
}) {
  const [startDate, setStartDate] = useState(new Date().getTime());
  const updateStatus = (index, second) => {
    if (!second || (second && index === activeElement)) {
      let date = new Date();
      changeActive(index);
      setStartDate(date.getTime());
    }
  };

  return (
    <aside>
      <EllipseContainer text="Instant" />
      <ol className="itemList">
        {itemList.map((item, index) => (
          <SideItem
            item={item}
            onClick={() => updateStatus(index)}
            deleteItem={(index) => (
              updateStatus(index, "del"), deleteItem(index)
            )}
            index={index}
            activeElement={activeElement}
            key={item.name}
          />
        ))}
      </ol>
      <Timer startDate={startDate} />
      <AddButton onClick={popupOpen} />
    </aside>
  );
}

export default Aside;
