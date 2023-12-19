import React from "react";
import { Link } from "react-router-dom";

function Comercial() {
  return (
    <div>
      <h1>Hi, I am the Comercial module..</h1>
      <p>
        Go to <Link to="/">Return to all modules</Link>
      </p>
    </div>
  );
}

export default Comercial;
