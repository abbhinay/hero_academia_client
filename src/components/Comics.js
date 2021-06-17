import React, { useState, useEffect } from 'react';
import Spinner from './Spinner/Spinner';
import axios from 'axios';

const Comics = (props) => {
  const [comics, setComics] = useState([]);
  const [showComics, setShowComics] = useState(false);
  const [loading, setLoading] = useState(false);

  const getComics = async () => {
    try {
      const res = await axios.get(
        `https://hero-academia-app.herokuapp.com/api/search/${props.id}`
      );
      //console.log(res.data);
      const newComics = res.data.map((comic) => {
        const newComic = {
          title: comic.title,
          thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
        };
        return newComic;
      });
      //console.log(newComics);
      setComics([...newComics]);
      setShowComics(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    getComics();
    setLoading(false);
  }, [props.id]);

  if (loading) {
    <Spinner />;
  } else {
    return (
      <>
        {showComics && (
          <h1
            style={{ color: 'white', marginTop: '3rem' }}
            className='text-center heroHeading'
          >
            Comics
          </h1>
        )}
        <div className='grid-4'>
          {comics.map((cc) => (
            <div className='card'>
              <img src={cc.thumbnail} alt='' />

              <h4 style={{ color: 'white' }}>{cc.title}</h4>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Comics;
