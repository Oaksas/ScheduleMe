import React, { useState } from "react";
import { allowedHours } from "../utils";
import { locations } from "../utils";
import { checkAvailability } from "../utils";
import { useAlert } from "react-alert";
import { colors } from "../utils";

function Book(props) {
  const alert = useAlert();

  const [location, setLocation] = useState(locations[0]);
  const [startTime, setStartTime] = useState(1);
  const [endTime, setEndTime] = useState(1);

  const { setModalState, modalState, tasks, setTask } = props;
  const addTask = () => {
    if (startTime > endTime) {
      alert.show("Start Time can't be less than End Time !");
      return;
    }
    if (endTime !== startTime) {
      var cellColor = colors[Math.floor(Math.random() * colors.length)];

      for (let index = 0; index < Math.abs(endTime - startTime) + 1; index++) {
        let allTasks = [...tasks];
        if (checkAvailability(allTasks, startTime, index, location)) {
          alert.show("Some cells are already occupied..Try again !");
          break;
        }
        allTasks[Number(startTime) + index][locations.indexOf(location)] = {
          location,
          startTime,
          endTime,
          label: index === 0 ? "Booked" : "",
          color: cellColor,
          occupied: true,
        };
        setTask(allTasks);
        setModalState(!modalState);
      }
    } else {
      alert.show("Start Time and End Time can't be same !");
    }
  };

  return (
    <>
      {modalState ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <form className="rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Location
                    </label>
                    <select
                      className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {locations.map((location, index) => {
                        return <option key={index}> {location}</option>;
                      })}
                    </select>
                    <label className="block text-black text-sm font-bold mb-1">
                      Start Time
                    </label>
                    <select
                      className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    >
                      {allowedHours.map((hour, index) => {
                        return (
                          <option key={index} value={hour.value}>
                            {hour.label < 10 ? "0" + hour.label : hour.label}:00
                          </option>
                        );
                      })}
                    </select>
                    <label className="block text-black text-sm font-bold mb-1">
                      End Time
                    </label>

                    <select
                      className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={endTime}
                      required
                      onChange={(e) => setEndTime(e.target.value)}
                    >
                      {allowedHours.map((hour, index) => {
                        return (
                          <option key={index} value={hour.value}>
                            {hour.label < 10 ? "0" + hour.label : hour.label}:00
                          </option>
                        );
                      })}
                    </select>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setModalState(!modalState)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={addTask}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Book;
