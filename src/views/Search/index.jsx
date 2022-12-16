import React, { useState } from "react";
import seed from "./../../service/seed.json";

const Search = () => {
  const [guests, ] = useState(seed.list);
  const [txtSearch, setTxtSearch] = useState('');
  const [filterGuests, setFilterGuests] = useState([]);
  const [labelButton, setLableButton] = useState('Buscar Mesa')

  const handleSearchBox = (event) => {
    event.persist();
    setTxtSearch(event.target.value);
  }

  function searchName (e) {
    e.preventDefault();
    if (!txtSearch) return;
    if (labelButton === 'Buscar Mesa') {
      setLableButton('Nueva búsqueda')
      const txtUpper = txtSearch.toUpperCase();
      const results = guests.filter(item => item.Nombre.includes(txtUpper) ||
        item.Apellido.includes(txtUpper) ||
        item.Mesa.includes(txtUpper))
      setFilterGuests(results)
    } else {
      setLableButton('Buscar Mesa');
      setTxtSearch('');
      setFilterGuests([]);
    }
  }

  

  return (
    <div className="uk-cover-container" data-uk-height-viewport>
        <div id="search" className="uk-section">
          <div className="uk-container ">
            <center>
              <div>
                <form className="uk-search uk-search-large" onSubmit={searchName}>
                  <div className="uk-inline">
                    <span data-uk-search-icon></span>
                    <input
                      className="uk-search-input"
                      type="text"
                      name="search"
                      placeholder="Mesa o Nombre"
                      onChange={handleSearchBox}
                      value={txtSearch}
                    />
                  </div>
                  <div className="uk-margin">
                    <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"  type="submit">{labelButton}</button>
                  </div>
                </form>
              </div>
            </center>
          </div>
        </div>
        <div className="uk-section uk-section-large uk-section-muted">
          <div className="uk-container">
            <table className="uk-table uk-table-justify uk-table-divider">
            <caption>Lista de invitados</caption>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Grupo</th>
                  <th>Mesa</th>
                </tr>
              </thead>
              <tbody>
                {
                  filterGuests && filterGuests.map((guest, index) => {
                    return (
                      <tr key={`guest-${index}${guest.Name}${guest.Apellido}${guest.Mesa}`}>
                        <td>{guest.Nombre}</td>
                        <td>{guest.Apellido}</td>
                        <td>{guest.Parentesco}</td>
                        <td>{guest.Mesa}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Search;
