import "./Field.css";

const Field = ({ name, desc, reward }) => {
  return (
    <div className="fieldContainer">
      <div className="subFieldContainer">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="rewards">
        {reward}
        <img src="./MAG design.png" className="symbol" />
      </div>
    </div>
  );
};

export default Field;
