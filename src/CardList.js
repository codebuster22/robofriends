import Card from './Card';
import React from 'react';

const CardList = ({robots})=>{
    return (
        <div>
            {robots.map(
                (user, i) =>
                    (<Card key={i} id={robots[i].id} name={robots[i].name} nickName={robots[i].nickname}/>)
            )
            }
        </div>);
};

export default CardList;