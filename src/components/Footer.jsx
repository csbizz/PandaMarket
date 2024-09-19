/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import facebookIcon from "../Image/ic_facebook.png";
import twitterIcon from "../Image/ic_twitter.png";
import youtubeIcon from "../Image/ic_youtube.png";
import instagramIcon from "../Image/ic_instagram.png";
import CONSTANTS from "../constants.js";

const style = {
  footer: css`
    height: 16rem;
    background-color: var(--gray-900);
    padding: 3.2rem 20rem 10.8rem 20rem;
    color: var(--gray-400);

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    @media (max-width: ${CONSTANTS.BREAKPOINTS.TABLET}px) {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    }
  `,
  "footer-link": css`
    display: flex;
    gap: 3rem;
    color: var(--gray-200);
  `,
  "sns-link": css`
    display: flex;
    gap: 1.2rem;

    img {
      width: 20px;
      height: 20px;
    }
  `,
};

function Footer() {
  return (
    <footer css={style.footer}>
      <div>
        <p>©codeit - 2024</p>
      </div>
      <div css={style["footer-link"]}>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div css={style["sns-link"]}>
        <Link to="https://www.facebook.com/">
          <img src={facebookIcon} alt="facebook" />
        </Link>
        <Link to="https://twitter.com/home">
          <img src={twitterIcon} alt="twitter" />
        </Link>
        <Link to="https://www.youtube.com/">
          <img src={youtubeIcon} alt="youtube" />
        </Link>
        <Link to="https://www.instagram.com/">
          <img src={instagramIcon} alt="instagram" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
