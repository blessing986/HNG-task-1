import React from "react";
import './App.css';

function App() {

  return (

    <div>

      <img src="./assets/menu.png" className="menu" />

      <img src="./assets/_Avatar share button.png" className="share" />

      <section className="wrapper">

        {/* profile section */}

        <div className="profile">

          <img src="./assets/profile__img.png" alt="" id="profile__img" />

          <p id="twitter">_bleccze_</p>

          <p id="slack">Blessing_U</p>

        </div>

        {/* profile section ends */}

      </section>

    </div>

  );
}

export default App;
