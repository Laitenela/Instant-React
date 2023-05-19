import './AddButton.css';
import addIcon from '../../img/addIcon.svg';

const AddButton = ({ onClick }) => {
    return (
        <div className="addButton" onClick={onClick}>
            <div>
            </div>
            <img src={addIcon} />
        </div>
    )
}

export default AddButton;