import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p className="text-lg font-semibold text-theme-100">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-theme-100 border-none"><FaArrowRight></FaArrowRight></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
