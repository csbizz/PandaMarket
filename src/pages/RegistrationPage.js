import style from './css/RegistrationPage.module.css';
import TagButton from '../components/TagButton.js';

function RegistrationPage() {
  return (
    <div id={`${style.registrationPage}`}>
      <form>
        <div id={`${style.title}`}>
          <p>상품 등록하기</p>
          <button id={`${style.registButton}`} className="button" disabled>
            등록
          </button>
        </div>
        <div id={`${style.info}`}>
          <div className={`${style['input-wrap']}`}>
            <label htmlFor="name">상품명</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="상품명을 입력해주세요"
            />
          </div>
          <div className={`${style['input-wrap']}`}>
            <label htmlFor="description">상품 소개</label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="10"
              placeholder="상품 소개를 입력해주세요"
            ></textarea>
          </div>
          <div className={`${style['input-wrap']}`}>
            <label htmlFor="price">판매가격</label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="판매 가격을 입력해주세요"
            />
          </div>
        </div>
      </form>
      <div className={`${style['input-wrap']} ${style['tag-wrap']}`}>
        <label htmlFor="tag">태그</label>
        <input
          id="tag"
          name="tag"
          type="text"
          placeholder="태그를 입력해주세요"
        />
        <TagButton name="티셔츠" />
      </div>
    </div>
  );
}

export default RegistrationPage;
