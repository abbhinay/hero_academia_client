import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hero = ({ id }) => {
  const [hero, setHero] = useState({});

  const getHero = async () => {
    try {
      const res = await axios.get(`https://hero-academia-app.herokuapp.com/api/character/${id}`);
      console.log(res.data);
      const newHero = {
        name: res.data.name,
        description: res.data.description,
        thumbnail: res.data.thumbnail.path + '.' + res.data.thumbnail.extension,
      };
      setHero(newHero);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHero();
  }, [id]);
  return (
    <div className='grid-2'>
      <img src={hero.thumbnail} alt='' />
      <div>
        <h1 className='text-center my-2 heroHeading'>{hero.name}</h1>
        <p className='m-2 heroInfo'>{hero.description}</p>
      </div>
    </div>
  );
};

export default Hero;
