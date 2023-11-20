import "./projects.css";
import d3fine from "../../images/projectPhotos/d3fine.png";
import ship from "../../images/projectPhotos/ShipVShip.png";
import StopJockin from "../../images/projectPhotos/StopJockin.png";
import SVGeezy from "../../images/projectPhotos/SVGeezy.png";
import { useState, useEffect } from "react";
export default function Projects() {
  const [currentProject, setCurrentProject] = useState(1);

  const handleNextClick = (e) => {
    e.preventDefault(e);
    setCurrentProject(currentProject + 1);
  };
  const handleBackClick = (e) => {
    e.preventDefault();
    setCurrentProject(currentProject - 1);
  };

  const renderCurrentProject = () => {
    switch (currentProject) {
      case 1:
        return (
          <div>
            <h1>D3fine</h1>
            <a href="google.com"><img src={d3fine} /></a>
            <p>
              D3fine is a React based app that allows users to create customized
              personality assessments that can be shared to other users. Full
              CRUD technology with Firebase authentication embedded.
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Stop Jockin</h1>
            <a href="google.com"><img src={StopJockin} /></a>
            <p>
              Stop Jockin is a platform for New Orleans local business owner , 'Joc' , used to display many of his business ventures! This app utilizes a React front-end framework, connected to a backend API that allows admin users to manage rendered data.
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>SVGeezy</h1>
            <a href="google.com"><img src={SVGeezy} /></a>
            <p>
              Svgeezy is a Scalable Vector Graphic (SVG) gallery created through an Angular Framework. The goal for this app is to amass a collection of SVG images with direct svg pathing for devs to use for their projects. .
            </p>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Ship Game</h1>
            <a href="google.com"><img src={ship} /></a>
            <p>
              Topdown player vs player space shooter made with GML. Controls: Player1- WSAD for movement, R for primary fire and space for secondary. Player2- Directional Keys for movement, primary fire with M.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="projects">
      <div className="projectsBorder">
        <div className="projectsContainer">
          <div className="currentProject">{renderCurrentProject()}</div>
          <div className="projectButtons">
            {currentProject < 4 && (
              <button onClick={handleNextClick}>[Next]</button>
            )}
            {currentProject > 1 && (
              <button onClick={handleBackClick}>[BACK]</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
