import "./style.css";
import userImage from "./user-5.jpg";

function App() {
  return (
    <div className="app">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="logo-data">
        <Logo />
        <Data />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}

function Logo() {
  return <img src={userImage} alt="User" className="image" />;
}

function Data() {
  return (
    <div>
      {userData.map((user) => (
        <User
          name={user.name}
          age={user.age}
          profession={user.profession}
          mobileNo={user.mobileNo}
          key={user.id}
        />
      ))}
    </div>
  );
}

function User({ name, age, profession, mobileNo }) {
  return (
    <div>
      <p>
        Name :- <span className="user-data">{name}</span>
      </p>
      <p>
        Age :- <span className="user-data">{age}</span>
      </p>
      <p>
        Profession :- <span className="user-data">{profession}</span>
      </p>
      <p>
        Contact :- <span className="user-data">{mobileNo}</span>
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-div">
      <h3>Skills :-</h3>
      <div className="list">
        {skills.map((skill, index) => (
          <Tech skill={skill} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

function Tech({ skill, index }) {
  return (
    <p className="list-items" style={{ backgroundColor: `${colors[index]}` }}>
      {skill}
    </p>
  );
}

const userData = [
  {
    id: 1,
    name: "Jonas Schemdtman",
    age: 23,
    profession: "Software Developer",
    mobileNo: 1234567890,
  },
];

const colors = [
  "red",
  "blue",
  "orange",
  "brown",
  "green",
  "violet",
  "pink",
  "purple",
  "black",
];

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "BOOSTRAP",
  "PUG",
  "NODEJS",
  "MONGODB",
  "EXPRESSJS",
  "GSAP",
];

export default App;
