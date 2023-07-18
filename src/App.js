import "./styles.css";
import AnimePic from "./animepic.jpg";

const skillsArray = [
  {
    skillType: "HTML",
    boxColor: "blue"
  },
  {
    skillType: "Javascript",
    boxColor: "yellow"
  },
  {
    skillType: "Web Design",
    boxColor: "green"
  },
  {
    skillType: "Git and Github",
    boxColor: "red"
  },
  {
    skillType: "React",
    boxColor: "red"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src={AnimePic} alt="profile-pic" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Swapnil Sarkar </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillsArray.map((skill) => {
        return (
          <Skill
            key={skill.boxColor}
            skillType={skill.skillType}
            boxColor={skill.boxColor}
          />
        );
      })}
    </div>
  );
}

function Skill({ skillType, boxColor }) {
  return (
    <div className="skill" style={{ backgroundColor: `${boxColor}` }}>
      {skillType}
    </div>
  );
}

export default App;
