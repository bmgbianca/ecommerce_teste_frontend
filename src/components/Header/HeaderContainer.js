import React, { useState } from 'react';
import HeaderPresentational from './HeaderPresentational';

export default function HeaderContainer({ handleSearchedString }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    if (event.key === 'Enter') {
      handleSearchedString(event.target.value);
    } else if (event.key === 'Escape') {
      setInputValue('');
      handleSearchedString(null);
    }
  };

  const handleSearchClick = () => {
    handleSearchedString(inputValue);
  };

  const handleClearClick = () => {
    setInputValue('');
    handleSearchedString(null);
  };
  return (
    <HeaderPresentational
      inputValue={inputValue}
      handleSearchInput={handleSearchInput}
      handleSearchClick={handleSearchClick}
      handleClearClick={handleClearClick}
    />
  );
}
