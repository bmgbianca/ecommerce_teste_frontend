import React from 'react';
import './Header.css';

export default function Header({
  inputValue,
  handleSearchInput,
  handleSearchClick,
  handleClearClick,
}) {
  return (
    <div className="headerContainer">
      <img
        className="brand"
        src="https://soudealgodao.com.br/sda2020/wp-content/uploads/2018/10/logo_martan.png"
        alt="logo"
        type="image/png"
      />
      <div className="input-field searchField">
        <i
          className="material-icons prefix blue-grey-text text-lighten-2 searchIcon"
          onClick={handleSearchClick}
        >
          search
        </i>
        <input
          id="icon_prefix"
          type="text"
          value={inputValue}
          className="validate"
          onChange={handleSearchInput}
          onKeyUp={handleSearchInput}
        />
        <label htmlFor="icon_prefix">Pesquisar...</label>
        <i
          className="material-icons prefix blue-grey-text text-lighten-2 clearIcon"
          onClick={handleClearClick}
        >
          highlight_off
        </i>
      </div>
    </div>
  );
}
