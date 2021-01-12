import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import img from '../../img/oasis1.jpg';
// import image from '../../img/oasis2.jpg'; 
// import fjeiofe from '../../assets/images/articles_imgs'

export default function ArticleCard({articleId, img, articleTitre}) {
    // console.log("IMG >>>> ",img)
    const articleBanniere = require('../../assets/images/articles_imgs/' + articleTitre + "/banniere.jpg")
    const style = {
        banniere_card : {
            backgroundImage : `url("${articleBanniere}")`,
            // backgroundColor : 'black'
        }
    }
    return (
        <div className="article" style={{
            display : 'flex',
            flexDirection : 'column',
            fontWeight : "800"
        }}>

            {/* <h2 className="titre1">La cité de Yunkai</h2> */}
            
            <Link to={"/Article/" + articleId}>
                
                {/* <img src={articleBanniere}/> */}
                <div className="img_card" style={style.banniere_card}>
                <p>{articleTitre}</p>
                <div className="black_opacity"/>
                    
                    
                </div>
                
            </Link>
            
            
           
            {/* <img src={image} /> */}
           
        </div>
    )
}
