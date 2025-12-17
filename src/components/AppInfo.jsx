import React from "react";

const AppInfo = () => {
  return (
    <div
      style={{
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Movie App - Aplikacija za pregled filmskog repertoara</h1>
      <p>
        Movie App je moderna web aplikacija razvijena pomoću React biblioteke,
        koja omogućava korisnicima pregled aktuelnog filmskog repertoara.
        Aplikacija prikazuje osnovne informacije o filmovima kao što su naziv
        filma, broj sale, cena karte i poster filma.
      </p>
      <p>
        Korisnici mogu jednostavno da se kreću kroz aplikaciju zahvaljujući
        React Router navigaciji, kao i da iskažu svoje mišljenje o filmu
        korišćenjem Like i Dislike funkcionalnosti.
      </p>
      <p>
        Cilj aplikacije je da demonstrira upotrebu savremenih frontend
        tehnologija, komponentni pristup razvoju i rad sa podacima u React-u.
      </p>
      <h2>Tehnologije korišćene u aplikaciji</h2>
      <ul style={{ margin: "0px" }}>
        <li>React</li>
        <li>React Router</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS / Inline styling</li>
      </ul>
    </div>
  );
};

export default AppInfo;
