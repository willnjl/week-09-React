import React from "react";

const Basket = ({ items }) => (
  <>
    <table className="table-bordered">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} scope="row">
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
export default Basket;
