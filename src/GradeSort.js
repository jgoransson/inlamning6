import React from "react";

export default function GradeSort(props){
    function sortGrade(){
        const gradeSorting = [...props.movies].sort(function(a,b){
            if (a.grade < b.grade){
                return 1;
            }
            if(a.grade > b.grade){
                return -1;
            }
            return 0
        })
        props.setMovies(gradeSorting);
    }

    return (
        <div>
            <button onClick={sortGrade} className="btn btn-primary">Sortera efter betyg</button>
        </div>
    )
}