import style from './css/ProductCard.module.css';
import { priceFunc } from '../utils';

function ProductCard({ item, classNames }) {
  const { favoriteCount, price, name, images } = item;
  const imgUrl = images[0];
  const priceString = priceFunc(price);
  const cn = `${style.card} ` + classNames;

  return (
    <div className={cn}>
      <img src={imgUrl} alt={name} className={`${style['product-img']}`} />
      <div className={`${style['product-info']}`}>
        <h5 className={`${style.title}`}>{name}</h5>
        <p className={`${style.price}`}>{priceString}원</p>
        <p className={`${style.like}`}>❤️ {favoriteCount}</p>
      </div>
    </div>
  );
}

export default ProductCard;
