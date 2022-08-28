
import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../App';
import '../App.css'
import '../Components/Components Styles/Nav.css'


const NavBar = () => {
    // var { cart, setCart, cartSize, setCartSize, discount, setDiscount, totalPrice, setTotalPrice } = useContext(user);

  const {state} = CartState();

    const [toggle, setToggle] = useState(false);
    const dark = () => {
        document.querySelector("#themeSwitcher").classList.toggle('fa-sun');
        document.querySelector("#body").classList.toggle("darkTheme");
    }


    return (
        <div id="navContainer">
            <header className="header">
                <div className="logo">
                    <Link to="/"><img src={'https://cdn1.storehippo.com/s/573db1519f0d58741f0cc5c1/ms.settings/5256837ccc4abf1d39000001/webp/589eeda381c872391b08f498-480x480.png'} alt="logo" /> </Link>
                </div>
                <nav className='navbar'>
                    <Link to="/"><h1>Home</h1></Link>
                    <Link to="/about"><h1>About</h1></Link>
                    <Link to="/menu"><h1>Our Menu</h1></Link>
                    <a href='#footerContainer'><h1>Contact</h1></a>
                </nav>
                <div className='options'>
                    <h1 onClick={dark} className="fa-solid fa-moon" id='themeSwitcher'> </h1>
                    <Link to="/cart"><h1 className="fas fa-shopping-cart cart-btn" ><span>{state.cart.length}</span></h1></Link>
                </div>
                <div className="navbarMob" >
                    <i className='fa-solid fa-bars' onClick={(e) => { setToggle(true) }}></i>
                    {toggle && (<div className='overlay'>
                        <h1 className='fa-solid fa-xmark' onClick={(e) => { setToggle(false) }}> </h1>
                        
                        <Link to="/"><h1>Home</h1></Link>
                        <Link to="/"><h1>About</h1></Link>
                        <Link to="/menu"><h1>Menu</h1></Link>
                        <Link to="/"><h1>Contact</h1></Link>
                            <hr/>
                        <div className='optionsM'>
                            <h1 onClick={dark} className="fa-solid fa-moon" id='themeSwitcher'> </h1>
                            <Link to="/cart"><h1 className="fas fa-shopping-cart cart-btn" ><span>{state.cart.length}</span></h1></Link>
                        </div>
                    </div>)}
                </div>
            </header>
        </div>
    )
}

export default NavBar