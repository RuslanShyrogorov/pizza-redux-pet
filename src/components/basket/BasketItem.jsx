import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import s from "./BasketItem.module.scss";
import {
  removeItem,
  quantityItemMinus,
  quantityItemPlus,
} from "../../redux/basketSlice";
import { useDispatch } from "react-redux";

function BasketItem({ id, title, imageUrl, price, type, size, quantity }) {
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
      {/*<div>*/}
      <img
        className={s.basketItemImg}
        src={imageUrl}
        alt="Pizza"
        width="80"
        height="80"
      />
      <div className="cart__item-info">
        <h3 className={s.basketItemTitle}>{title}</h3>
        <p className={s.basketItemText}>
          {type}, {size} см.
        </p>
      </div>
      {/*</div>*/}
      <div className={s.basketItemCount}>
        <button
          disabled={quantity === 0}
          onClick={() => handleDecreaseItem(id)}
        >
          <FiMinusCircle className={s.basketItemCountIcon} />
        </button>
        <p>{quantity}</p>
        <button onClick={() => handleIncreaseItem(id)}>
          <FiPlusCircle className={s.basketItemCountIcon} />
        </button>
      </div>

      <b>{price * quantity} грн.</b>
      {/*</div>*/}
      <IoCloseCircleOutline
        onClick={() => handleDeleteItem(id)}
        className={s.basketItemDeleteIcon}
      />
      {/*</div>*/}
    </li>
  );
}

export default BasketItem;
