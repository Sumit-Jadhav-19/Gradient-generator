import React, { useState } from "react";
import { Select, Spin } from "antd";

export default function Navbar({
  limit,
  handleLimit,
  handleGenerateButton,
  handledegree,
}) {
  const [val, setVal] = useState(limit);
  const [degreeOption, setDegreeOption] = useState("random");
  const [degree, setDegree] = useState(0);
  const handleDegreeOption = (value) => {
    value.toUpperCase() == "CUSTOM" ? setDegree(10) : setDegree(0);
    setDegreeOption(value);
  };
  return (
    <div>
      <div className="w-full p-2 bg-white fixed top-0 shadow-xl border-1 border-b-gray-300 flex items-center justify-between z-2">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="text-2xl">🎨</span>
          <h2 className="text-black text-lg md:text-3xl">Gradient generator</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex items-center gap-2 text-lg">
            <label className="text-md">Degree:</label>
            <Select
              className="w-fit text-lg"
              onChange={handleDegreeOption}
              defaultValue={"Random"}
            >
              <Select.Option value="random">Random</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>
          </div>
          <input
            id="degree"
            name="degree"
            type="text"
            required
            autoComplete="degree"
            className={`${
              degreeOption == "random" ? "hidden" : "block"
            } w-full rounded-md bg-white/5 px-3 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black/50 sm:text-sm/6 border-1 border-gray-300`}
            onChange={(event) => setDegree(event.target.value)}
            value={degree}
            maxLength={3}
          />
          <input
            id="email"
            name="email"
            type="text"
            required
            autoComplete="email"
            className="block w-full rounded-md bg-white/5 px-3 text-xl text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black/50 sm:text-sm/6 border-1 border-gray-300"
            onChange={(event) => setVal(event.target.value)}
            value={val}
            maxLength={5}
          />
          <button
            type="button"
            className="w-full text-lg text-white py-1 px-4 rounded-md cursor-pointer hover:scale-105 transition-scale duration-150"
            onClick={() => {
              handleLimit(val);
              handleGenerateButton();
              handledegree(degree);
            }}
            style={{ background: "linear-gradient(205deg, #442023, #0c0e13)" }}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
