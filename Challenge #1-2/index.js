import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Dribbling",
    level: "Expert",
  },
  {
    skill: "Passing",
    level: "Advanced",
  },
  {
    skill: "Shooting",
    level: "Expert",
  },
  {
    skill: "Vision",
    level: "Advanced",
  },
  {
    skill: "Speed",
    level: "Intermediate",
  },
];

function App() {
  return (
    <div>
      <Profile
        name="Leo Messi"
        image="./messi.jpeg"
        description="Lionel Messi, Argentine footballer, considered one of the greatest ever, winner of numerous trophies, record holder for goals and assists."
      />
    </div>
  );
}

function Profile(props) {
  return (
    <div className="container">
      <div className="profile">
        <img src={props.image} alt={props.name}></img>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="about">
          <ul className="skills-list">
            {skills.map((skill) => (
              <Skill skillObj={skill} key={skill.skill} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <li
      className={`skill ${
        skillObj.level === "Expert"
          ? "expert"
          : skillObj.level === "Advanced"
          ? "advanced"
          : skillObj.level === "Intermediate"
          ? "intermediate"
          : ""
      }`}
    >
      {skillObj.skill} - <strong>{skillObj.level}</strong>
      {skillObj.level === "Expert" ? " ⭐" : null}
      {skillObj.level === "Advanced" ? " 🌟" : null}
      {skillObj.level === "Intermediate" ? " ✨" : null}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
