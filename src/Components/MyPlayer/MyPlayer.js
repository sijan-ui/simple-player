import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArchive} from '@fortawesome/free-solid-svg-icons'
import './MyPlayer.css'


const MyPlayer = (props) => {
    
    const {img,name,Price} = props.player;
    
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded gapping" >
        <div className="container player-img">
            <img className="card-img" src={img} alt=""/>
        </div>
        <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h4 className="card-text">{Price}</h4>
        <button 

          className="main-button" 
          onClick={() => props.handleAddPlayer(props.player)}
          ><FontAwesomeIcon icon={faArchive} /> HireMe </button>
        </div>
            
        </div>
    );
};

export default MyPlayer;