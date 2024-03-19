import React from "react";
import Button from "./Button";

const Card = ({ id, title, des, data }) => {
  return (
    <div className="card" id={id}>
      <div className="card-inner">
        <h2>{title}</h2>
        <p>{des}</p>
        <Button
          btnText="Read More"
          id={id}
          title={title}
          des={des}
          data={data}
        />
      </div>
    </div>
  );
};

export default Card;
