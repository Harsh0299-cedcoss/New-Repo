import React from 'react'
import '../Components/Components Styles/Footer.css';
import '../App.css'

const Footer = () => {
    return (
        <div id="footerContainer">
            <i className="fa-solid fa-circle-question" id='help'></i>
            <div id='footerDetails'>
                <div className="contact">
                    <h1>Contact</h1>
                    <p><i className="fa-solid fa-square-phone"></i> <span>+91-8840337523</span></p>
                    <p><i className="fa-solid fa-envelope"></i> <span>sr1071995@gmail.com</span></p>
                    <p>Live customer care service available Mon-Sat 10 am - 7 pm on non-public holidays</p>
                </div>
                <div className="details">
                    Dilocious is your one-stop-shop if you seek and crave for local and regional flavours, unique products and authentically experience different cultures of entire India. At Dilocious, you can get limited available speciality food, a huge variety of tastes and offerings, regional variants of famous food and enjoy far distant seasonal delicacies right your doorstep.
                </div>
            </div>
            <div id='copyright'> &copy; Shashank Rai </div>
            <a href='#top' id='backToTop' > <i className='fa-solid fa-circle-chevron-up'></i>
            </a>
           
        </div>
    )
}

export default Footer