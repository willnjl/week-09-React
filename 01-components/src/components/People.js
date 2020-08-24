import React from "react";

const People = ({ names }) => (
  <>
    <section className="list-group">
      <ul>
        {!names ? (
          <li className="alert alert-warning" key={0}>
            {" "}
            "Nothing To See Here"
          </li>
        ) : (
          names.map((name, index) => (
            <li key={index} className="list-group-item">
              {name}
            </li>
          ))
        )}
      </ul>
    </section>
  </>
);

export default People;
