import React, { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight  } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import axios from 'axios';

const MovieList = () => {
  const data = [
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
    {
      title: "Movie Name",
      rating: 4.5,
      image: "/public/images/poster.jpg",
    },
  ];
  const [fetchedData, setFetchedData] = useState([])

  const fetchData = async (title= '', genre= '' , year= '')=>{
    
    try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=ec743780`);
        
        console.log(response.data);
    
    setFetchedData(response.data)
    
    } catch (error) {
        console.log("Error in fetching data", error)
    }
    
  }


  const noOfItems = 9;
  const [currentPage, setCurrentPage] = useState(1)
  const [currentItems, setCurrentItems] = useState([])
  const totalPages = Math.floor(data.length / noOfItems) +1;

    useEffect(() => {
        const pagination = ()=>{
            const lastItem = currentPage * noOfItems;
            const firstItem = lastItem - noOfItems;
            const currentItems = data.slice(firstItem, lastItem);
            setCurrentItems(currentItems)
            console.log(currentItems);
            
          }
          pagination()
    }, [currentPage])

    const changePage = (index)=>{
        if (page>=1 && page<=totalPages) {
            setCurrentItems(index)
        }
    }
    const navigatePage = (page)=>{
        if (page ==='prev') {
            if (currentPage === 1) {
                return;
            }
            setCurrentPage(currentPage-1)
        }else if(page ==='next'){
            if (currentPage === totalPages) {
                return;
            }
            setCurrentPage(currentPage+1)
        }

    }


    
  

  return (
    <div className="w-full h-max flex flex-col items-center gap-6">
                  <SearchBox onValueChange={fetchData}/>
        
      <div className="w-[50%] h-max grid grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
            <Link to="/details" key={index}>
            <div
          id={index}
            className={`w-full h-56 relative flex flex-col items-center rounded-lg justify-end cursor-pointer overflow-hidden`}
          >
            <div className="absolute w-full h-full left-0 top-0">
                <img src="/public/images/poster.jpg" alt="" className="z-0"/>
            </div>
            <div className="w-full h-max bg-[#4a55659f] px-3 z-10">
              <h2 className="font-semibold text-2xl text-gray-50">
                {item.title}
              </h2>
              <span className="flex flex-row gap-3 items-center text-lg text-gray-50">
                <FaStar className="text-yellow-500"/> {item.rating}/10
              </span>
            </div>
          </div></Link>
          
        ))}
      </div>

      <div className="w-1/2 h-max flex flex-row items-center justify-center gap-3">
        <button
          className="w-12 h-12 bg-gray-700 text-gray-50 text-2xl rounded-full flex items-center justify-center cursor-pointer"
          onClick={()=>navigatePage('prev')}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              onClick={() => changePage(index + 1)}
              className={`text-gray-700 text-2xl w-12 h-12  rounded-full flex justify-center items-center cursor-pointer ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </span>
          ))}
        <button
          className="w-12 h-12 bg-gray-700 text-gray-50 text-2xl rounded-full flex items-center justify-center cursor-pointer"
          onClick={()=>navigatePage('next')}

        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
