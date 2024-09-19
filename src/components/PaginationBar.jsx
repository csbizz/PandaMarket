/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useViewport } from "../contexts/ViewportContext.jsx";
import { ITEM_PAGE_SIZE } from "./ProductsOnSale.jsx";
import usePagination from "../hooks/usePagination.js";
import CONSTANTS from "../constants.js";

const style = {
  paginationBar: css`
    height: 4rem;

    .pagination.productOnSale {
      margin: 0 auto;
      width: 30.4rem;
      height: 100%;

      display: flex;
      gap: 0.4rem;

      button {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        text-align: center;

        font-weight: 600;
        font-size: 1.6rem;
        color: var(--gray-500);

        border: 1px solid var(--gray-200);

        &:disabled {
          background-color: var(--gray-200);
        }

        &.now {
          background-color: var(--Primary-100);
          color: var(--gray-50);
          border: none;
        }
      }
    }
  `,
};

function PaginationBar({ totalCount, onPageChange }) {
  const viewport = useViewport();
  const [
    currentPage,
    bundle,
    bundleCount,
    totalBundleCounts,
    goToPage,
    nextBundle,
    prevBundle,
  ] = usePagination(
    totalCount,
    ITEM_PAGE_SIZE[viewport],
    CONSTANTS.BUNDLE_SIZE,
    onPageChange
  );

  return (
    <div css={style.paginationBar}>
      <div className={"pagination productOnSale"}>
        <button onClick={prevBundle} disabled={bundleCount <= 1}>
          &lt;
        </button>
        {bundle.map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={p === currentPage ? "now" : ""}
          >
            {p}
          </button>
        ))}
        <button
          onClick={nextBundle}
          disabled={bundleCount >= totalBundleCounts}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PaginationBar;
