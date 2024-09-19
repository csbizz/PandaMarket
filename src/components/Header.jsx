/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../Image/logo.png";
import smallLogoImg from "../Image/small_logo.png";
import {
  BREAKPOINTS,
  useViewport,
  VIEWPORT,
} from "../contexts/ViewportContext.jsx";

const style = {
  header: css`
    padding: 0 20rem;
    height: 7rem;
    border-bottom: 1px solid #dfdfdf;

    @media (max-width: ${BREAKPOINTS.TABLET}px) {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    }
  `,
  topNav: css`
    flex: 1;
    margin-left: 3.2rem;
    display: flex;
    gap: 3.2rem;
    color: var(--gray-600);
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.148rem;
    text-align: center;

    @media (max-width: ${BREAKPOINTS.MOBILE}px) {
      margin-left: 1.6rem;
      gap: 0.8rem;
      font-size: 1.6rem;
      line-height: 1.909rem;
    }
  `,
  loginButton: css`
    font-weight: 600;
    border-radius: 8px;
    padding: 1.1rem 2.3rem;
    line-height: 2.6rem;
  `,
};

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692ff" : "inherit",
  };
}

function Header() {
  const viewport = useViewport();
  return (
    <header css={style.header}>
      <Link to="/">
        <img
          css={css`
            width: 153px;
          `}
          src={viewport === VIEWPORT.MOBILE ? smallLogoImg : logoImg}
          alt="판다마켓 로고"
        />
      </Link>
      <nav css={style.topNav}>
        <NavLink to="/free" style={getLinkStyle}>
          자유게시판
        </NavLink>
        <NavLink to="/items" style={getLinkStyle}>
          중고마켓
        </NavLink>
      </nav>
      <Link to="/sign/login/" css={style.loginButton} className="button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
