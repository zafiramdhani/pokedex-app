import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeAPI() {
  const [Find, setFind] = useState('bulbasaur');  // update app url
  const [name, setName] = useState('');           // update user input
  const [Img, setImg] = useState('');             // update image
  const [Type, setType] = useState('');           // update pokemon type

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      setImg(response.data.sprites.front_default);
      setType(response.data.types[0].type.name);
    }
    getData();
  }, [Find]);

  const Typename = (event) => {
    setName(event.target.value);
  }

  const Search = () => {
    if (name !== '') setFind(name);
    setName('');
  }

  const customStyle = {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <div className="back" style={customStyle}>
        <div className="card" style={{ textAlign: 'center' }}>
          <img src={`${Img}`} alt="" />
          <div className="name">{Find.toUpperCase()}</div>
          <div className="type">{Type}</div>
          <input type="text" onChange={Typename} value={name} />
          <button onClick={Search}>GO</button>
        </div>
      </div>
    </>
  )
}

