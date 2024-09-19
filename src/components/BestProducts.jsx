/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../utils/api.js";
import useAsync from "../hooks/useAsync.js";
import { BREAKPOINTS, useViewport } from "../contexts/ViewportContext.jsx";
import ProductCard from "./ProductCard.jsx";
import { SORT_ORDER } from "./SortOrderSelect.jsx";

const style = {
  bestProductsTitle: css`
    margin-bottom: 1.6rem;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--gray-900);
    }

    @media (max-width: ${BREAKPOINTS.TABLET}px) {
      height: 43.4rem;

      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  bestProductsItems: css`
    height: 37.8rem;

    display: grid;
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      height: 48.2rem;

      grid-template-columns: 1fr;
    }
  `,
};

const BEST_ITEM_PAGE_SIZE = Object.freeze({
  PC: 4,
  TABLET: 2,
  MOBILE: 1,
});

function BestProducts() {
  const viewport = useViewport();
  const [items, setItems] = useState([]);
  const getProductsAsync = useAsync(getProducts);

  const handleLoadItem = useCallback(
    async (params) => {
      const data = await getProductsAsync(params);
      if (!data) return;

      setItems(data.list);
    },
    [getProductsAsync]
  );

  useEffect(() => {
    handleLoadItem({
      page: 1,
      pageSize: BEST_ITEM_PAGE_SIZE[viewport],
      orderBy: SORT_ORDER.FAVORITE,
    });
  }, [viewport, handleLoadItem]);

  return (
    <section>
      <div css={style.bestProductsTitle}>
        <h3>베스트 상품</h3>
      </div>
      <div css={style.bestProductsItems}>
        {items.map((item) => {
          return <ProductCard type="best" item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default BestProducts;
