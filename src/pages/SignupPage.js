//     <link rel="stylesheet" href="../src/css/signpage.css" />
//     <link rel="stylesheet" href="../src/css/signup.css" />
// <script type="module" src="../src/js/signup.js"></script>
import { Link } from 'react-router-dom';
import eyeOn from '../Image/btn_visibility_on_24px.png';
import eyeOff from '../Image/btn_visibility_off_24px.png';
import googleBtn from '../Image/GoogleBtn.png';
import kakaoTalkBtn from '../Image/KakaoTalkBtn.png';

function SignupPage() {
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
          <label className="input__nickname">
            닉네임
            <br />
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="js-input__nickname"
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
              <img src={eyeOff} alt="비밀번호 표시" />
            </div>
            <p className="error-msg js-error-msg"></p>
          </label>
        </div>
        <div className="label-wrap">
          <label className="input__checkpw">
            비밀번호 확인
            <br />
            <div>
              <input
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                className="js-input__checkpw"
              />
              <img src={eyeOff} alt="비밀번호 표시" />
            </div>
            <p className="error-msg js-error-msg"></p>
          </label>
        </div>
        <button id="signupButton" type="button" disabled>
          회원가입
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
          이미 회원이신가요? <Link to="/sign/login">로그인</Link>
        </p>
      </section>
      {/* <div className="modal off">
        <div className="modal-content">
          <p>사용 중인 이메일입니다.</p>
          <div className="button">확인</div>
        </div>
      </div> */}
    </main>
  );
}

export default SignupPage;
