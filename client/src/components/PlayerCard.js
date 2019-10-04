import React from 'react';

function PlayerCard(props) {    

    return(
        <div className='userCard'>
            <h1> Name: { props.name } </h1>
            <h2> Country: { props.country } </h2>
            <p> Searches: {props.searches}</p>
        </div>       
        
    )

}

export default PlayerCard;