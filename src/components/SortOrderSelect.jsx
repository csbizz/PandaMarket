/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  BREAKPOINTS,
  useViewport,
  VIEWPORT,
} from "../contexts/ViewportContext.jsx";
import sortIcon from "../Image/ic_sort.svg";
import arrowDown from "../Image/ic_arrow_down.svg";

const style = {
  "sort-order": css`
    height: 100%;
    width: 13rem;
    border-radius: 12px;
    border: 1px solid var(--gray-200);
    padding: 1.2rem 2rem;
    background-color: white;

    color: var(--gray-800);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      width: 4.2rem;

      justify-content: center;
    }
  `,

  "sort-order-list": css`
    position: absolute;
    display: grid;
    grid-template-rows: repeat(2, 4.2rem);
    grid-gap: 0;
    margin-top: 0.8rem;
    width: 13rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--gray-200);
      border-bottom: 0;
      border-radius: 1.2rem 1.2rem 0 0;
      background-color: #ffffff;
      color: var(--gray-800);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;

      &:last-child {
        border-bottom: 1px solid var(--gray-200);
        border-radius: 0 0 1.2rem 1.2rem;
      }

      &:hover {
        background-color: var(--Primary-100);
        color: var(--gray-50);
        border: none;
      }
    }

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      transform: translateX(-8.8rem);
    }
  `,
};

export const SORT_ORDER = Object.freeze({
  RECENT: "recent",
  // FAVORITE: 'favorite'
});

const SORT_ORDER_MSG = Object.freeze({
  [SORT_ORDER.RECENT]: "최신순",
  // [SORT_ORDER.FAVORITE]: '좋아요순'
});

function SortOrderSelect({ initialSortOrder = SORT_ORDER.RECENT, onChange }) {
  const viewport = useViewport();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  const handleOrderChange = (o) => {
    setSortOrder(o);
    onChange(o);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <div css={style["sort-order"]} onClick={toggleDropdown}>
        {viewport !== VIEWPORT.MOBILE && SORT_ORDER_MSG[sortOrder]}
        <img
          src={viewport !== VIEWPORT.MOBILE ? arrowDown : sortIcon}
          alt="sortOrderImg"
        />
      </div>
      {dropdownOpen && (
        <ul css={style["sort-order-list"]}>
          {Object.values(SORT_ORDER).map((o) => {
            return (
              <li onClick={() => handleOrderChange(o)} key={o}>
                {SORT_ORDER_MSG[o]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SortOrderSelect;
