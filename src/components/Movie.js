import React from 'react';

const Movie = (props) => {
    console.log(props)
    return (
        <div className = 'movies'>
            <h1 className = 'movieTitle'>Lord of the Rings: {props.title}</h1>
            <ul>
                <li> {props.year} </li>
                <li> {props.rating} </li>
                <li> {props.score}</li>
            </ul>
            <img src={props.poster}></img>
            <p>About: {props.about}</p>
            <p>Runtime: {props.hours} hours and {props.minutes} minutes</p>
        </div>
    )
};

export default Movie;