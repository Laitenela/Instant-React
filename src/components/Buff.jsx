import "./Buff.css";
import EllipseContainer from "./micro/EllipseContainer";
import AddButton from "./micro/AddButton";
import DeleteButton from "./micro/DeleteButton";

// Определяет элементы-счётчики в основном поле
const Buff = ({ object, changeObject, index }) => {
  // Переменные требуемые для перемещения объектов, присваивается положение мыши при старте
  let elemX = 0;
  let elemY = 0;

  // Используется при создании нового элемента, может использоваться для изменения имеющегося
  const changeName = () =>
    changeObject.changeName(index, document.getElementById(object.name).value);

  // Используется для ведения счёта по занятию
  const changeValue = () =>
    changeObject.setValueOfIndex(index, object.value + 1);

  // Используется для удаления счётной задачи
  const deleteObject = () =>
    setTimeout(() => changeObject.deleteFromList(index), 100);

  // Используется для изменения положения объекта при зажатой мышке
  const dragElem = (event) => {
    changeObject.position(
      index,
      object.positionX + event.clientX - elemX,
      object.positionY + event.clientY - elemY
    );
  };

  // Используется вместе с dragElem для перемещения объекта
  const dragElemStart = (event) => {
    // Убираем значок запрета для move в поле
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.dropEffect = "none";
    event.dataTransfer.effectAllowed = "move";

    // Используется для правильного расчёта положения нового элемента
    elemX = event.clientX;
    elemY = event.clientY;
  };

  return (
    <div
      className="buff"
      style={{ left: object.positionX, top: object.positionY }}
      draggable="true"
      onDragStart={(event) => dragElemStart(event)}
      onDragEnd={(event) => dragElem(event)}
    >
      {object.name.slice(0, 3) !== "new" || (
        <>
          <input type="text" id={object.name}></input>
          <AddButton onClick={changeName} />
        </>
      )}
      {object.name.slice(0, 3) !== "new" && (
        <>
          <p>{object.name}</p>
          <AddButton onClick={changeValue} />
        </>
      )}
      <EllipseContainer text={object.value} />
      <DeleteButton onClick={deleteObject} />
    </div>
  );
};

export default Buff;
