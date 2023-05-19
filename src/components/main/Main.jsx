import "./Main.css";
import Buff from "../Buff";
import MainPopup from "./MainPopup";
import AddButton from "../micro/AddButton";
import { useEffect } from "react";

function Main({
  popupIs,
  popupChange,
  changeDoList,
  objectList,
  changeObjectList,
}) {
  useEffect(() => {
    document.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  }, []);
  return (
    <main>
      {objectList &&
        objectList.map((item, index) => (
          <Buff
            object={item}
            changeObject={changeObjectList}
            index={index}
            key={item.name}
          />
        ))}
      <AddButton
        onClick={() =>
          changeObjectList.add({
            positionX: Math.random() * 1000 + 400,
            positionY: Math.random() * 700,
            value: 0,
          })
        }
      />
      <MainPopup
        popupIs={popupIs}
        popupClose={popupChange.close}
        addItem={changeDoList.add}
      />
    </main>
  );
}

export default Main;
