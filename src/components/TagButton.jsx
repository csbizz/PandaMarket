/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import xIcon from "../Image/ic_X.png";

const style = {
  "tag-button": css`
    background-color: var(--gray-100);
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0.6rem 1.2rem 0.6rem 1.6rem;
    border-radius: 26px;

    height: 3.6rem;

    img {
      margin-left: 0.8rem;
    }
  `,
};

function TagButton({ name, onClick }) {
  const handleClick = () => onClick(name);

  return (
    <button css={style["tag-button"]} type="button" onClick={handleClick}>
      {`#${name}`}
      <img src={xIcon} alt="X" />
    </button>
  );
}

export default TagButton;
