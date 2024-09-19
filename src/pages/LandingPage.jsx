/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import topImage from "../Image/Img_home_top.png";
import hotItem from "../Image/Img_home_01.png";
import search from "../Image/Img_home_02.png";
import register from "../Image/Img_home_03.png";
import bottomImage from "../Image/Img_home_bottom.png";
import { useViewport } from "../contexts/ViewportContext.jsx";
import CONSTANTS from "../constants.js";

const style = {
  h1: css`
    font-size: 4rem;
    line-height: 5.6rem;
    font-weight: 700;
  `,
  banner: css`
    background-color: #cfe5ff;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 80% bottom;
    background-size: 55%;
    height: 54rem;

    &#topBanner {
      background-image: url(${topImage});
    }

    &#bottomBanner {
      background-image: url(${bottomImage});
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      height: 77.1rem;
      background-position: bottom;
      background-size: 120%;
      position: relative;
      align-items: baseline;
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      height: 54rem;
    }
  `,
  mBody: css`
    max-width: 120rem;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      &.banner {
        text-align: center;
        position: relative;
        top: 18%;
      }
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      &.banner {
        top: 8%;
      }
    }
  `,
  longButton: css`
    font-size: 2rem;
    font-weight: 700;
    border-radius: 100rem;
    padding: 1.6rem 12.4rem;
    margin-top: 3.2rem;
  `,
  card: css`
    padding: 13.8rem 0;
    display: flex;
    align-items: center;
    gap: 5%;

    &.reverse {
      flex-direction: row-reverse;
      text-align: right;
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      padding: 4rem 2.4rem;
      flex-direction: column;

      &.reverse {
        flex-direction: column;
      }

      img {
        width: 696px;
      }
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.MOBILE}px) {
      padding: 3.2rem 1.6rem;

      img {
        width: 100%;
      }
    }
  `,
  cardText: css`
    flex: 1;

    h2 {
      color: var(--Primary-100);
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 3.2rem;
      margin-top: 2.4rem;
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      text-align: left;
      width: 696px;
      margin-top: 1.6rem;

      .reverse & {
        text-align: right;
      }
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      width: 100%;
      margin-top: 0.8rem;
    }
  `,
};

function LandingPage() {
  const viewport = useViewport();

  return (
    <main>
      <section css={style.banner} id={"topBanner"}>
        <div css={style.mBody} className={"banner"}>
          <h1 css={style.h1}>
            일상의 모든 물건을{" "}
            {viewport !== CONSTANTS.VIEWPORT.TABLET && <br />}
            거래해 보세요
          </h1>
          <Link css={style.longButton} className={"button"} to="../items/">
            구경하러 가기
          </Link>
        </div>
      </section>
      <section css={style.mBody}>
        <div css={style.card}>
          <img src={hotItem} alt="Hot Item" />
          <div css={style.cardText}>
            <h2>Hot item</h2>
            <h1 css={style.h1}>
              인기 상품을
              <br />
              확인해 보세요
            </h1>
            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div css={style.card} className={"reverse"}>
          <img src={search} alt="Search" />
          <div css={style.cardText}>
            <h2>Search</h2>
            <h1 css={style.h1}>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
        <div css={style.card}>
          <img src={register} alt="Register" />
          <div css={style.cardText}>
            <h2>Register</h2>
            <h1 css={style.h1}>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <section css={style.banner} id={"bottomBanner"}>
        <div css={style.mBody} className={"banner"}>
          <h1 css={style.h1}>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
