const API_URLS = {
  c: "http://18.143.160.71:5001/compile",
  java: "http://18.143.160.71:5002/compile",
  python: "http://18.143.160.71:5003/compile"
};


;
window.compile = function() {
  const language = document.getElementById("language").value;
  const code = document.getElementById("code").value;

  const data = new FormData();
  data.append("code", code);

  fetch(API_URLS[language], {
    method: "POST",
    body: data
  })
    .then((response) => response.json())
    .then((result) => {
      const outputElement = document.getElementById("output");
      outputElement.textContent = result.stdout || result.stderr;
    });
}

