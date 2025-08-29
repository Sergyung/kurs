import { database } from "./__loaddatabase.js";

const valute = database.valute;

export function getList() {
  return valute;
}

export function getItem(id) {
  return valute.find((el) => el.numCode === id);
}