import React from "react";

export default function AlphaSort(props){
    function sortAlpha(){
        const alphaSorting = [...props.movies].sort(function(a,b){
            if (a.title < b.title){
                return -1;
            }
            if(a.title > b.title){
                return 1;
            }
            return 0
        })
        props.setMovies(alphaSorting);
    }

    return (
        <div>
            <button onClick={sortAlpha} className="btn btn-primary">Sortera efter Bokstäver</button>
        </div>
    )
}