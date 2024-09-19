/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BestProducts from "../components/BestProducts.jsx";
import ProductsOnSale from "../components/ProductsOnSale.jsx";
import { BREAKPOINTS } from "../contexts/ViewportContext.jsx";

const style = {
  itemsPage: css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;

    @media (max-width: ${BREAKPOINTS.TABLET}px) {
      padding: 0 2.4rem;
    }

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      padding: 0 1.6rem;
    }
  `,
  bestProductWrapper: css`
    margin: 2.4rem auto 4rem auto;

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      max-width: 36rem;
    }
  `,
};

function ItemsPage() {
  return (
    <main css={style.itemsPage}>
      <div css={style.bestProductWrapper}>{/* <BestProducts /> */}</div>
      <ProductsOnSale />
    </main>
  );
}

export default ItemsPage;
