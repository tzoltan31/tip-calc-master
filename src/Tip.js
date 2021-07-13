import React from "react";
import { ReactComponent as PersonLogo } from "./images/icon-person.svg";

function Tip({
  people,
  lastIsCustom,
  handleChange,
  handleTip,
  tip,
  custom,
  isValidCustom,
}) {
  const percent = [5, 10, 15, 25, 50];

  return (
    <>
      <section>
        <h4 className="text-cyan-darkgray2 mb-4 lg:text-xl lg:font-extrabold">
          Select Tip %
        </h4>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {percent.map((item, index) => {
            return (
              <button
                onClick={() => {
                  handleTip(item);
                }}
                key={index}
                className={`hover:bg-cyan-hover hover:text-cyan-verydark text-2xl font-bold rounded-md py-2 flex justify-center items-center pt-3 cursor-pointer ${
                  tip === item
                    ? ` bg-cyan-primary text-cyan-verydark`
                    : ` bg-cyan-verydark text-white`
                }`}
              >
                <p>{item}%</p>
              </button>
            );
          })}
          <div
            className={
              isValidCustom(custom) === false && lastIsCustom
                ? `border-4 border-red-700`
                : ``
            }
          >
            <input
              onChange={(e) => {
                handleChange(e, "custom");
              }}
              value={custom}
              placeholder="Custom"
              className={`text-right text-2xl bg-cyan-lightgray2 text-cyan-darkgray font-bold h-full w-full flex justify-end items-end pr-3 pb-1 focus:outline-none focus:ring-4 focus:ring-green-500`}
            ></input>
          </div>
        </div>
      </section>
      <section>
        <h4 className="mb-2 text-cyan-darkgray2 lg:text-xl lg:font-extrabold">
          Number of people
          {people === 0 ? (
            <span className="float-right text-red-600">Cant be zero</span>
          ) : (
            ``
          )}
        </h4>
        <label
          htmlFor="people"
          className={`cursor-pointer flex  bg-cyan-lightgray2 justify-between items-center p-2 rounded-md  ${
            people === 0 ? " border-2 border-red-700" : ``
          }
          `}
        >
          <PersonLogo />
          <input
            onChange={(e) => {
              handleChange(e, "people");
            }}
            value={people}
            placeholder="0"
            id="people"
            name="people"
            className="cursor-pointer text-right  text-cyan-verydark text-2xl lg:text-4xl  font-bold w-1/2 bg-cyan-lightgray2 focus:outline-none focus:ring-4 focus:ring-green-500"
          ></input>
        </label>
      </section>
    </>
  );
}

export default Tip;
