import React from "react";
import People from "./People";
import Img from "./Img";
import Pagination from "./Pagination";

const Tricksy = () => (
  <>
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius,
            Lyco, oratione locuples, rebus ipsis ielunior.
          </p>
          <Img />
        </aside>
        <section className="col-md-8">
          <p className="lead">
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius,
            Lyco, oratione locuples, rebus ipsis ielunior."
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <People names={["Rohan", "Tom", "Zack", "G", "Dean"]} />
          <Pagination pages={[1, 2, 3, 4, 5]} />
        </section>
      </div>
      {/* <People /> */}
      {/* <Pagination /> */}
    </div>
  </>
);
export default Tricksy;
