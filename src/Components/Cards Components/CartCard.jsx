import React, { useEffect, useState } from 'react';
import { CartState } from '../../App';
import '../Components Styles/Cart.css';

const CartCard = () => {
     const { state: { cart }, dispatch } = CartState();

     var [total,setTotal] = useState(0);

     useEffect(()=>{

          var sum = cart.reduce((acc,val)=> acc+(val.price * val.qty),0);
          setTotal(sum);

     },[cart])

     return (
          <div id="caryCardContainer">
               <table>
                    <tr>
                         <th>#</th>
                         <th>item</th>
                         <th>Quantity</th>
                         <th>Price</th>
                         <th>Item Price</th>
                    </tr>
                    {cart.length !== 0 && cart.map((val, index) => {
                         return <tr>
                              <td>{index + 1}</td>
                              <td><img src={val.strMealThumb} alt={val.strMeal} /><div>{val.strMeal}</div></td>
                              <td> <div> <i class="fa-solid fa-circle-plus" onClick={() => {
                                   dispatch({
                                        type: "increaseQTY", payload: {
                                             idMeal: val.idMeal,
                                             qty: val.qty + 1
                                        }
                                   })
                              }} /> {val.qty} <i class="fa-solid fa-circle-minus" onClick={() => {
                                   dispatch({
                                        type: "decreaseQTY", payload: {
                                             idMeal: val.idMeal,
                                             qty: val.qty - 1
                                        }
                                   })
                              }} /></div> <p onClick={() => {
                                   dispatch({
                                        type: "removeFromCart", payload: val
                                   })
                              }}> Remove
                                   </p></td>
                              <td>{val.price}</td>
                              <td>{val.price * val.qty}</td>
                         </tr> 
                    }) } 
               </table>
               
               <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"5vh",color:"var(--black)"}}> 
                    <div></div>
               <div>
                    <h1>Total : {total}</h1>
               </div>
               </div>

          </div>
     )
}

export default CartCard