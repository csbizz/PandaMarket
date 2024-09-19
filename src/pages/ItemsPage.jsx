/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BestProducts from "../components/BestProducts.jsx";
import ProductsOnSale from "../components/ProductsOnSale.jsx";
import { useIsLoading } from "../contexts/PendingContext.jsx";
import { useError } from "../contexts/ErrorContext.jsx";
import Modal from "../components/Modal.jsx";
import CONSTANTS from "../constants.js";

const style = {
  itemsPage: css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      padding: 0 2.4rem;
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      padding: 0 1.6rem;
    }
  `,
  bestProductWrapper: css`
    margin: 2.4rem auto 4rem auto;

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      max-width: 36rem;
    }
  `,
};

function ItemsPage() {
  const isLoading = useIsLoading();
  const err = useError();

  return (
    <>
      <main css={style.itemsPage}>
        <div css={style.bestProductWrapper}>{/* <BestProducts /> */}</div>
        <ProductsOnSale />
      </main>
      {isLoading && <Modal message="로딩 중입니다." noButton />}
      {err && <Modal message={err.message} />}
    </>
  );
}

export default ItemsPage;
