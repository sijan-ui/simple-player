import React from 'react';

const card = (props) => {
    const card = props.card;
   // const total = card.reduce((total, prd) => total + prd.HirePrice, 0);
let total = 0;
for(let i = 0; i < card.length; i++){
    const player = card[i];
    total = total + player.Price;
}



    return (
        <div>
            <h1>Order Summary</h1>
            <p>Item Order: {card.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default card;