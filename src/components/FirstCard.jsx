import { CDN_LINK } from "../../Common/Constant";

const FirstCard = (props) => {
  let { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    props.resData.info;

  return (
    <div className=" w-64 p-4 shadow-xl">
      <div className="img">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt="logo"
          className="card-img w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="content mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">
          <span id="rating" className="text-yellow-500 font-bold">{avgRating}</span> · {sla.slaString}
        </p>
        <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};

export default FirstCard;
