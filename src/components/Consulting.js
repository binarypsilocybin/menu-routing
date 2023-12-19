import React from "react";
import { Link } from "react-router-dom";

function Consulting() {
  return (
    <div>
      <h1>Hi, I am the Consulting module..</h1>
      <p>
        Go to <Link to="/">Return to all modules</Link>
      </p>
    </div>
  );
}

export default Consulting;
