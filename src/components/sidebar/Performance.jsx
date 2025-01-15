import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Piechart from "./Piechart";
import { useSelector } from "react-redux";

const Performance = () => {
  const darkMode = useSelector(state => state.nav.darkMode);
  return (
    <div className={`${darkMode?'darkMode1':''} bg-white w-[80%] my-4 py-3 px-3 flex flex-col justify-between`}>
      <div className="flex w-[100%] justify-between">
        <div>
          <p className="font-[500] text-[13px]">Todays Task</p>
          <p className="text-[21px] font-[500]">11</p>
        </div>
        <div>
          <InfoIcon style={{ color: "#BDBDBD" }} />
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-center flex-col items-center w-[100%]">
        <Piechart />
        <div className="w-[100%] flex gap-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#3F9142] rounded-full"></div>
            <p className="text-[#3F9142] font-bold text-[13px]">Pending</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#142e15] rounded-full"></div>
            <p className="text-[#142e15] font-bold text-[13px]">Done</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Performance;
