import front from "./../../images/fc.png";
import bag2 from "./../../images/main.png";
import back from "./../../images/bc.png";
import Input from "../input/Input";
import c from "./../../images/circle.svg";
import { useState } from "react";
const Main = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [Cv, setCv] = useState(0);
  const Data = (txt, Num, M, Y, cv) => {
    setName(txt);
    setNumber(Num);
    setMonth(M);
    setYear(Y);
    setCv(cv);
  };
  return (
    <div
      className=" bg-no-repeat flex flex-row bg-fixed absolute h-full "
      style={{ backgroundImage: `url(${bag2})` }}
    >
      <div>
        <div
          style={{ backgroundImage: `url(${front})` }}
          className="w-[350px] h-[190px] mt-[150px] ml-[200px] flex flex-col bg-no-repeat rounded-lg  "
        >
          <img src={c} alt="c" className=" w-20 h-11 mt-5 ml-5" />
          <p className=" text-white font-bold ml-14 text-xl mt-5 ">{number}</p>
          <div className=" flex flex-row justify-around mt-8 text-white font-mono ">
            <p>{name}</p>
            <p>
              {month}/{year}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${back})` }}
          className="w-[350px] h-[190px] mt-[70px] ml-[300px] bg-cover flex flex-col bg-no-repeat rounded-lg  "
        >
          <p className="flex justify-end mr-12 mt-[85px] text-white">
            {Cv ? Cv : "0 0 0"}
          </p>
        </div>
      </div>
      <Input onAddData={Data} />
    </div>
  );
};
export default Main;
