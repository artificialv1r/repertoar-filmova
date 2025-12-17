import React from "react";

const AuthorInfo = () => {
  return (
    <div
      style={{
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>O autoru aplikacije</h1>
      <p>
        Autor ove aplikacije je student informacionih tehnologija sa
        interesovanjem za frontend razvoj i moderne web tehnologije. Kroz izradu
        ove aplikacije autor je stekao praktično iskustvo u radu sa React
        komponentama, props sistemom, upravljanjem stanjima i rutiranjem pomoću
        React Router biblioteke.
      </p>
      <p>
        Poseban fokus tokom razvoja bio je na čistoći koda, ponovnoj upotrebi
        komponenti i jasnoj strukturi aplikacije. Ovaj projekat predstavlja deo
        autorovog ličnog razvoja i unapređenja znanja iz oblasti web
        programiranja.
      </p>
      <h2>Veštine autora</h2>
      <ul style={{ margin: "0px" }}>
        <li>HTML, CSS, JavaScript</li>
        <li>React i React Router</li>
        <li>Rad sa komponentama i props-ima</li>
        <li>Osnovi SPA arhitekture</li>
      </ul>
    </div>
  );
};

export default AuthorInfo;
