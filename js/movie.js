async function loadData() {
  const res = await fetch('https://www.omdbapi.com/?apikey=281a9324&t=avatar')
  const json = await res.json()
  console.log(json);
}
loadData()