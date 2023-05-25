import { useState } from "react";
import "./App.css";
import Aside from "./components/main/Aside.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  //Тестовые данные
  const [itemList, setItemList] = useState([
    {
      name: "Work",
      objectList: [
        {
          name: "Сделано проверок",
          positionX: 451,
          positionY: 39,
          value: 0,
        },
      ],
    },
    {
      name: "Study",
      objectList: [
        {
          name: "Прочтено страниц",
          positionX: 700,
          positionY: 200,
          value: 0,
        },
      ],
    },
    {
      name: "Rest",
      objectList: [
        {
          name: "Посплено",
          positionX: 751,
          positionY: 559,
          value: 15,
        },
        {
          name: "Выкурено сигарет",
          positionX: 751,
          positionY: 39,
          value: 0,
        },
      ],
    },
  ]);

  //Всплывающий попуп используется как окно для создания новых элементов 
  //Используется для правильного отображения попуп на экране
  const [popupIs, setPopupIs] = useState("closed");
  // Изменение состояния попуп, когда пользователь открывает или закрывает его
  const popupChange = {
    close() {
      setPopupIs("closed");
    },
    open() {
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      setPopupIs("open");
    },
  };

  //Используется для обозначения активного элемента с таймером
  const [activeElementIndex, setActiveElementIndex] = useState(1);
  //Набор функций для изменения состояния основных элементов с таймером
  const changeDoList = {
    //Добавление нового элемента, когда пользователю их требуется больше
    add() {
      setItemList(
        itemList.concat({
          name: document.getElementById("name").value,
          objectList: [],
        })
      );
      popupChange.close();
    },
    //Удаление ненужного элемента, который пользователь использовать для счёта не будет
    delete(index) {
      if (
        index < activeElementIndex ||
        (activeElementIndex === itemList.length - 1 && itemList.length > 1)
      ) {
        setActiveElementIndex(activeElementIndex - 1);
      }
      setItemList(
        itemList
          .slice(0, index)
          .concat(itemList.slice(index + 1, itemList.length))
      );
    },
  };

  //Набор функций для взаимодействия со счётными элементами в листе основных элементов с таймером
  const changeObjectList = {
    // Используется для изменения данных об активном элементе, когда пользователь выбирает новое занятие
    changeActiveElement(index) {
      setActiveElementIndex(index);
    },

    // Изменение имени элемента с таймером, используется только при создании нового
    changeName(index, name) {
      const newItem = itemList[activeElementIndex];
      newItem.objectList[index].name = name;
      setItemList(
        itemList
          .slice(0, activeElementIndex)
          .concat(
            newItem,
            itemList.slice(activeElementIndex + 1, itemList.length)
          )
      );
    },

    // Используется для перетаскивания элементов пользователем
    position(index, positionX, positionY) {
      const newElement = {
        name: itemList[activeElementIndex].name,
        status: itemList[activeElementIndex].status,
        objectList: itemList[activeElementIndex].objectList
          .slice(0, index)
          .concat(
            {
              name: itemList[activeElementIndex].objectList[index].name,
              positionX: positionX,
              positionY: positionY,
              value: itemList[activeElementIndex].objectList[index].value,
            },
            itemList[activeElementIndex].objectList.slice(
              index + 1,
              itemList[activeElementIndex].objectList.length
            )
          ),
      };
      setItemList(
        itemList
          .slice(0, activeElementIndex)
          .concat(
            newElement,
            itemList.slice(activeElementIndex + 1, itemList.length)
          )
      );
    },

    // Добавление нового счётного элемента в лист активного элемента с таймером
    add(object) {
      object.name = "new" + itemList[activeElementIndex].objectList.length;
      const newItem = itemList[activeElementIndex];
      newItem.objectList =
        itemList[activeElementIndex].objectList.concat(object);
      setItemList(
        itemList
          .slice(0, activeElementIndex)
          .concat(
            newItem,
            itemList.slice(activeElementIndex + 1, itemList.length)
          )
      );
    },

    // Изменение состояния счётного элемента в листе активного элемента с таймером
    setValueOfIndex(index, value) {
      const newObject = {
        name: itemList[activeElementIndex].objectList[index].name,
        positionX: itemList[activeElementIndex].objectList[index].positionX,
        positionY: itemList[activeElementIndex].objectList[index].positionY,
        value: value,
      };
      const newElement = {
        name: itemList[activeElementIndex].name,
        status: itemList[activeElementIndex].status,
        objectList: itemList[activeElementIndex].objectList
          .slice(0, index)
          .concat(
            newObject,
            itemList[activeElementIndex].objectList.slice(
              index + 1,
              itemList[activeElementIndex].objectList.length
            )
          ),
      };
      setItemList(
        itemList
          .slice(0, activeElementIndex)
          .concat(
            newElement,
            itemList.slice(activeElementIndex + 1, itemList.length)
          )
      );
    },

    // Используется для удаления счётного элемента из листа активного элемента с таймером
    deleteFromList(index) {
      const newElement = {
        name: itemList[activeElementIndex].name,
        objectList: itemList[activeElementIndex].objectList
          .slice(0, index)
          .concat(
            itemList[activeElementIndex].objectList.slice(
              index + 1,
              itemList[activeElementIndex].objectList.length
            )
          ),
      };
      setItemList(
        itemList
          .slice(0, activeElementIndex)
          .concat(
            newElement,
            itemList.slice(activeElementIndex + 1, itemList.length)
          )
      );
    },
  };

  return (
    <div className="App">
      <Main
        popupIs={popupIs}
        popupChange={popupChange}
        changeDoList={changeDoList}
        changeObjectList={changeObjectList}
        objectList={
          itemList.length !== 0 && itemList[activeElementIndex].objectList
        }
      />
      <Aside
        activeElement={activeElementIndex}
        itemList={itemList}
        popupOpen={popupChange.open}
        deleteItem={changeDoList.delete}
        changeActive={changeObjectList.changeActiveElement}
      />
    </div>
  );
}

export default App;