import React from "react";

function Bill({ handleChange, bill }) {
  return (
    <section>
      <h2 className="mb-2 text-cyan-darkgray2 lg:text-2xl lg:font-bold">
        Bill
        {bill === 0 ? (
          <span className="float-right text-red-600">Cant be zero</span>
        ) : (
          ``
        )}
      </h2>

      <label
        htmlFor="bill"
        className={`flex cursor-pointer bg-cyan-lightgray2 justify-between items-center p-2 rounded-md ${
          bill === 0 ? " border-2 border-red-700" : ``
        }`}
      >
        <span className="text-cyan-darkgray2">$</span>

        <input
          onChange={(e) => {
            handleChange(e, "bill");
          }}
          placeholder="0"
          value={bill}
          name="bill"
          id="bill"
          className="cursor-pointer text-right text-cyan-verydark text-2xl lg:text-4xl font-bold w-1/2 bg-cyan-lightgray2 focus:outline-none focus:ring-4 focus:ring-green-500"
        ></input>
      </label>
    </section>
  );
}

export default Bill;
