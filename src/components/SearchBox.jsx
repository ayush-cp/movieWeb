import React, {useState} from 'react'
import { IoSearch } from "react-icons/io5";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";


const SearchBox = ({onValueChange}) => {
    const [date, setDate] = useState(null);
    const [search, setSearch] = useState('')
    const [genre, setGenre] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);
        
        onValueChange({search: e.target.value, genre, date})
    }
    const handleGenreChange = (e) => {
        setGenre(e.target.value)
        console.log(e.target.value);

        onValueChange({search, genre: e.target.value, date})
    }
    const handleDateChange = (e) => {
        const year = e.year();
        setDate(year)
        console.log(year);

        onValueChange({search, genre, date: year})
    }


  const checkYear = (currentYear) => {
    const year = currentYear.year();
    return year >= 1950 && year <= 2025; 
  };
  return (
    <div className="w-full h-max flex flex-row gap-6 justify-center">
          <div className="flex flex-row items-center ">
            <input
              type="search"
              placeholder="Search Movies"
              value={search}
              onChange={handleSearch}
              className="h-12 w-[35vw] px-4 py-1 outline-none text-gray-800 text-base bg-gray-100 border-2 border-gray-400 rounded-l-lg"
            />
            <button className="h-full w-max px-3 bg-green-600 flex items-center justify-center rounded-r-lg cursor-pointer">
              <IoSearch className="text-2xl text-white " />
            </button>
          </div>

          <select value={genre} onChange={handleGenreChange} className="h-12 w-24 bg-gray-100 border-2 border-gray-200 rounded-md flex flex-row items-center justify-center outline-none cursor-pointer p-2">
            <option value="">Select</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>
          <div className="h-12 w-24 rounded-md flex flex-row items-center justify-center outline-none cursor-pointer">
            <Datetime
              value={date}
              onChange={handleDateChange}
              viewMode="years"
              dateFormat="YYYY"
              timeFormat={false}
              inputProps={{
                placeholder: 'Year', 
                className: 'p-2 w-full border bg-gray-100 border-gray-300 rounded-md outline-none text-center' 
              }}
              isValidDate={checkYear}
            />
          </div>
        </div>
  )
}

export default SearchBox