import React from 'react';
import '../../App.css';
import './topCard.css'
import { CartState } from '../../App';

const TopCard = ({ val }) => {
  // var { cart, setCart, cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice } = useContext(user);

  const {state:{cart},dispatch} = CartState();


  return (
    <div className="topCardContainer" id={val.idMeal}>
      <img src={val.strMealThumb} alt={val.strMeal} />
      <h1><span>{val.strMeal}</span></h1>

      <h4><span className='type'>{val.strCategory.toLowerCase() === "beef" || val.strCategory.toLowerCase() === 'chicken' || val.strCategory.toLowerCase() === "goat" || val.strCategory.toLowerCase() === 'lamb' || val.strCategory.toLowerCase() === 'pork' || val.strCategory.toLowerCase() === 'seafood' ? <img src='https://www.nabeeats.com/assets/images/non-veg.png' alt='Non Veg' /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT4e0RN6IsWAPDRX2etbSZ0vEHSj9dwZ6mxLylkpApzXblEDfu6uzg0Xd6sIK5xwhvok&usqp=CAU' alt='Veg' />}</span><p style={{ display: "inline" }}>Price: ₹ {val.price} </p><span> {val.price + 50}</span> </h4>
      <div>{cart.some((p)=>p.idMeal === val.idMeal) ? <button className='delete'  onClick={()=>{
          dispatch({
            type:"removeFromCart",payload:val
          })
      }}> <i class="fa-solid fa-circle-minus"></i> </button> : <button className='add' onClick={()=>{
        dispatch({
          type:"addToCart",payload:val
        })
      }}><i className="fa-solid fa-cart-plus"></i></button>}
      <button className='viewDetails'><i className="fa-solid fa-eye"></i></button></div>
    </div>

  )
}

export default TopCard