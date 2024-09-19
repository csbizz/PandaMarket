/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../utils/api.js";
import useAsync from "../hooks/useAsync.js";
import ProductCard from "./ProductCard.jsx";
import PaginationBar from "./PaginationBar.jsx";
import ProductOnSaleTitle from "./ProductOnSaleTitle.jsx";
import { useViewport } from "../contexts/ViewportContext.jsx";
import CONSTANTS from "../constants.js";

const style = {
  productOnSaleItems: css`
    height: 67.4rem;

    margin-top: 2.4rem;

    display: grid;
    align-items: center;
    justify-content: center;
    column-gap: 2.4rem;
    row-gap: 4rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      height: 82rem;

      column-gap: 1.6rem;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      height: 67.4rem;

      margin-top: 1.6rem;

      column-gap: 0.8rem;
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  paginationWrapper: css`
    margin: 4.3rem auto 14rem;

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      margin-bottom: 16.5rem;
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      margin-bottom: 13.5rem;
    }
  `,
};

function ProductsOnSale() {
  const viewport = useViewport();
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [now, setNow] = useState(1);
  const [sortOrder, setSortOrder] = useState(CONSTANTS.SORT_ORDER.RECENT);
  const [searchQuery, setSearchQuery] = useState("");
  const getProductsAsync = useAsync(getProducts);

  const handleSearch = (query) => setSearchQuery(query);
  const handleSortOrderChange = (order) => setSortOrder(order);
  const handlePageChange = useCallback((p) => setNow(p), []);

  useEffect(() => {
    async function handleLoadItem() {
      const data = await getProductsAsync({
        page: now,
        pageSize: CONSTANTS.ITEM_PAGE_SIZE[viewport],
        orderBy: sortOrder,
        keyword: searchQuery,
      });
      if (!data) return;

      setItems(data.list);
      setTotalCount(data.totalCount);
      setNow(now);
    }

    handleLoadItem();
  }, [viewport, now, sortOrder, searchQuery, getProductsAsync]);

  return (
    <section
      css={css`
        margin: 0 auto;
      `}
    >
      <ProductOnSaleTitle
        onSearch={handleSearch}
        onSortOrderChange={handleSortOrderChange}
      />
      <div css={style.productOnSaleItems}>
        {items.map((item) => {
          return <ProductCard type="onSale" item={item} key={item.id} />;
        })}
      </div>
      <div css={style.paginationWrapper}>
        <PaginationBar
          totalCount={totalCount}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default ProductsOnSale;
