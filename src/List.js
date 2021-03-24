import React from "react";
import { data } from "./data";

const List = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div className="w3-container">
      <h2>Avatar List</h2>
      {people.map((person) => {
        const { id, name, img, job } = person;
        return (
          <div key={id}>
            <ul className="w3-ul w3-card-4">
              <li className="w3-bar">
                <span
                  onClick={() => removeItem(id)}
                  className="w3-bar-item w3-button w3-white w3-xlarge w3-right"
                >
                  ×
                </span>
                <img
                  src={img}
                  alt=""
                  className="bg w3-bar-item w3-circle w3-hide-small"
                  style={{ width: "85px" }}
                />
                <div className="w3-bar-item">
                  <span className="w3-large">{name}</span>
                  <br></br>
                  <span>{job}</span>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default List;
