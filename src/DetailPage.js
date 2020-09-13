import React from 'react'
import './DetailPage.css'
import StarRatings from 'react-star-ratings';

function DetailPage({itemDetails,genres,closeDetail}) {
    let image_src = `http://image.tmdb.org/t/p/w300_and_h450_bestv2/${itemDetails.poster_path}`
    let bg_src = `http://image.tmdb.org/t/p/w300_and_h450_bestv2/${itemDetails.backdrop_path}`
    let rating = itemDetails.vote_average/2
    let genreList=''
    let x,y
    for(x of itemDetails.genre_ids){
        for(y of genres){
            if(y.id === x){
                genreList+=(y.name + '/')
                break
            }
        }
    }
    genreList = genreList.substring(0, genreList.length - 1)

    return (
        <div className='detailPage'>
        <div className='detailbg' style={{backgroundImage:`url(${bg_src})`}}></div>
        <div className = 'detailPage__matter'>
            <div className="detail__left">
                <img className = "detail__Image" src={image_src} alt=""/>
            </div>
            <div className="detail__right">
                <h1 className='title'>{itemDetails.title}</h1>
                <p>
                    <span className='detail__release'>{itemDetails.release_date.slice(0,4)}</span>
                    <span className='detail__genreList'>{genreList}</span>
                    <span className='imdbLogo'>
                        <img className = 'imdbLogo__Img' src="https://cdn.freebiesupply.com/images/large/2x/imdb-logo-transparent.png" alt="IMDB"/>
                    </span>
                    <StarRatings
                        rating={rating}
                        starRatedColor="yellow"
                        starDimension = '14px'
                        starSpacing = '1px'
                        numberOfStars={5}
                    />
                </p>
                <p className='overview'>{itemDetails.overview}</p>
            </div>
            <button className = 'closeDetail' onClick = {closeDetail}>X</button>
        </div>
        </div>
    )
}

export default DetailPage
