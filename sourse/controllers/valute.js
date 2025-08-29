import { getList, getItem } from "../models/valute.js";

export function mainPage(req, res) {
  let list = getList();

  if(req.query.search) {
    const q = req.query.search.toLowerCase();
    list = list.filter((el) => {
      if (el.name.toLowerCase().includes(q))
        return true;
      else
        if (el.charCode)
          return el.charCode.toLowerCase().includes(q);
        else
          return false;
    })
  }

  res.render('main', {
    req: req,
    valute: list,
    title: 'Главная'
  });
}

export function detailPage(req, res) {
  const t = getItem(req.params.id);

  if(!t) {
    errorPage(req, res);
    return;
  }

  res.render('detail', {
    todo: t,
    title: t.name
  })
}

function errorPage(req, res) {
  res.status(404);
  res.render('404', {
    title: 'Ошибка'
  });
}