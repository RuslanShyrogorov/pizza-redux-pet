import { Link } from "react-router-dom";
import cn from "classnames";
import { IoCartOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import BasketItem from "../components/basket/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../redux/basketSlice";
import EmptyBasket from "../components/basket/emptyBasket/EmptyBasket";
import Button from "../components/button/Button";
import s from "./PageBasket.module.scss";

function PageBasket() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const totalQuantity = basketItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  if (!totalQuantity) {
    return <EmptyBasket />;
  }

  return (
    <div className={s.basket}>
      <div className={s.basketContainer}>
        <div className={s.basketTop}>
          <h2 className={s.basketTitle}>
            <IoCartOutline className={s.basketCartIcon} />
            Корзина
          </h2>
          <div
            onClick={() => dispatch(clearBasket())}
            className={s.basketClear}
          >
            <IoTrashOutline className={s.basketClearIcon} />
            <span>Очистить корзину</span>
          </div>
        </div>
        <ul className={s.basketList}>
          {basketItems?.map((item) => (
            <BasketItem key={`${item.id}${item.size}${item.type}`} {...item} />
          ))}
        </ul>
        <div className={s.basketBottom}>
          <div className={s.basketBottomDetails}>
            <p>
              Всего пицц:
              <span className={s.basketBottomDetailsQuantity}>
                {" "}
                {totalQuantity} шт.
              </span>
            </p>
            <p>
              Сумма заказа:
              <span className={s.basketBottomDetailsSum}>
                {" "}
                {totalPrice} грн.
              </span>
            </p>
          </div>
          <div className={s.basketBottomButtons}>
            <Link to="/">
              <Button className={cn(s.button)} variant="outlined">
                <IoIosArrowBack />
                <span>Вернуться назад</span>
              </Button>
            </Link>
            <Button type="submit" className={cn(s.button, s.buttonPay)}>
              <span>Оплатить сейчас</span>
            </Button>
            {/*<div className={cn(s.button, s.buttonPay)}>*/}
            {/*  <span>Оплатить сейчас</span>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBasket;
