import React from "react";

const People = ({ names }) => (
  <>
    <section className="list-group">
      <ul>
        {!names ? (
          <li className="alert alert-warning"> "Nothing To See Here"</li>
        ) : (
          names.map((name) => {
            return <li className="list-group-item">{name}</li>;
          })
        )}
      </ul>
    </section>
  </>
);

export default People;
