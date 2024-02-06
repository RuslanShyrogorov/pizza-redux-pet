import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Header.module.scss";
import Button from "../button/Button";

function Header() {
  console.log("Render Header");
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const basketItems = useSelector((state) => state.basket.items);
  const totalQuantity = basketItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Link to="/" className={s.headerLogo}>
          <img
            className={s.headerImg}
            src="../assets/logo.svg"
            alt="pizza logo"
            width="38"
            height="38"
          />
          <div>
            <h1 className={s.headerTitle}>REACT PIZZA</h1>
            <p className={s.headerText}>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <Link to="/basket">
          <Button variant="outlined">
            <span>{totalPrice}</span>
            грн.
            <div className={s.divider}></div>
            <img src="../assets/cart.svg" alt="cart" width="16" height="16" />
            <span>{totalQuantity}</span>
          </Button>
          {/*<button className={s.button} type="button">*/}
          {/*  <span>{totalPrice}</span>*/}
          {/*  грн.*/}
          {/*  <div className={s.buttonDivider}></div>*/}
          {/*  <img src="../assets/cart.svg" alt="cart" width="16" height="16" />*/}
          {/*  <span>{totalQuantity}</span>*/}
          {/*</button>*/}
        </Link>
      </div>
    </header>
  );
}

export default Header;
