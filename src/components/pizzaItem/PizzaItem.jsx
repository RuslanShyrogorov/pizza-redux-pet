import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import cn from "classnames";
import s from "./PizzaItem.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import { addItem } from "../../redux/basketSlice";

const typePizza = ["тонкое", "традиционное"];

function PizzaItem({ id, title, imageUrl, price, sizes, types }) {
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.pizza.loading);
  const pizzas = useSelector((state) => state.basket.items);
  const currentPizza = pizzas.find((item) => item.id === id);
  const itemBasketQuantity = currentPizza ? currentPizza.quantity : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      type: typePizza[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
    setActiveBtn(true);
  };
  if (isLoading) return <Loader />;
  return (
    <article className={s.itemPizza}>
      <Link to="#" className={s.itemPizzaContainer}>
        <img
          className={s.itemPizzaImg}
          src={imageUrl}
          alt="pizza"
          width="260"
          height="260"
        />
        <h2 className={s.itemPizzaTitle}>{title}</h2>
      </Link>

      <div className={s.itemPizzaSelect}>
        <ul className={s.itemPizzaTypeList}>
          {types.map((item, index) => (
            <li
              key={index}
              className={cn(s.itemPizzaTypeListItem, {
                [s.itemPizzaTypeListItemActive]: activeType === index,
              })}
              onClick={() => setActiveType(index)}
            >
              {typePizza[item]}
            </li>
          ))}
        </ul>

        <ul className={s.itemPizzaSizeList}>
          {sizes.map((item, index) => (
            <li
              className={cn(s.itemPizzaTypeListItem, {
                [s.itemPizzaTypeListItemActive]: activeSize === index,
              })}
              key={index}
              onClick={() => setActiveSize(index)}
            >
              {item} см.
            </li>
          ))}
        </ul>
      </div>

      <div className={s.itemPizzaBottom}>
        <p className={s.itemPizzaPrice}>от {price} грн</p>
        <button
          onClick={() => onClickAdd()}
          className={cn(s.button, { [s.buttonActive]: activeBtn })}
        >
          <HiPlus className={s.pizzaItemPriceIcon} />
          Добавить
          {itemBasketQuantity > 0 && (
            <i className={s.buttonQuantity}>{itemBasketQuantity}</i>
          )}
        </button>
      </div>
    </article>
  );
}

export default PizzaItem;
