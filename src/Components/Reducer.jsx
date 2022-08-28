export const cartReducer = (state, action) => {
     switch (action.type) {

          case 'addToCart':
               return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }

          case 'removeFromCart':
               return { ...state, cart: state.cart.filter((c) => c.idMeal !== action.payload.idMeal) }

          case "increaseQTY":
               return { ...state, cart: state.cart.filter((c) => (c.idMeal === action.payload.idMeal) ? c.qty = action.payload.qty : c.qty) }

          case "decreaseQTY":
               return { ...state, cart: state.cart.filter((c) => (c.idMeal === action.payload.idMeal) ? (c.qty===1 ? c.qty = 1 : c.qty = action.payload.qty) : c.qty) }

          default:
               return state;
     };
}

export const productReducer = (state, action) => {
     switch (action.type) {
          case 'byPrice':
               return { ...state, sortPrice: action.payload }

          case 'byName':

               return { ...state, sortName: action.payload }

          case 'searchByName':

               return { ...state, search: action.payload }
          
          case 'clearFilters':
               return {
                    search:"",
                    sortPrice:false,
                    sortName:false
               }

          default:
               return state;
     }
}