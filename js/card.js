// import cardActions from "./actions/cardActions";
async function loadspels() {
  // 1. Загружаем JSON
  const response = await fetch('../api/cards.json?_=' + Date.now());
  const data = await response.json();

  console.log(data)
}

loadspels()