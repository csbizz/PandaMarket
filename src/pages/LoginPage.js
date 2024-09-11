//     <link rel="stylesheet" href="../../src/css/signpage.css" />
//     <link rel="stylesheet" href="../../src/css/login.css" />
//     <script type="module" src="../src/js/login.js"></script>

import { Link } from 'react-router-dom';
import eyeOn from '../Image/btn_visibility_on_24px.png';
import eyeOff from '../Image/btn_visibility_off_24px.png';
import googleBtn from '../Image/GoogleBtn.png';
import kakaoTalkBtn from '../Image/KakaoTalkBtn.png';

function LoginPage() {
  return (
    <main>
      <form id="loginField">
        <div className="label-wrap">
          <label className="input__id">
            이메일
            <br />
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              className="js-input__id"
            />
            <p className="error-msg js-error-msg"></p>
          </label>
        </div>
        <div className="label-wrap">
          <label className="input__pw">
            비밀번호
            <br />
            <div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="js-input__pw"
              />
              <img id="showPassword" src={eyeOff} alt="비밀번호 표시" />
            </div>
            <p className="error-msg js-error-msg"></p>
          </label>
        </div>
        <button id="loginButton" type="button" disabled>
          로그인
        </button>
      </form>
      <section className="sns-login">
        <span>간편 로그인하기</span>
        <div>
          <Link to="https://www.google.com/">
            <img src={googleBtn} alt="구글 버튼" />
          </Link>
          <Link to="https://www.kakaocorp.com/page/">
            <img src={kakaoTalkBtn} alt="카카오톡 버튼" />
          </Link>
        </div>
      </section>
      <section className="footer-link">
        <p>
          판다마켓이 처음이신가요? <Link to="/sign/signup">회원가입</Link>
        </p>
      </section>
      {/* <div class="modal off">
        <div class="modal-content">
          <p>비밀번호가 일치하지 않습니다.</p>
          <div class="button">확인</div>
        </div>
      </div> */}
    </main>
  );
}

export default LoginPage;
