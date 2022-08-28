import React from 'react';
import { CartState } from '../App';
import '../Components/Components Styles/Menu.css'

const Filter = () => {

     const { productState: {  sortPrice, sortName }, productDispatch } = CartState();
     
     return (
          <div id="filterContainer">
               <h3> Filters    <i className="fa-solid fa-filter"></i> </h3>
               <div id="radioFilter">
                    <p> Name - </p>
                    <span><input type='radio' name='group-1' value='ascending-name' onChange={() => {
                         productDispatch({
                              type: 'byName',
                              payload: "lowToHigh"
                         })
                    }}
                         checked={sortName === 'lowToHigh' ? true : false} /> <label> Ascending </label></span>
                    <span><input type='radio' name='group-1' value='descending-name' onChange={() => {
                         productDispatch({
                              type: 'byName',
                              payload: "highToLow"
                         })
                    }}
                         checked = {sortName === 'highToLow' ? true : false} /> <label> Descending </label></span>
               </div>
               <div id="radioFilter">
                    <p> Price - </p>
                    <span>
                         <input type='radio' name='group-2' value='ascending-price' onChange={() => {
                         productDispatch({
                              type: 'byPrice',
                              payload: "lowToHigh"
                         })
                    }}
                         checked={sortPrice === 'lowToHigh' ? true : false}/> <label> Ascending </label>
                    </span>
                    <span>
                         <input type='radio' name='group-2' value='descending-price' onChange={() => {
                         productDispatch({
                              type: 'byPrice',
                              payload: "highToLow"
                         })
                    }}
                         checked={sortPrice === 'highToLow' ? true : false} /> <label> Descending </label>
                    </span>
               </div>
               <button onClick={()=>{
                    productDispatch({
                         type:"clearFilters"
                    })
               }}> Clear Filters </button>
          </div>
     )
}

export default Filter