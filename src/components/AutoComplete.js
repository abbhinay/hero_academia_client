import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner/Spinner';
import axios from 'axios';
import './AutoComplete.css';

const AutoComplete = (props) => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(hero);
  }, [hero]);

  const getItem = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://hero-academia-app.herokuapp.com/api/autocomplete/${value}`
      );
      setItems((prevItem) => res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const change = (e) => {
    setValue(e.target.value);
    console.log(e + ' ' + value);
    //getItem();
  };

  const submitValue = (item) => {
    setHero(item);
    setItems([]);
    props.hero(item.id);
  };

  return (
    <>
      <div className='wrapper'>
        <div className='search-input'>
          <input
            type='text'
            placeholder='Type to search..'
            value={value}
            onChange={(event) => {
              change(event);
            }}
          />

          <div className='autocom-box'>
            {loading && <Spinner />}
            {items.map((item) => (
              <li
                className='autoComplete'
                key={item.id}
                onClick={() => submitValue(item)}
              >
                {item.name}
              </li>
            ))}
          </div>
          <div className='icon'>
            <i className='fas fa-search' onClick={getItem}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
