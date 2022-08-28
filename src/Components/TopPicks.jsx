import React,{memo} from 'react';
import topPicks from '../Assests/Picks.json'
import TopCard from './Cards Components/topCard';
// import { CartState} from '../App';

const TopPicks = () => {
    // var {cart,setCart,cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice} = useContext(user);
//   const {state:{cart,products},dispatch} = CartState();

    return (
        <div id="topPicks">
            <h1>
                Our Top Picks
            </h1>
            <div id="topPicksList">
                <TopCard val={topPicks[0]} />
                <TopCard val={topPicks[1]} />
                <TopCard val={topPicks[2]} />
                <TopCard val={topPicks[3]} />
                <TopCard val={topPicks[4]} />
                <TopCard val={topPicks[5]} />
                <TopCard val={topPicks[6]} />
                <TopCard val={topPicks[7]} />
            </div>
        </div>
    )
}

export default memo(TopPicks) 