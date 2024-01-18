import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { changeCategory } from "../../redux/filterSlice";
import PizzaItem from "../pizzaItem/PizzaItem";
import Sort from "../sort/Sort";
import Loader from "../loader/Loader";

import s from "./PizzaList.module.scss";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function PizzaList() {
  const dispatch = useDispatch();
  const pizzaItems = useSelector((state) => state.pizza.items);
  const isLoading = useSelector((state) => state.pizza.loading);
  const currentCategory = useSelector((state) => state.filter.category);
  const currentSort = useSelector((state) => state.filter.sort);

  const filterByCategory = (items, category) => {
    if (category === 0) {
      return items;
    } else {
      return pizzaItems.filter((pizza) => pizza.category === category);
    }
  };
  const filterBySort = (items, sort) => {
    if (sort === "rating") {
      return [...items].sort((a, b) => a.rating - b.rating);
    } else if (sort === "title") {
      return [...items].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "price") {
      return [...items].sort((a, b) => a.price - b.price);
    }
  };

  const filteredPizzas = filterByCategory(pizzaItems, currentCategory);
  const sortedPizzas = filterBySort(filteredPizzas, currentSort.searchParams);

  if (isLoading) return <Loader />;

  return (
    <section className={s.pizza}>
      <div className={s.pizzaContainer}>
        <div className={s.pizzaMenu}>
          <ul className={s.pizzaMenuBtnList}>
            {categories.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => dispatch(changeCategory(index))}
                  className={cn(s.pizzaButton, {
                    [s.pizzaButtonActive]: currentCategory === index,
                  })}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <Sort />
        </div>
        <h1 className={s.pizzaTitle}>Все пиццы</h1>
        <ul className={s.pizzaList}>
          {sortedPizzas?.map((item) => (
            <li key={item.id}>
              <PizzaItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PizzaList;
