import React from 'react';

export default function SaveMoviesButton(props) {

    function addMovie(){
        if (props.titleRef.current.value === "" || (props.gradeRef.current.value) <= 0){
            alert("Du måste ange en titel och betyg för filmen")            

        }
        else
        {
            props.setMovies([...props.movies, {
                title: props.titleRef.current.value,
                grade: props.gradeRef.current.value
            }]);

            props.titleRef.current.value = "";
            props.gradeRef.current.value = "Ange ett betyg för filmen"
            
        }
    }
    return (
        <div>
            <button type="button" id="save-movie" class="btn btn-success m-3" onClick={ addMovie } value="Spara film">Spara</button>
        </div>
      )
}