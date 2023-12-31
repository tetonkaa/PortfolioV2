import "./about.css";
import ReturnButton from "../../components/returnButton/return";
export default function About() {
  return (
    <div className="about">
      <div className="aboutBorder">
        <div className="aboutContainer">
          <div className="content1">
            <h1>About</h1>
            <p>
              I'm a Software Engineer with a knack for making code do cool
              things. I've danced my way through the ins and outs of React,
              JavaScript, and Node.js, turning lines of code into sleek
              applications that not only work but look good too. Beyond the
              coding grind, I'm into the whole puzzle-solving vibe of data
              structures—kind of like cracking a code mystery for fun.
              <br></br>
              <br></br>
              But it's not all about the code; I'm also the guy who makes sure
              your app looks snazzy. I've got a bag of tricks with various CSS
              frameworks, making sure everything is smooth, stylish, and
              user-friendly. In a nutshell, I'm your go-to person for turning
              tech jargon into awesome software that just works and looks pretty
              darn good doing it.
            </p>
          </div>
          <div className="content2">
            <a href="/">
              <button>[Home]</button>
            </a>
            <a href="/Projects">
              <button>[Projects]</button>
            </a>
            <a href="/Contact">
              <button>[Contact]</button>
            </a>
          </div>
        </div>
      </div>
      <ReturnButton />
    </div>
  );
}
