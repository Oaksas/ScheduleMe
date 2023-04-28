import React from "react";
function Task({ tasks, index }) {
  return (
    <>
      {tasks[index].map((task, index) => {
        if (task !== "") {
          return (
            <td
              className={`px-6 py-4 ${task.color} text-black font-bold`}
              key={index}
            >
              {task.label}
            </td>
          );
        }
        return <td className="px-6 py-4" key={index}></td>;
      })}
    </>
  );
}

export default Task;
