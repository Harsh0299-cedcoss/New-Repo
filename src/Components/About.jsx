import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Components/Components Styles/About.css';

const About = () => {
    return (
        <div id="aboutContainer">
            <h1> About Dil-O-Cious</h1>
            <div id='aboutContent'>
            <div id='aboutUS'>
                <h1>About US</h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore provident ratione id non, magnam earum saepe natus vero obcaecati nisi aperiam nulla ipsam neque aspernatur temporibus minus enim eligendi voluptas, voluptatem consequatur maxime esse quasi similique sunt! Cum, amet deleniti?</p>
                <Link to={'/about'}><button>Know More</button> </Link>
            </div>
            <hr />
            <vl/>
            <div id='ourHistory'>
                <h1>Our History</h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore provident ratione id non, magnam earum saepe natus vero obcaecati nisi aperiam nulla ipsam neque aspernatur temporibus minus enim eligendi voluptas, voluptatem consequatur maxime esse quasi similique sunt! Cum, amet deleniti?</p>
                <Link to={'/about'}><button>Know More</button> </Link>
            </div>
            </div>
            
        </div>
    )
}

export default About