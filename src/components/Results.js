import React from "react";
import Result from "./Result";

const Results = ({ movies }) => {
  return (
    <section className="results">
      {movies.map((result, index) => {
        return <Result key={index} result={result} />;
      })}
    </section>
  );
};

export default Results;
