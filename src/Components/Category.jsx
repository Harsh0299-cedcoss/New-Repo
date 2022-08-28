import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Components/Components Styles/Category.css';
import CategoryCard from './Cards Components/CategoryCard';



const Category = () => {
    var [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(resp => {
                setCategory(resp.data.categories)
            })
    }, []);

    return (
        <div id="categoryContainer">

            <h1> Categories </h1>
            <div id="categoryList">
                {category.length !== 0 && <>
                    <CategoryCard val={category[2]} />
                    <CategoryCard val={category[5]} />
                    <CategoryCard val={category[8]} />
                    <CategoryCard val={category[9]} />
                    <CategoryCard val={category[10]} />
                    <CategoryCard val={category[11]} />
                    <CategoryCard val={category[12]} />
                </>}
            </div>
        </div>
    )
}

export default Category