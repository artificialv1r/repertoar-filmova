import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Dobrodošli u Movie App</h1>
      <p>
        Movie App je web aplikacija namenjena svim ljubiteljima filma koji žele
        brz i jednostavan pregled aktuelnog bioskopskog repertoara. Na jednom
        mestu možete pronaći osnovne informacije o filmovima koji su trenutno u
        ponudi, uključujući naziv filma, broj sale, cenu karte i vizuelni prikaz
        kroz poster filma.
      </p>
      <p>
        Aplikacija je razvijena kao Single Page Application (SPA) koristeći
        React biblioteku, što omogućava brzo učitavanje sadržaja i glatku
        navigaciju između stranica bez ponovnog osvežavanja.
      </p>
      <h2>Šta možete da uradite u aplikaciji?</h2>
      <ul style={{ margin: "0px" }}>
        <li>Pregledate listu dostupnih filmova</li>
        <li>Vidite osnovne informacije o svakom filmu</li>
        <li>Iskažete svoje mišljenje putem Like i Dislike opcija</li>
        <li>Jednostavno se krećete kroz aplikaciju pomoću navigacije</li>
      </ul>
    </div>
  );
};

export default Home;
