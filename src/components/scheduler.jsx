import React, { useState } from "react";
import Book from "./book";
import Task from "./task";
import { locations, timer } from "../utils";
function Scheduler() {
  const [modalState, setModalState] = useState(false);

  const [tasks, setTask] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  return (
    <div className="container mx-auto mt-10">
      <div className="float-right mb-4">
        <button
          className="bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 mx-3  hover:border-transparent rounded"
          onClick={() => setModalState(!modalState)}
        >
          Book
        </button>
      </div>
      {modalState ? (
        <Book
          modalState={modalState}
          setModalState={setModalState}
          tasks={tasks}
          setTask={setTask}
        />
      ) : (
        <></>
      )}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              {locations.map((location, index) => {
                return (
                  <th scope="col" className="px-6 py-3 text-white" key={index}>
                    {location}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {timer.map((time, index) => {
              return (
                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4  border-b font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {time}:00 AM
                  </th>
                  <Task tasks={tasks} index={index} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scheduler;
