import React, { useState } from "react";
import { Select, Drawer, Button } from "antd";

export default function Navbar({
  limit,
  handleLimit,
  handleGenerateButton,
  handledegree,
}) {
  const [val, setVal] = useState(limit);
  const [degreeOption, setDegreeOption] = useState("random");
  const [degree, setDegree] = useState(0);
  const [open, setOpen] = useState(false);

  const handleDegreeOption = (value) => {
    value.toUpperCase() === "CUSTOM" ? setDegree(10) : setDegree(0);
    setDegreeOption(value);
  };

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleGenerate = () => {
    handleLimit(val);
    handleGenerateButton();
    handledegree(degree);
  };

  return (
    <div>
      <div className="w-full p-2 py-3 bg-white fixed top-0 shadow-xl border-b border-gray-300 flex items-center justify-between z-2">
        <div className="flex flex-row items-center gap-2">
          <span className="text-2xl">🎨</span>
          <h2 className="text-black text-2xl">Gradient generator</h2>
        </div>

        {/* Desktop (md and above) */}
        <div className="hidden md:flex flex-row gap-3 items-center">
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

          {degreeOption === "custom" && (
            <input
              name="degree"
              type="text"
              required
              className="w-full p-1 rounded-md bg-white/5 px-3 text-xl text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black/50 sm:text-sm/6 border-1 border-gray-300"
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              maxLength={3}
            />
          )}

          <input
            name="limit"
            type="text"
            required
            className="w-full p-1 rounded-md bg-white/5 px-3 text-xl text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black/50 sm:text-sm/6 border-1 border-gray-300"
            onChange={(e) => setVal(e.target.value)}
            value={val}
            maxLength={5}
          />

          <button
            type="button"
            className="text-lg text-white py-1 px-4 rounded-md hover:scale-105 transition-transform duration-150 cursor-pointer"
            onClick={handleGenerate}
            style={{
              background: "linear-gradient(153deg, #9e47c2, #1e4c6f)",
            }}
          >
            Generate
          </button>
        </div>

        {/* Mobile button (hamburger) */}
        <button
          onClick={showDrawer}
          className="block md:hidden me-3 py-1.5 px-4 rounded-lg border-1 border-gray-300"
          type="text"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer onClose={onClose} open={open}>
        <div className="flex flex-col gap-4">
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

          {degreeOption === "custom" && (
            <input
              name="degree"
              type="text"
              required
              className="w-full p-1 rounded-md bg-white/5 px-3 text-xl text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black/50 sm:text-sm/6 border-1 border-gray-300"
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              maxLength={3}
            />
          )}

          <input
            name="limit"
            type="text"
            required
            className="w-full p-1 rounded-md bg-white/5 px-3 text-xl text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black/50 sm:text-sm/6 border-1 border-gray-300"
            onChange={(e) => setVal(e.target.value)}
            value={val}
            maxLength={5}
          />

          <button
            type="button"
            className="w-full cursor-pointer text-lg text-white py-1 px-4 rounded-md hover:scale-105 transition-transform duration-150"
            onClick={() => {
              onClose();
              handleGenerate();
            }}
            style={{
              background: "linear-gradient(153deg, #9e47c2, #1e4c6f)",
            }}
          >
            Generate
          </button>
        </div>
      </Drawer>
    </div>
  );
}
