import React from 'react';
import { Link } from 'react-router-dom'

export default function Accueil() {
  
    return (
        <div className="headerAccueil">
      <header>
        <img src="../img/sahara.jpg" alt=""/>
      </header>
      <Link to="/whatever">fake link here ...</Link>
      <h2 className="titre">API reference</h2>
      check the doc{" "}
      <a
        href="https://reacttraining.com/react-router/web/guides/quick-start"
        target="_blank"
      >here</a>
        </div>
    );
}
