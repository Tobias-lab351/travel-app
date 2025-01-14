import "./Search.css";
import gold from "../../assets/gold.png";

export default function Search() {
  return (
    <div className="search">
      <div className="container grid grid-cols-2 w-100">
        <div className="left-container w-50 bg-zinc-100 px-6 ">
          <h2 className="font-bold pb-3 text-center mt-9">
            LUXURY INCLUDED VACATION FOR TWO PEOPLE
          </h2>
          <p className="text-slate-700">
            The Voyager Beach Resort is nautical themed. From the bugle that is
            played when you enter the gate to the reception area which is
            fashioned after the bow of a ship. The resort blends into the
            natural environment and like so many of the hotels in Mombasa, has
            taken great care to respect their natural setting. The makuti (dried
            palm fronds) thatched roof have been designed to make the most of
            natural ventilation.
          </p>
          <div className="search-col-2 ">
            <div className="box flex flex-row justify-between items-center">
              <div className="p-6">
                <img src={gold} alt="/" className="mr-16" />
              </div>
              <div className="p-2 text-center">
                <h3 className="font-semibold">WORLD'S LEADING</h3>
                <p className="text-gray-500 text-sm ">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW.
                </p>
              </div>
            </div>
            <div className="box "></div>
          </div>
        </div>
        <div className=" w-50 bg-zinc-100 ">
          <div className="right-container w-full relative justify-between">
            <form className=" flex flex-col w-50 px-5 gap-3 mt-10">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="border-2 border-collapse rounded h-10 outline-none focus:bg-zinc-400"
              />
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                name="country"
                placeholder="Your country"
                className="border-2 border-collapse  rounded h-10 outline-none focus:bg-zinc-400"
              />
              <label htmlFor="">City:</label>
              <input
                type="text"
                placeholder="Name of the city"
                className="border-2 border-collapse rounded h-10 outline-none focus:bg-zinc-400"
              />
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                name="date"
                className="border-2 border-collapse rounded h-10 outline-none focus:bg-zinc-400"
              />
              <button type="submit" className="font-semibold">
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
