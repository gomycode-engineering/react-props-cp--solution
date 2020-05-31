import React from 'react';
import Profile from './Components/Profile';

import imgSrc from './assets/ryan.jpg';
const App = () => {
  const miniBio = `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni atque aliquam explicabo voluptates at expedita amet 
    voluptatum doloribus, ducimus iusto id modi necessitatibus 
    excepturi ea veritatis illo asperiores facere aspernatur?`;
  const handleClick = () => alert(`Welcome my name is John Doe`);
  return (
    <>
      <Profile
        fullName='John Doe'
        profession='JS Develepper'
        bio={miniBio}
        handleClick={handleClick}
      >
        {imgSrc}
      </Profile>
    </>
  );
};

export default App;
