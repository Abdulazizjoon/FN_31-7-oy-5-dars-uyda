import React, { useRef, useState } from "react";
import usetheme from "../../store/usetheme";
function Theme() {
    let { theme, changetheme } = usetheme();
    let [them,setThem]=useState('')

    function dark() {
        changetheme()
        setThem(theme)
        console.log(them);
    }
    
  return (
    <div
      className={`${theme === "light" ? "bg-[#000]" : "bg-white"} w-full h-52`}
    >
      <div className="mx-auto container w-3xs">
        <h2 className={them == "light" ? "text-black" : "text-white"}>
          1-mashq
        </h2>
        <p className={them == "light" ? "text-black" : "text-white"}>{theme}</p>
        <button
          className={them == "light" ? "text-black" : "text-white"}
          onClick={dark}
        >
          dark mode
        </button>
      </div>
    </div>
  );
}

export default Theme;
