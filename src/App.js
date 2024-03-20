import React, { useState } from "react";

const ToyRobot = () => {
  const [position, setPosition] = useState({ x_axis: 0, y_axis: 0 });
  const [warning, setWarning] = useState(false);

  const moveUp = () => {
    const nextPosition = { ...position, y_axis: position.y_axis + 1 };
    updatePosition(nextPosition);
  };

  const moveDown = () => {
    const nextPosition = { ...position, y_axis: position.y_axis - 1 };
    updatePosition(nextPosition);
  };

  const moveRight = () => {
    const nextPosition = { ...position, x_axis: position.x_axis + 1 };
    updatePosition(nextPosition);
  };

  const moveLeft = () => {
    const nextPosition = { ...position, x_axis: position.x_axis - 1 };
    updatePosition(nextPosition);
  };

  function updatePosition(nextPosition) {
    const isWithinBorder = (position) => {
      return (
        position.x_axis >= 0 &&
        position.x_axis < 5 &&
        position.y_axis >= 0 &&
        position.y_axis < 5
      );
    };

    if (isWithinBorder(nextPosition)) {
      setPosition(nextPosition);
      setWarning(false);
    } else {
      setWarning(true);
    }
    return nextPosition;
  }

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-500 h-screen rounded-md flex justify-center items-center flex-col  p-2">
      <h1 className="text-center text-2xl font-bold mb-4 text-white py-3 underline">
        Toy Robot Simulator
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row sm:w-[80%] justify-center items-center border-2 rounded-md p-7 shadow-md ">
        <div
          className={`grid grid-cols-5 gap-1 w-full md:w-[400px] rounded-lg h-full md:h-[400px] border-[6px] mx-auto  p-2 border-black ${
            warning && " border-red-500 "
          }`}
        >
          {Array.from({ length: 5 })
            .map((index, rowIndex) =>
              Array.from({ length: 5 }).map((index1, colIndex) => (
                <input
                  key={`${rowIndex}-${colIndex}`}
                  type="text"
                  readOnly
                  className={`flex justify-center items-center outline-none  h-full p-1 rounded-md ${
                    position.x_axis === colIndex && position.y_axis === rowIndex
                      ? "bg-blue-500 text-transparent rounded-xl  '🤖' "
                      : ""
                  }   `}
                />
              ))
            )
            .reverse()}
        </div>

        <div className="mt-4 flex justify-center items-center flex-col gap-5 lg:mr-5">
          <div className=" lg:pr-7">
            <button
              className="bg-blue-500 text-white py-2 px-4 mr-2  rounded-md my-2 "
              onClick={moveUp}
            >
              Up
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 mr-2 rounded-md"
              onClick={moveDown}
            >
              Down
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 mr-2 rounded-md my-1"
              onClick={moveRight}
            >
              Right
            </button>

            <button
              className="bg-blue-500 text-white py-2 px-4 mr-2 rounded-md"
              onClick={moveLeft}
            >
              Left
            </button>
          </div>

          <div className="mt-4 flex justify-center text-[24px]">
            <p className="text-white">
              Report: {`(${position.x_axis + 1}, ${position.y_axis + 1})`}
            </p>
          </div>
          <p className=" text-[24px] ">
            {warning ? (
              <p className="text-red-700">"Hey you are going Out of Bound!" </p>
            ) : (
              " Moving"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyRobot;
