import React, { useEffect } from "react";

function FunCounter({ number }) {
  useEffect(() => {
    console.log("mount function....");
  });
  useEffect(() => {
    console.log("uodate function...");

    // return () => {
    //   console.log("remove function");
    // };
  }, [number]);
  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}

export default FunCounter;
