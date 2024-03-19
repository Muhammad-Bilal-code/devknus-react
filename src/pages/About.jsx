import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const About = () => {
  const count = useRef(0);
  console.log(count);
  console.log(count.current);

  const [inpt, setInpt] = useState("");

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <h2>About</h2>
      <input
        type="text"
        value={inpt}
        onChange={(e) => setInpt(e.target.value)}
      />
      <h3>{count.current}</h3>
    </div>
  );
};

export default About;
