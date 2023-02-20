import React from "react";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Grids() {
  return (
    <React.Fragment>
      <div className="m-3 p-2 rounded-md grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nums.map((num) => (
          <div
            className="bg-white text-center rounded-md p-24"
            key={num}
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
