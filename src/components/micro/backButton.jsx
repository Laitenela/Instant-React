import './backButton.css';
import backIcon from '../../img/backIcon.svg';

const BackButton = ({ onClick }) => {
    return (
        <div className="backButton" onClick={onClick}>
            <div>
            </div>
            <img src={backIcon} />
        </div>
    )
}

export default BackButton;