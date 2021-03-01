import React, {
    useState
} from 'react';
import fakeData from '../../fakeData';
import './Player.css';
import MyPlayer from '../MyPlayer/MyPlayer';
import Card from '../Card/Card'

const Player = () => {
    const first15 = fakeData.slice(0, 15);
    const [player, setPlayer] = useState(first15);
    const [card, setcard] = useState([]);

        const handleAddPlayer = (player) => {
            
            const newcard =[...card, player];
            setcard(newcard);
    }
    return (


        < div className="allPlayer-container">
          <div className="player-container">
               
            {
                player.map(play => <MyPlayer handleAddPlayer = {handleAddPlayer} player={play}></MyPlayer>)
            }
        
          </div>
           <div className="card-container">
              <Card card={card}></Card>
           </div>
        </div>


    );
};

export default Player;