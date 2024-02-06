import React from "react";
import { useDispatch } from "react-redux";

import { IoCloseCircleOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import {
  removeItem,
  quantityItemMinus,
  quantityItemPlus,
} from "../../redux/basketSlice";

import Button from "../button/Button";

import s from "./BasketItem.module.scss";

function BasketItem({ id, title, imageUrl, price, type, size, quantity }) {
  console.log("Render Basket");
  const dispatch = useDispatch();

  const handleIncreaseItem = (id) => {
    dispatch(quantityItemPlus(id));
  };
  const handleDecreaseItem = (id) => {
    dispatch(quantityItemMinus(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <li className={s.basketItem}>
      <img
        className={s.basketItemImg}
        src={imageUrl}
        alt="Pizza"
        width="80"
        height="80"
      />
      <div className={s.basketItemInfo}>
        <h3>{title}</h3>
        <p className={s.basketItemText}>
          {type}, {size} см.
        </p>
      </div>
      <div className={s.basketItemCount}>
        <Button
          variant="icon"
          disabled={quantity === 0}
          onClick={() => handleDecreaseItem(id)}
        >
          <FiMinusCircle className={s.basketItemCountIcon} />
        </Button>
        <p>{quantity}</p>
        <Button variant="icon" onClick={() => handleIncreaseItem(id)}>
          <FiPlusCircle className={s.basketItemCountIcon} />
        </Button>
      </div>

      <b className={s.basketItemPrice}>{price * quantity} грн.</b>
      <IoCloseCircleOutline
        onClick={() => handleDeleteItem(id)}
        className={s.basketItemDeleteIcon}
      />
    </li>
  );
}

export default BasketItem;
