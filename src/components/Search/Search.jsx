import "./Search.css";
import gold from "../../assets/gold.png";

export default function Search() {
  return (
    <div className="search ">
      <div className="container">
        <div className="left-container">
          <h2 className="font-bold">LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
          <p>
            The Voyager Beach Resort is nautical themed. From the bugle that is
            played when you enter the gate to the reception area which is
            fashioned after the bow of a ship. The resort blends into the
            natural environment and like so many of the hotels in Mombasa, has
            taken great care to respect their natural setting. The makuti (dried
            palm fronds) thatched roof have been designed to make the most of
            natural ventilation.
          </p>
          <div className="search-col-2 ">
            <div className="box">
              <div>
                <img src={gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div className="titles">
                <h3 className="font-semibold">WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW.</p>
              </div>
            </div>
            <div className="box box-2">
              <div>
                <h3 className="font-semibold">NO ONE INCLUDES MORE</h3>
                <p>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Pachages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="promo">
            <h4 className="save font-semibold">GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination:</label>
              <select>
                <option value="default">Choose Destination</option>
                <option value="1">Kisumu</option>
                <option value="1">Nakuru</option>
                <option value="1">Nairobi</option>
                <option value="1">Mombasa</option>
                <option value="1">Naivasha</option>
                <option value="1">Eldoret</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In:</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out:</label>
                <input type="date" />
              </div>
            </div>
            <button type="submit" className="">
              Rates and Availabilities
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
