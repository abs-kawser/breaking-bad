import React from 'react';
import CharacterItem from './CharacterItem';

const characterGrid = ({ items, isLoading }) => {
  console.log(items);
  return isLoading ? <h1>Loading...</h1>

    : (
          
          
      <section className="cards">
        {items.map((itemx) => (


          <CharacterItem key={itemx.char_id} allitems={itemx}></CharacterItem>

        ))}

      </section>

    )

};

export default characterGrid;