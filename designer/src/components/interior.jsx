import React from "react";
import {
  BsFillCalendar2DateFill,
  BsArrowRight,
  BsFillMapFill,
} from "react-icons/bs";

function Interior(props) {
  return (
    <div className="text-slate-600 font-light mb-20">
      <p className="text-2xl mb-3 font-extrabold text-black">{props.name}</p>
      <hr />
      <p className="my-10 flex items-center gap-3">
        <BsFillCalendar2DateFill /> {props.date}
      </p>
      <p className="flex items-center gap-3 text-2xl mb-3 hover:text-[#ff565b] transition duration-150 font-extrabold text-black">
        {props.workplace} <BsArrowRight />
      </p>
      <div className="w-[40vw]">
        <p className="flex items-center gap-3">
          <BsFillMapFill /> {props.location}
        </p>
      <div className="flex justify-end">
        <p className="w-64 text-right">{props.descriptionStart}</p>
      </div>        
           <p>{props.descriptionEnd}</p>
      </div>
    </div>
  );
}

export default Interior;
