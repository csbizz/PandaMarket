/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import defImg from "../Image/img_default.png";
import { priceFunc } from "../utils/utils.js";
import { BREAKPOINTS } from "../contexts/ViewportContext.jsx";

const style = {
  card: css`
    display: grid;
    gap: 1.6rem;
    grid-template-rows: 1fr auto;

    img {
      width: 22.1rem;
      aspect-ratio: 1/1;

      border-radius: 16px;

      @media (max-width: ${BREAKPOINTS.TABLET}px) {
        &.best {
          width: 343px;
          border-radius: 19.46px;
        }
      }

      @media (max-width: ${BREAKPOINTS.MOBILE}px) {
        width: 16.8rem;
        border-radius: 12px;
      }
    }
  `,
  info: css`
    height: 8rem;

    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  `,
  title: css`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--gray-800);
  `,
  price: css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--gray-800);
  `,
  favorite: css`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--gray-600);
  `,
};

function ProductCard({ item, type }) {
  const { favoriteCount, price, name, images } = item;
  const imgUrl = images?.length ? images[0] : defImg;
  const priceString = priceFunc(price);

  return (
    <div css={style.card}>
      <img src={imgUrl} alt={name} className={`${type}`} />
      <div css={style.info}>
        <h5 css={style.title}>{name}</h5>
        <p css={style.price}>{priceString}원</p>
        <p css={style.favorite}>❤️ {favoriteCount}</p>
      </div>
    </div>
  );
}

export default ProductCard;
