import "./main.css";
import Nav from "../../components/nav/nav";
import face from "../../images/meHead.png";

export default function Main() {
  return (
    <>
    <Nav/>
    <div className="main">
      <div className="introText">
        <h1>
          Angel <span className="coloredText">Puente</span>
        </h1>
        <h3>
          Fullstack Engineer | Designer | Tech-
          <span className="coloredText">lover</span>
        </h3>
        <h3>
          [<span className="coloredText">hello</span> there]
        </h3>
      </div>
      <div className="mainContainer">
        <div class="navContainer">
          <div className="me">
            <div className="profilePicture">
                <a href="/About">
              <img src={face} />
              </a>
            </div>
          </div>
          <div className="bottomScreens">
            <a href="/Projects">
              <h1 className="projectsLink">Projects</h1>
            </a>
          </div>
          <div className="contact">
            <a href="/Contact"><h1>Contact</h1></a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
