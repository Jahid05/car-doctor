import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../../../../assets/images/banner/1.jpg";
import image2 from "../../../../assets/images/banner/2.jpg";
import image3 from "../../../../assets/images/banner/3.jpg";
import image4 from "../../../../assets/images/banner/4.jpg";
import image5 from "../../../../assets/images/banner/5.jpg";
import image6 from "../../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative h-[700px] w-full">
        <img src={image5} className="w-full h-full rounded-2xl" />
        <div className="absolute top-0  flex items-center h-full w-full bg-gradient-to-r from-[rgba(8,8,8,0.69)] to-[rgba(0,0,0,0.32)] rounded-2xl">
          <div className="text-white space-y-9 ml-32 w-1/3">
            <h1 className="text-6xl font-bold">
              Affordable <br /> Price For Car Servicing
            </h1>
            <p className="text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-6">
            <button className="btn bg-theme-100 normal-case text-lg">Discover More</button>
            <button className="btn btn-outline border-theme-100 text-theme-100 normal-case text-lg">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn bg-theme-100 md:text-lg btn-circle border-none mr-7"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn bg-theme-100 md:text-lg btn-circle border-none"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative h-[700px] w-full">
        <img src={image2} className="w-full h-full rounded-2xl" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn bg-theme-100 md:text-lg btn-circle border-none mr-7"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn bg-theme-100 md:text-lg btn-circle border-none"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative h-[700px] w-full">
        <img src={image3} className="w-full h-full rounded-2xl" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn bg-theme-100 md:text-lg btn-circle border-none mr-7"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn bg-theme-100 md:text-lg btn-circle border-none"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative h-[700px] w-full">
        <img src={image4} className="w-full h-full rounded-2xl" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn bg-theme-100 md:text-lg btn-circle border-none mr-7"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide5"
            className="btn bg-theme-100 md:text-lg btn-circle border-none"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative h-[700px] w-full">
        <img src={image1} className="w-full h-full rounded-2xl" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn bg-theme-100 md:text-lg btn-circle border-none mr-7"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide6"
            className="btn bg-theme-100 md:text-lg btn-circle border-none"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative h-[700px] w-full">
        <img src={image6} className="w-full h-full rounded-2xl" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn bg-theme-100 md:text-lg btn-circle border-none mr-7"
          >
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn bg-theme-100 md:text-lg btn-circle border-none"
          >
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
