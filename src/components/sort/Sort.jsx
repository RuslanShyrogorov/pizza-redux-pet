import { useState } from "react";
import { IoCaretUpOutline } from "react-icons/io5";
import { IoCaretDownOutline } from "react-icons/io5";
import s from "./Sort.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../redux/filterSlice";

export const sort = [
  { name: "популярные", searchParams: "rating" },
  { name: "цене", searchParams: "price" },
  { name: "названию", searchParams: "title" },
];

function Sort() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const currentSort = useSelector((state) => state.filter.sort);

  const handleClickSelectSort = (index) => {
    dispatch(changeSort(sort[index]));
    setIsVisible(false);
  };

  return (
    <div className={s.sort}>
      <div className={s.sortLabel}>
        {isVisible ? (
          <IoCaretDownOutline className={s.sortLabelIcon} />
        ) : (
          <IoCaretUpOutline className={s.sortLabelIcon} />
        )}
        <b>Сортировка:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{currentSort.name}</span>
      </div>
      {isVisible && (
        <div className={s.sortPopup}>
          <ul>
            {sort.map((item, index) => (
              <li
                key={item.name}
                onClick={() => handleClickSelectSort(index)}
                className={cn(s.sortPopupItem, {
                  [s.sortPopupItemActive]: currentSort.name === item.name,
                })}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
