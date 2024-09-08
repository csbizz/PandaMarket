//     <link rel="stylesheet" href="../src/css/signpage.css" />
//     <link rel="stylesheet" href="../src/css/signup.css" />
// <script type="module" src="../src/js/signup.js"></script>

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
              <img
                src="../src/Image/btn_visibility_off_24px.png"
                alt="비밀번호 표시"
              />
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
              <img
                src="../src/Image/btn_visibility_off_24px.png"
                alt="비밀번호 표시"
              />
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
          이미 회원이신가요? <a href="../login/">로그인</a>
        </p>
      </div>
      <div className="modal off">
        <div className="modal-content">
          <p>사용 중인 이메일입니다.</p>
          <div className="button">확인</div>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
