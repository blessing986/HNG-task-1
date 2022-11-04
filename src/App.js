import "./App.css";
import { Link } from 'react-router-dom';
import contact from "./pages/contact";

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



        {/* The links section */}

        <div>

          <a href="https://twitter.com/_bleccze_"> <button className="btns" id="btn__zuri">Twitter Link</button> </a>

          <a href="https://training.zuri.team/"> <button className="btns" id="btn__zuri">Zuri Team</button> </a>

          <a href=" http://books.zuri.team "> <button className="btns" id="books">Zuri Books</button> </a>

          <a href="https://books.zuri.team"> <button className="btns" id="book__python">Python Books</button> </a>

          <a href="https://background.zuri.team"> <button className="btns" id="pitch">Background Check for Coders</button> </a>

          <a href="https://books.zuri.team/design-rules"> <button className="btns" id="book__design">Design Books</button> </a>

          <button className="btns" id="book__design">

            <Link to="/contact">Contact Us</Link>

          </button>

        </div>

        {/* The links section */}



        <div className="icons">

          {/* icons */}

          <img className="slack" src="./assets/slack_icon.jpg" alt="" />

          <img src="./assets/github-icon.png" alt="" />

        </div>

      </section>



      {/* footer section */}

      <footer className="foot">

        <p className="zuri">Zuri Internship</p>

        <p className="HNG">HNG Internship 9 Frontend Task</p>

        <img className="foot-img" src="./assets/Ingressive-for-good.png" alt="" />

      </footer>

    </div>

  );
}

export default App;
