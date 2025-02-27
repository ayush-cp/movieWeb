import React from "react";
import { FaStar  } from "react-icons/fa";


const MovieDetails = () => {
  return (
    <div className="w-full min-h-screen h-max flex items-center justify-center bg-gray-200">
      <div className="w-1/2 h-full flex flex-col items-center gap-2 bg-gray-100 p-4">
        <img
          src="/public/images/poster.jpg"
          alt=""
          className="w-48 h-64 rounded-md"
        />
        <h1 className="text-2xl font-semibold text-gray-800">Movie Title</h1>
        <span className="text-lg flex flex-row gap-2 text-gray-800"><FaStar className="text-yellow-500 text-2xl"/> 9.5/10</span>
        <span className="text-lg text-gray-800">Genre: Action</span>
        <span className="text-lg text-gray-800">Year: 2021</span>
        <p className="text-base text-gray-800 font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam
          enim doloribus dicta suscipit quod nesciunt iure minima tempora magni
          quis fugiat, voluptates, officia qui, sunt illum autem cumque. Amet
          sunt, aut iste explicabo fugiat perferendis deleniti ad facere
          repellat ab culpa quibusdam? Distinctio, reprehenderit mollitia
          nostrum autem pariatur nihil.
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
