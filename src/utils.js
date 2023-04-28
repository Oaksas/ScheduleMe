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
export const timer = [9, 10, 11, 12, 1, 2, 3];

export function checkAvailability(allTasks, startTime, index, location) {
  return allTasks[Number(startTime) + index][locations.indexOf(location)]
    .occupied;
}
// export function timeMapper(startTime) {
//   startTime = Number(startTime);
//   switch (startTime) {
//     case 9:
//       return 0;
//     case 10:
//       return 1;
//     case 11:
//       return 2;
//     case 12:
//       return 3;
//     case 1:
//       return 4;
//     case 2:
//       return 5;
//     case 3:
//       return 6;
//     default:
//       return 6;
//   }
// }
