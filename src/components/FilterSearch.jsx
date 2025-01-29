import React from "react";

const Filter_search = ({ cardFilter, sort, searchData }) => {
  return (
    <div className="flex flex-col justify-between w-full px-10 md:flex-row items-center gap-4 mb-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
        onClick={cardFilter}
      >
        Top Rated Restaurant
      </button>
      <select
        name=""
        id=""
        onChange={sort}
        className="border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue="default"
      >
        <option  value="default" disabled>
          Select
        </option>
        <option value="sortByRating">Sort by rating</option>
        <option value="sortByFoodName">Sort by price</option>
        <option value="SortByDistance">Sort by distance</option>
      </select>
      <input
        type="text"
        placeholder="Search Restaurants"
        onInput={searchData}
        className="border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
      />
    </div>
  );
};

export default Filter_search;
