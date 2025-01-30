import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ImageCard from "./ImageCard";
import FirstCard from "./FirstCard";
import Filter_search from "./FilterSearch";
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mt-20 mb-5">{heading1}</h1>
      <Slider {...settings} className="my-auto">
        {img.map((element) => {
          return <ImageCard key={element.imageId} img={element.imageId} />;
        })}
      </Slider>

      <h1 className="text-2xl font-bold my-7">{heading2}</h1>
      <Slider {...settings1} className="my-auto">
        {filteredCardsData.map((res) => {
          return <FirstCard resData={res} key={res.info.id} />;
        })}
      </Slider>

      <h1 className="text-2xl font-bold my-10">{heading3}</h1>
      <div className="flex justify-between">
        <Filter_search searchData={searchData} sort={sort} cardFilter={cardFilter} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {filteredCardsData.map((e) => {
          return <FirstCard resData={e} key={e.info.id} />;
        })}
      </div>

      <OrderPage />
    </div>
  );
};

export default Body;