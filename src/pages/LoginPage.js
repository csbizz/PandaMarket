//     <link rel="stylesheet" href="../../src/css/signpage.css" />
//     <link rel="stylesheet" href="../../src/css/login.css" />
//     <script type="module" src="../src/js/login.js"></script>

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
              <img
                id="showPassword"
                src="../src/Image/btn_visibility_off_24px.png"
                alt="비밀번호 표시"
              />
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
          <a href="https://www.google.com/">
            <img src="../src/Image/GoogleBtn.png" alt="구글 버튼" />
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <img src="../src/Image/KakaoTalkBtn.png" alt="카카오톡 버튼" />
          </a>
        </div>
      </section>
      <div>
        <p>
          판다마켓이 처음이신가요? <a href="../signup/">회원가입</a>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
