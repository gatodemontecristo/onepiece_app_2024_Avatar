import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  loadMoviesCollection, sortByDuration, sortByYear } from "../../store";


export const useFilterSearch = () => {

    const lastOrder = localStorage.getItem("lastOrder") || "true";
    const [order, setorder] = useState(JSON.parse(lastOrder) === true);
  
    const { moviesCollection, isLoading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadMoviesCollection(order));
    }, []);
  
    
    const onChangeOrder = () => {
      if (order) {
        dispatch(sortByDuration());
      } else {
        dispatch(sortByYear());
      }
      setorder(!order);
      localStorage.setItem("lastOrder", !order);
    };
  
  
    const searchItem = localStorage.getItem("searchItem") || "";
    const [search, setSearch] = useState(searchItem);
    const onChangeSearch = (event) => {
      event.preventDefault();
      localStorage.setItem("searchItem", event.target.value);
      setSearch(event.target.value);
    };

    return{
        order,
        onChangeOrder,
        moviesCollection,
        isLoading,
        search,
        onChangeSearch
    }
}