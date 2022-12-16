import React from "react";
import Search from "../Search";

export const Home = () => (
  <div>
    <div className="uk-cover-container uk-height-medium" data-uk-height-viewport>
      <img src="entry.jpg" alt="" data-uk-cover />
      <div className="uk-overlay uk-light uk-position-center">
        <div className="custome-title">Nuestra Boda</div>
        <h2 className="custome-title">Tania & Alberto</h2>
        <a className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" href="#search">
          Buscar mesa
        </a>
      </div>
    </div>
    <Search />
  </div>
);
