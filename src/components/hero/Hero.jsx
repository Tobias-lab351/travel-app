import "./Hero.css";
import video from "../../assets/maldivesVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="text-7xl font-bold">First Class Travel</h1>
        <h2 className="font-bold">Top 1% Locations Worldwide</h2>
        <form className="form flex bg-gray-300 justify-between items-center border-solid border-slate-200 rounded p-2 max-w-2xl w-full my-0 mx-auto">
          <div className="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Destinations"
              className="bg-transparent border-transparent w-96 text-xl focus:outline-none text-black ml-2"
            />
          </div>
          <div className="">
            <button className="">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
