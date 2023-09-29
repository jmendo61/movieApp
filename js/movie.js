const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const errorMessage = document.getElementById("errorMessage")
const movieCard = document.getElementById("movieCard");
const movieImage = document.getElementById("movieImage");
const movieTitle = document.getElementById("movieTitle");
const movieBlurb = document.getElementById("movieBlurb");

const apiURL = 'https://www.omdbapi.com/?'
const apiKey = '281a9324&'

errorMessage.style.display = "none"
movieCard.style.display = "none"

searchButton.addEventListener("click", search)

function search() {
  const query = searchBox.value
  loadData(query)
  searchBox.value = ""
}

async function loadData(query) {
  try {
      const res = await fetch(`${apiURL}apikey=${apiKey}&t=${query}`)
      const json = await res.json()
      console.log(json);
      errorMessage.style.display = "none"
      displayData(json)
      
  } catch (error) {
      errorMessage.style.display = "block"
      errorMessage.innerHTML = "The API could not be reached! 😒"
  }
  
}
function displayData(data) {
  if(data.Error) {
      errorMessage.style.display = "block"
      errorMessage.innerHTML = "Movie not found 😒"
      return
  }

  movieCard.style.display = "block"
  movieTitle.innerHTML = data.Title
  movieBlurb.innerHTML = data.Plot
  if (data.Poster == "N/A") {
      movieImage.src = "../img/placeHolder.jpg"
  } else {
      movieImage.src = data.Poster
  }
}