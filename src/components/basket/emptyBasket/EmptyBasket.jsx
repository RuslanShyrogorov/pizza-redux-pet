import { Link } from "react-router-dom";
import s from "./EmptyBasket.module.scss";
import Button from "../../button/Button";

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
        width="600"
        height="510"
      />
      <Link to="/">
        <Button variant="containedBlack" className={s.emptyBasketBtn}>
          <span>Вернуться назад</span>
        </Button>
      </Link>
    </div>
  );
}

export default EmptyBasket;
