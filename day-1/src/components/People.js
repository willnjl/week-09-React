import React from "react";

let names = [
  "James P. Sullivan",
  "Mike Wazowski",
  "Boo",
  "Randall Boggs",
  "Roz",
  "Fungus",
];

const People = () => (
  <>
    <section className="list-group">
      <ul>
        {names.map((name) => {
          return <li className="list-group-item">{name}</li>;
        })}
      </ul>
    </section>
  </>
);

export default People;
