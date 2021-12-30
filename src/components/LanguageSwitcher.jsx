import React from 'react';

const LanguageSwitcher = ({ handleLanguageChange, disabled }) => {
  return (
    <select onChange={handleLanguageChange} className='lang-select' disabled={disabled}>
      <option value='en'>English</option>
      <option value='he'>Hebrew</option>
    </select>
  );
};

export default LanguageSwitcher;
