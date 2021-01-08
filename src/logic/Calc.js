export default function Calc(distance, MGLT, consumables) {
  let hours;
  if (consumables.includes("years")) {
    let years = parseInt(consumables.split(" ")[0]);
    hours = years * 365 * 24;
  }
  if (consumables.includes("month")) {
    let month = parseInt(consumables.split(" ")[0]);
    hours = month * 30 * 24;
  }
  if (consumables.includes("week")) {
    let week = parseInt(consumables.split(" ")[0]);
    hours = week * 7 * 24;
  }
  if (consumables.includes("hours")) {
    hours = parseInt(consumables.split(" ")[0]);
  }
  let gasto = distance / MGLT;
  return gasto / hours;
}
