export const allowedHours = [
  { label: 9, value: 0 },
  { label: 10, value: 1 },
  { label: 11, value: 2 },
  { label: 12, value: 3 },
  { label: 1, value: 4 },
  { label: 2, value: 5 },
  { label: 3, value: 6 },
];
export const locations = ["location 1", "location 2", "location 3"];
export const colors = [
  "bg-amber-400",
  "bg-yellow-400",
  "bg-lime-400",
  "bg-cyan-200",
  "bg-indigo-300",
  "bg-fuchsia-200",
];

export function checkAvailability(allTasks, startTime, index, location) {
  return allTasks[Number(startTime) + index][locations.indexOf(location)]
    .occupied;
}
