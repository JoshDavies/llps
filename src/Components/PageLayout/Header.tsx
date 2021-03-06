import React from 'react';
import Button from 'Components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className='navBar' id ='navBar' role='banner'>
      <h1>
        <div className='headingFirst'>Linden Leas</div>
        <div className='headingSecond'>Pre School</div>
      </h1>
      <Button 
        id={'toggleThemeButton'}
        type={'button'}
        onClick={()=> null}
        children={
          <span>
            <FontAwesomeIcon icon={'bars'} /> Menu 
          </span>
        }
      />
      
    </header>
  )
};

export default Header;