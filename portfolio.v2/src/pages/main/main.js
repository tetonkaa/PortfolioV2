import "./main.css";
import face from "../../images/meHead.png";

export default function Main() {
  return (
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
          [hello <span className="coloredText">there</span>]
        </h3>
      </div>
      <div className="mainContainer">
        <div class="navContainer">
          <div className="me">
            <div className="profilePicture">
              <img src={face} />
            </div>
          </div>
          <div className="projects">
            <a>
              <h1 className="projectsLink">Projects</h1>
            </a>
          </div>
          <div className="contact">
            <a><h1>Contact</h1></a>
          </div>
        </div>
      </div>
    </div>
  );
}
