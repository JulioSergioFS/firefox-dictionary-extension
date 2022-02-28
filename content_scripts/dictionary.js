function searchWord() {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then((response) => response.json())
    .then(
      (data) => (document.getElementById("testeid").innerHTML = "ssssssss")
    );
}

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((response) => response.json())
      .then(
        (data) => (document.getElementById("testeid").innerHTML = data[0].word)
      );
  });
});
