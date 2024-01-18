import { Link } from "react-router-dom";
import s from "./EmptyBasket.module.scss";

function EmptyBasket() {
  return (
    <div className={s.emptyBasket}>
      <h1 className={s.emptyBasketTitle}>Корзина пустая</h1>
      <p className={s.emptyBasketText}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        className={s.emptyBasketImg}
        src="/assets/empty-basket.png"
        alt="Person go shopping"
        width="300"
        height="255"
      />
      <Link className={s.emptyBasketBtn} to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default EmptyBasket;
