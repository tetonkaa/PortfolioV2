import "./projects.css";
import Photo from '../../images/projectPhotos/d3fine.png'
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
            <h1>Case 1</h1>
            <img src={Photo}/>
            <p>D3fine is a React based app that allows users to create customized personality assessments that can be shared to other users. Full CRUD technology with Firebase authentication embedded.</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Case 2</h1>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Case 2</h1>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Case 2</h1>
          </div>
        );
      case 5:
        return (
          <div>
            <h1>Case 2</h1>
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
            {currentProject < 5 && (
              <button onClick={handleNextClick}>Next</button>
            )}
            {currentProject > 1 && (
              <button onClick={handleBackClick}>BACK</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
