import React from 'react'
import './Tile.css'
import StarRatings from 'react-star-ratings';

function Tile({item}) {
    let image_src = `http://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`
    return (
        <div className="tile">
            <div className = "tile__wrapper">
                <img className = "tile__image" src={image_src} alt="Not Found"/>
                <div className="tile__overlay">
                    <div className="tile__overlayContent">
                        {item.vote_average}/10
                        <StarRatings
                            rating={item.vote_average/2}
                            starRatedColor="yellow"
                            starDimension = '12px'
                            starSpacing = '1px'
                            numberOfStars={5}
                        />
                    </div>
                </div>
            </div>
            
            <div className = "tile__info">
                <span className = 'info__title'>{item.title.length < 16 ? item.title : item.title.slice(0,17)+'...'}</span>
                <span className = 'info__date'>{item.release_date.slice(0,4)}</span>
            </div>
        </div>
    )
}

export default Tile;
