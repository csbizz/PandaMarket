import style from './css/TagButton.module.css';
import xIcon from '../Image/ic_X.png';

function TagButton({ name }) {
  return (
    <button className={`${style['tag-button']}`}>
      {`#${name}`}
      <img src={xIcon} alt="X" />
    </button>
  );
}

export default TagButton;
