import "./Selects.css";

import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import maldives3 from "../../assets/maldives2.jpg";
import keywest from "../../assets/keywest.jpg";

import SelectsImg from "../selectsimg/SelectsImg";

export default function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={borabora} text="Rusinga Beach" />
        <SelectsImg bgImg={borabora2} text="Diani Resort" />
        <SelectsImg bgImg={maldives} text="Dunga Beach" />
        <SelectsImg bgImg={maldives2} text="Nyali Beach" />
        <SelectsImg bgImg={maldives3} text="Port Victoria" />
        <SelectsImg bgImg={keywest} text="Pirates" />
      </div>
    </div>
  );
}
