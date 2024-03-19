import React from "react";
import Card from "../components/Card";

const Blogs = () => {
  let blogs = [
    {
      id: 1,
      title: "Blog 01",
      para: "abc",
    },
    {
      id: 2,
      title: "Blog 02",
      para: "def",
    },
    {
      id: 3,
      title: "Blog 03",
      para: "ghi",
    },
    {
      id: 4,
      title: "Blog 04",
      para: "jkl",
    },
    {
      id: 5,
      title: "Blog 05",
      para: "mno",
    },
    {
      id: 6,
      title: "Blog 06",
      para: "pqr",
    },
  ];
  return (
    <div className="blog-main">
      {blogs.map((val, i) => (
        <Card
          key={val.id}
          id={val.id}
          title={val.title}
          des={val.para}
          data={val}
        />
      ))}
    </div>
  );
};

export default Blogs;
