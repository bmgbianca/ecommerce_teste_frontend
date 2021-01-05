import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchedString } from '../../features/searchedStringSlice';
import HeaderPresentational from './HeaderPresentational';

export default function HeaderContainer() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    if (event.key === 'Enter') {
      dispatch(changeSearchedString(event.target.value));
    } else if (event.key === 'Escape') {
      setInputValue('');
      dispatch(changeSearchedString(null));
    }
  };

  const handleSearchClick = () => {
    dispatch(changeSearchedString(inputValue));
  };

  const handleClearClick = () => {
    setInputValue('');
    dispatch(changeSearchedString(null));
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
