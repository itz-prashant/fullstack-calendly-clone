"use client";

import TimeSelect from "./TimeSelect";

const weekdayName = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function EventTypeForm() {
  return (
    <form className=" p-2 bg-gray-200 rounded-lg">
      create new event type :
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-2 flex flex-col text-gray-500 text-xs font-bold uppercase w-full">
            title
            <input
              type="text"
              placeholder="title"
              className="border rounded-md p-2 outline-none text-base font-normal bg-white"
            />
          </label>
          <label className="mb-2 flex flex-col text-gray-500 text-xs font-bold uppercase">
            description
            <textarea
              placeholder="description"
              className="border rounded-md p-2 outline-none text-base font-normal bg-white"
            ></textarea>
          </label>

          <label className="mb-2 flex flex-col text-gray-500 text-xs font-bold uppercase">
            event length
            <input
              type="number"
              placeholder="30"
              className="border rounded-md p-2 outline-none text-base font-normal bg-white"
            />
          </label>
        </div>
        <div>
          <label className="mb-2 flex flex-col text-gray-500 text-xs font-bold uppercase">
            <span>availablity:</span>
            <div>
              {weekdayName.map((day) => (
                <div key={day} className="grid grid-cols-2 font-base items-center h-7">
                  <span >{day}</span>
                  <div
                    className="inline-flex gap-2 items-center ml-2"
                  >
                    <TimeSelect step={30} />
                    <span>-</span>
                    <TimeSelect step={60} />
                  </div>
                </div> 
              ))}
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center w-full mt-3">
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg">
          Save
        </button>
      </div>
    </form>
  );
}
