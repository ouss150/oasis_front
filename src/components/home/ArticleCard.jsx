import React from 'react'
import { Link } from 'react-router-dom'
// import img from '../../img/oasis1.jpg';
// import image from '../../img/oasis2.jpg'; 

export default function ArticleCard({articleId, img}) {
    // console.log("IMG >>>> ",img)
    return (
        <div className="article">

            {/* <h2 className="titre1">La cité de Yunkai</h2> */}
            <Link to={"/Article/" + articleId}> <img src={img}/></Link>
           
            {/* <img src={image} /> */}
           
        </div>
    )
}
