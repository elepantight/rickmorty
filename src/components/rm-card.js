import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { name, species, gender, image, id } = props;
  return (
    <div className="col-sm-6 rm-card-column">
      <div className="card rm-card">
        <h1>{name}</h1>
        <img className="rm-image" src={image} alt={"Card"} />
        <br />
        <b>{species}</b>
        <br />
        <b>{gender}</b>

        <br />
        <br />
        <br />
        <Link to={`/card-specific/${id}`} className="btn-card">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
