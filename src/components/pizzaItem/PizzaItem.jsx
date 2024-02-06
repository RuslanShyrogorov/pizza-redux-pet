import { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { HiPlus } from "react-icons/hi";
import Loader from "../loader/Loader";
import { addItem } from "../../redux/basketSlice";
import s from "./PizzaItem.module.scss";
import Button from "../button/Button";

const typePizza = ["тонкое", "традиционное"];

function PizzaItem({ id, title, imageUrl, price, sizes, types }) {
  console.log("Render Pizza Item");
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.pizza.loading);
  const pizzas = useSelector((state) => state.basket.items);
  const currentPizza = pizzas.find((item) => item.title === title);
  const quantityAddedPizzaInBasket = pizzas.reduce((acc, item) => {
    if (item.title === title) {
      acc += item.quantity;
    }
    return acc;
  }, 0);
  const itemBasketQuantity = currentPizza ? quantityAddedPizzaInBasket : 0;

  const onClickAdd = () => {
    const basketId = id + typePizza[activeType] + sizes[activeSize];
    const item = {
      id: basketId,
      title,
      imageUrl,
      price,
      type: typePizza[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  if (isLoading) return <Loader />;

  return (
    <article className={s.itemPizza}>
      <div className={s.itemPizzaContainer}>
        <img
          className={s.itemPizzaImg}
          src={imageUrl}
          alt="pizza"
          width="260"
          height="260"
        />
        <h2 className={s.itemPizzaTitle}>{title}</h2>
      </div>

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
        <Button
          onClick={() => onClickAdd()}
          className={cn({ [s.buttonActive]: itemBasketQuantity })}
          variant="contained"
        >
          <HiPlus />
          Добавить
          {itemBasketQuantity > 0 && (
            <i className={s.buttonQuantity}>{itemBasketQuantity}</i>
          )}
        </Button>
        {/*<button*/}
        {/*  onClick={() => onClickAdd()}*/}
        {/*  className={cn(s.button, { [s.buttonActive]: itemBasketQuantity })}*/}
        {/*>*/}
        {/*  <HiPlus />*/}
        {/*  Добавить*/}
        {/*  {itemBasketQuantity > 0 && (*/}
        {/*    <i className={s.buttonQuantity}>{itemBasketQuantity}</i>*/}
        {/*  )}*/}
        {/*</button>*/}
      </div>
    </article>
  );
}

export default memo(PizzaItem);
