/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { getProducts } from "../utils/api.js";
import useAsync from "../hooks/useAsync.js";
import { useViewport } from "../contexts/ViewportContext.jsx";
import ProductCard from "./ProductCard.jsx";
import CONSTANTS from "../constants.js";

const style = {
  bestProductsTitle: css`
    margin-bottom: 1.6rem;

    h3 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--gray-900);
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
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

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      height: 48.2rem;

      grid-template-columns: 1fr;
    }
  `,
};

function BestProducts() {
  const viewport = useViewport();
  const [items, setItems] = useState([]);
  const getProductsAsync = useAsync(getProducts);

  useEffect(() => {
    async function handleLoadItem() {
      const data = await getProductsAsync({
        page: 1,
        pageSize: CONSTANTS.BEST_ITEM_PAGE_SIZE[viewport],
        orderBy: CONSTANTS.SORT_ORDER.FAVORITE,
      });
      if (!data) return;

      setItems(data.list);
    }

    handleLoadItem();
  }, [viewport, getProductsAsync]);

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
