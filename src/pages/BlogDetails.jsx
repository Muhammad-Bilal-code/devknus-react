import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  const { data } = location.state;
  console.log(data);
  return (
    <div className="b-detail">
      {/* <h1>Blog Details</h1> */}
      <span>
        <h2>Blog Number : </h2>
        {param.id}
      </span>
      <span>
        <h2>Blog Title : </h2>
        {param.blogTitle}
      </span>
      <span>
        <h2>Blog Desc : </h2>
        {data.para}
      </span>
      <span>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </span>
    </div>
  );
};

export default BlogDetails;
