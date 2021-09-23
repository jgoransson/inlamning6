import React from 'react';

export default function Movies(props) {

    const ratingStars = [];
    for(let i = 0; i < props.movie.grade; i++){
        ratingStars.push(<img src="images\star.png" class="float-end" height="30px" width="30px" alt="star" key={i} />)
    }

    function deleteMovie(title){
        props.setMovies(props.movies.filter((movie) => movie.title !== title))
    }
    return (
        <div>
            <li className="list-group-item">
                { props.movie.title }
                <button src="public\images\delete.png" id="delete" className="btn btn-sm btn-danger float-end ml-1" onClick={() => {deleteMovie(props.movie.title)}}>Radera film</button>
                {ratingStars}
            </li>
        </div>
      )
}