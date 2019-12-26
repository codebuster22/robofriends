import Card from './Card';
import React from 'react';

const CardList = ({robots})=> (
        <div>
            {robots.map(
                (user, i) =>
                    (<Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username}/>)
            )
            }
        </div>);

export default CardList;