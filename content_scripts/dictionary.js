browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;

  document.getElementById("search").addEventListener("click", () => {
    const Http = new XMLHttpRequest();
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      document.getElementById("testeid").textContent = Http.responseText;
    };
  });
});
