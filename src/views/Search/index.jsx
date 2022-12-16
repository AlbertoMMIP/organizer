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
      const txtUpper = txtSearch.trim().toUpperCase();
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
                    <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"  type="submit" href="#result">{labelButton}</button>
                  </div>
                  <div className="uk-margin uk-text-justify">
                    <div>
                      <h6>En la parte de buscar: </h6>
                      <ul class="uk-list uk-list-collapse uk-list-square">
                          <li>Buscar solo por nombre o por apellido o por numero de mesa</li>
                          <li>No poner acentos</li>
                      </ul>
                    </div>
                    <p className="uk-text-meta">Ejemplo por nombre: tania</p>
                    <p className="uk-text-meta">Ejemplo por apellido: martinez</p>
                    <p className="uk-text-meta">Ejemplo por mesa: 18</p>
                    <p className="uk-text-meta">Para hacer una nueva búsqueda hay que apretar el botón que limpia la pantalla e ingresar el nombre nuevamente</p>
                  </div>
                </form>
              </div>
            </center>
          </div>
        </div>
        <div id="result" className="uk-section uk-section-large uk-section-muted">
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
