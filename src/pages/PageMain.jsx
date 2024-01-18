import React, { useEffect } from "react";
import PizzaList from "../components/pizzaList/PizzaList";
import { useDispatch } from "react-redux";
import { getAllPizzas } from "../redux/pizzaSlice";

function PageMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <>
      <PizzaList />
    </>
  );
}
export default PageMain;
