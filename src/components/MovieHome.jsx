import React, { useState } from "react";
import SearchBox from "./SearchBox";
import MovieList from "./MovieList";

const MovieHome = () => {
  
  return (
    <div className="w-full h-max flex flex-col items-center gap-6">
      

      <div className="w-full h-max flex flex-col items-center">
          <MovieList/>
      </div>
    </div>
  );
};

export default MovieHome;
