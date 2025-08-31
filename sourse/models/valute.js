import { database, saveDatabase } from "./__loaddatabase.js";

const valute = database.valute;

export function getList() {
  return valute;
}

export function getItem(id) {
  return valute.find((el) => el.numCode === id);
}

function getItemIndex(id) {
  return valute.findIndex((el) => el.numCode === id);
}

export function setDoneItem(id) {
  const index = getItemIndex(id);
  if (index > -1) {
    if (valute[index].done === false)
      valute[index].done = true;
    else
      valute[index].done = false;
    saveDatabase();
    return true;
  } else
    return false;
}