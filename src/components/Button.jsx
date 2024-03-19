import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ btnText, id, title, data }) => {
  console.log(data);
  const navigate = useNavigate();
  //   const handleGoToAbout = () => {
  //     navigate("./about");
  //   };
  const handleGo = () => {
    const cleanTitle = title.replace(/\s+/g, "-").toLowerCase(); // Replace spaces with dashes and convert to lowercase

    navigate(`/blog/${id}/${cleanTitle}`, { state: { data } });
  };

  return (
    <button className="my-btn" id={id} onClick={handleGo}>
      {btnText}
    </button>
  );
};

export default Button;
