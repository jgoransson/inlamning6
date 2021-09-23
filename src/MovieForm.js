import React, { useState, useRef } from 'react';
import Movies from './Movies';
import SaveMoviesButton from './SaveMoviesButton';
import GradeSort from './GradeSort';
import AlphaSort from './AlphaSort';

export default function AddMovieForm() { 
    const [movies, setMovies] = useState([]);

    const titleRef = useRef();
    const gradeRef = useRef();

    return (
        <div  class="m-4">
            <h4 className="mt-4">Lägg till en film</h4>
            <hr />
            <form class="form">
                <div class="form-group col-lg-2">
                    <label for="id" className="mt-3">
                        <strong>Titel:</strong>
                    </label>
                    <input className="form-control" id="title" ref={titleRef} placeholder="Skriv filmtitel här..."/>
                </div>
                <div class="form-group col-lg-2">
                    <label for="grade" className="mt-3">
                            <strong>Betyg:</strong>
                    </label>
                    <select className="form-select" id="grade" ref={gradeRef}>
                            <option value="" disabled selected>Ange betyg här...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select>
                </div>
                <SaveMoviesButton movies={movies} setMovies={setMovies} titleRef={titleRef} gradeRef={gradeRef}/>
            </form>

            { movies.map(movie => <Movies movies={movies} setMovies={setMovies} movie={movie} />) }

            <div class="btn-group mt-4" role="group" aria-label="Basic example">
                <GradeSort movies={movies} setMovies={setMovies}/>
                <AlphaSort movies={movies} setMovies={setMovies}/>
            </div>
            
            
        </div>
    )
}