import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../api/axios';
import "./Row.css";

export default function Row({isLargeRow, title, id, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovieData();
    }, [])
    
    const fetchMovieData = async () => {
        const requests = await axios.get(fetchUrl)
        setMovies(requests.data.results)
    }
  return(
    <section className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider__arrow-left'>
                <span className='arrow'>{"<"}</span>
            </div>

            <div id={id} className='row__posters'>
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    style={{ padding: "25px 0" }}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                    } `}
                    alt={movie.name}
                    // onClick={() => handleClick(movie)}
                />
                ))}
            </div>
            <div className='slider__arrow-right'>
                <span className='arrow'>{">"}</span>
            </div>
        </div>
    </section>
  )
}
