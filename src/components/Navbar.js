import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from './AutoComplete';
import marvelLogo from '../assets/marvel-logo.jpg';

//import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { title } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1 className='heroHeading'>{title}</h1>
      <img src={marvelLogo} alt='marvel logo' className='logo' />
      <ul>
        <li>
          <AutoComplete hero={props.hero} />
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Hero Academia',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
