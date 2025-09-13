import { message } from "antd";
import React, { useEffect, useState } from "react";

export default function Home({ limit, handleGenerateButton, degree }) {
  const [color, setColor] = useState([]);

  const getHexaNo = () => {
    const random = Math.floor(Math.random() * 0xffffff);
    return random.toString(16).padStart(6, "0");
  };

  const generateColor = () => {
    const newColors = [];
    limit === 0 ? 20 : limit;
    for (let i = 0; i < limit; i++) {
      const objColors = {
        deg: degree === 0 ? Math.floor(Math.random() * 360) + 1 : degree,
        color1: getHexaNo(),
        color2: getHexaNo(),
      };
      newColors.push(objColors);
    }
    setColor(newColors);
  };

  useEffect(() => {
    generateColor();
  }, [limit, handleGenerateButton]);
  const handleCopy = (col) => {
    const gradientCSS = `background: linear-gradient(${col.deg}deg, #${col.color1}, #${col.color2})`;
    navigator.clipboard
      .writeText(gradientCSS)
      .then(() => {
        message.success("Gradient copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2 h-[93vh] overflow-y-auto py-3">
        {color.map((col, index) => (
          <div
            key={index}
            className="p-2 shadow-md rounded-md border-1 border-gray-200 bg-white hover:shadow-2xl hover:scale-105 transition-scale duration-200"
          >
            <div
              className="w-full h-[150px] rounded-sm relative group z-1"
              style={{
                background: `linear-gradient(${col.deg}deg, #${col.color1}, #${col.color2})`,
              }}
            >
              <button
                type="button"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-black px-2 py-1 text-xs rounded shadow-md cursor-pointer "
                onClick={() => handleCopy(col)}
              >
                Copy
              </button>
            </div>
            <div className="text-center text-[1em] mt-2">
              <p>
                background: linear-gradient({col.deg}deg, #{col.color1}, #
                {col.color2})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
