import React from "react";

export const SearchPage = () => {
  return (
    <div className="search__container">
      <div className="search__container__title">
        <h3 className="search__container__title--text">Ingrese la película de One Piece a buscar</h3>
      </div>

      <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Vaporeon :)"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            // onChange={onChangeSearch}
            // value={search}
            // disabled={isLoading}
          />
        </div>

    </div>
  );
};
