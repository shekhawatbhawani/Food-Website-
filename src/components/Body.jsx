import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ImageCard from "./ImageCard"
import FirstCard from "./FirstCard"
import Filter_search from "./FilterSearch"

import OrderPage from './OrderPage';


const Body = ({ heading1, img, heading2, heading3, cardsData }) => {
  const [filteredCardsData, setFilteredCardsData] = useState(cardsData);


  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  // Function to filter cards by rating
  function cardFilter() {
    let filterData = cardsData.filter((element) => element.info.avgRating >= 4);
    setFilteredCardsData(filterData);
  }

  // Sorting function based on different criteria
  function sort(element) {
    let duplicateArr = [...filteredCardsData];
    if (element.target.value === "sortByRating") {
      let sortData = duplicateArr.sort(
        (a, b) => b.info.avgRating - a.info.avgRating // Sort by rating descending
      );
      setFilteredCardsData(sortData);
    }
    if (element.target.value === "sortByFoodName") {
      duplicateArr.sort((a, b) => (a.info.name > b.info.name ? 1 : -1)); // Sort by name alphabetically
      setFilteredCardsData(duplicateArr);
    }
    if (element.target.value === "SortByDistance") {
      duplicateArr.sort((a, b) => {
        let A = parseInt(a.info.sla.slaString);
        let B = parseInt(b.info.sla.slaString);
        return A - B; // Sort by distance
      });
      setFilteredCardsData(duplicateArr);
    }
  }

  // Function to search data based on name
  let searchData = (e) => {
    let value = e.target.value.toLowerCase();
    if (value === "") {
      setFilteredCardsData(cardsData); // Reset data if input is empty
    } else {
      let searchData = cardsData.filter((element) =>
        element.info.name.toLowerCase().includes(value)
      );
      setFilteredCardsData(searchData);
    }
  };



  return (
    <div>
      <h1 className="px-10 py-5 mt-20 text-2xl font-bold">{heading1}</h1>
      <Slider {...settings} className="px-20 my-auto">
        {img.map((element) => {
          return <ImageCard key={element.imageId} img={element.imageId} />;
        })}
      </Slider>

      <h1 className="px-10 my-7 py-5 text-2xl font-bold">{heading2}</h1>
      <Slider {...settings1} className="px-20 my-auto">
        {filteredCardsData.map((res) => {
          return <FirstCard resData={res} key={res.info.id} />;
        })}
      </Slider>

      <h1 className="px-10 py-5 my-10 text-2xl font-bold">{heading3}</h1>
      <div className="flex justify-between">
        <Filter_search searchData={searchData} sort={sort} cardFilter={cardFilter} />
      </div>

      <div className="flex justify-center flex-wrap px-10 m-auto my-10 gap-5 w-[90%]">
        {filteredCardsData.map((e) => {
          return <FirstCard resData={e} key={e.info.id} />;
        })}
      </div>
      <div className="flex justify-center flex-wrap px-10 m-auto my-10 gap-5 w-[90%]">
        {filteredCardsData.map((e) => {
          return <FirstCard resData={e} key={e.info.id} />;
        })}
      </div>


      <OrderPage />
    </div>
  );
};

export default Body;
