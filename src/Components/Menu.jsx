import React from 'react';
import { CartState } from '../App';
import TopCard from './Cards Components/topCard';
import './Components Styles/Menu.css';
import Filter from './Filter';



const Menu = () => {

  const { state: { products }, productState: { search, sortPrice, sortName }, productDispatch } = CartState();

  const transformedProducts = () => {
    let sortedProducts = products;

    if (sortPrice) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortPrice === 'lowToHigh' ? a.price - b.price : sortPrice === 'highToLow' && b.price - a.price
      )
    }
    if (sortName) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortName === 'lowToHigh' ? (a.strMeal < b.strMeal ? -1 : 1) : sortName === 'highToLow' && (a.strMeal > b.strMeal ? -1 : 1)
      )
    }

    if (search !== '') {
      sortedProducts = sortedProducts.filter((p) => p.strMeal.toLowerCase().trim().startsWith(search.toLowerCase().trim()));
    }

    return sortedProducts
  }

  return (
    <div id="menuContainer">
      <div id="filterContainer">
        <Filter />
      </div>
      <div id="menuItemsContainer">
        <div id="heading"> <h1> Our Products - <span>{products.length} items </span></h1> <input placeholder='search by name' id="search" onChange={(e) => {
          productDispatch({
            type: 'searchByName',
            payload: e.target.value
          })
        }} /></div>
        <div id="menuItemsListContainer">
          {transformedProducts().length === 0 ? <h1>Sorry, No matching Products found!</h1> : transformedProducts().map((val) => {
            return <TopCard val={val} key={val.idMeal} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Menu